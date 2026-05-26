"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { angle: 270, label: "Audit" },
  { angle: 330, label: "Tax" },
  { angle: 30, label: "Risk" },
  { angle: 90, label: "Bank" },
  { angle: 150, label: "Project" },
  { angle: 210, label: "Stock" },
];

const CENTER = { x: 200, y: 200 };
const RADIUS = 140;

function polar(cx: number, cy: number, angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
}

// Quadratic bezier from hub to each outer node with a slight perpendicular curve
function curvedPathTo(targetX: number, targetY: number) {
  const dx = targetX - CENTER.x;
  const dy = targetY - CENTER.y;
  // perpendicular offset for curve control point
  const px = CENTER.x + dx * 0.5 - dy * 0.18;
  const py = CENTER.y + dy * 0.5 + dx * 0.18;
  return `M ${CENTER.x} ${CENTER.y} Q ${px} ${py} ${targetX} ${targetY}`;
}

export default function HeroFlow() {
  const reduce = useReducedMotion();
  const nodePoints = NODES.map((n) => ({
    ...n,
    ...polar(CENTER.x, CENTER.y, n.angle, RADIUS),
  }));

  return (
    <div className="relative h-[420px] w-[420px]">
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-[color:var(--accent-50)] via-white to-[color:var(--tint-cyan-50)]" />
      <div className="absolute inset-0 rounded-[44px] border border-[color:var(--border)]" />

      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="flowStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(11,37,69)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="rgb(15,118,110)" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(11,37,69)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(11,37,69)" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hub ambient glow */}
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="90"
          fill="url(#hubGlow)"
          opacity="0.55"
        />

        {/* Outer ring — slow rotating dotted band */}
        <motion.g
          style={{ originX: "200px", originY: "200px" }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={
            reduce
              ? undefined
              : { duration: 40, ease: "linear", repeat: Infinity }
          }
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="rgb(11,37,69)"
            strokeOpacity="0.12"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
        </motion.g>

        {/* Flowing connection paths */}
        {nodePoints.map((n, i) => {
          const d = curvedPathTo(n.x, n.y);
          return (
            <g key={`path-${i}`}>
              {/* Faint base path */}
              <path
                d={d}
                fill="none"
                stroke="rgb(11,37,69)"
                strokeOpacity="0.12"
                strokeWidth="1.5"
              />
              {/* Animated flowing dashed overlay */}
              <motion.path
                d={d}
                fill="none"
                stroke="url(#flowStroke)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="4 14"
                initial={{ strokeDashoffset: 0 }}
                animate={
                  reduce ? undefined : { strokeDashoffset: -36 }
                }
                transition={
                  reduce
                    ? undefined
                    : {
                        duration: 2.4,
                        ease: "linear",
                        repeat: Infinity,
                        delay: i * 0.18,
                      }
                }
              />
              {/* Traveling brighter particle */}
              {!reduce ? (
                <motion.circle
                  r="2.5"
                  fill="rgb(11,37,69)"
                  filter="url(#softGlow)"
                  initial={{
                    cx: CENTER.x,
                    cy: CENTER.y,
                    opacity: 0,
                  }}
                  animate={{
                    cx: [CENTER.x, n.x],
                    cy: [CENTER.y, n.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.4,
                    times: [0, 0.15, 0.85, 1],
                  }}
                />
              ) : null}
            </g>
          );
        })}

        {/* Outer nodes with pulse */}
        {nodePoints.map((n, i) => (
          <g key={`node-${i}`}>
            {/* Pulse ring */}
            {!reduce ? (
              <motion.circle
                cx={n.x}
                cy={n.y}
                r="14"
                fill="none"
                stroke="rgb(11,37,69)"
                strokeWidth="1"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: [1, 2.1], opacity: [0.45, 0] }}
                transition={{
                  duration: 2.8,
                  ease: "easeOut",
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                style={{ originX: `${n.x}px`, originY: `${n.y}px` }}
              />
            ) : null}
            {/* Node circle */}
            <circle
              cx={n.x}
              cy={n.y}
              r="13"
              fill="white"
              stroke="rgb(179,196,225)"
              strokeWidth="1.5"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="3.5"
              fill="rgb(11,37,69)"
            />
          </g>
        ))}

        {/* Central hub */}
        <g>
          {/* Soft outer pulse */}
          {!reduce ? (
            <motion.circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="30"
              fill="none"
              stroke="rgb(11,37,69)"
              strokeWidth="1"
              animate={{ scale: [1, 1.45], opacity: [0.5, 0] }}
              transition={{
                duration: 3.2,
                ease: "easeOut",
                repeat: Infinity,
              }}
              style={{ originX: "200px", originY: "200px" }}
            />
          ) : null}
          {/* Filled hub */}
          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r="28"
            fill="rgb(11,37,69)"
          />
          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r="28"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.25"
          />
          {/* Wordmark Z A R K — abstract */}
          <text
            x={CENTER.x}
            y={CENTER.y + 5}
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="white"
            letterSpacing="3"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}
          >
            ZARK
          </text>
        </g>

        {/* Decorative floating sparkles */}
        {!reduce ? (
          <>
            <motion.circle
              cx="60"
              cy="70"
              r="1.5"
              fill="rgb(15,118,110)"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle
              cx="350"
              cy="100"
              r="1.5"
              fill="rgb(11,37,69)"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.circle
              cx="340"
              cy="330"
              r="1.5"
              fill="rgb(15,118,110)"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="70"
              cy="340"
              r="1.5"
              fill="rgb(11,37,69)"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, delay: 1.2 }}
            />
          </>
        ) : null}
      </svg>
    </div>
  );
}
