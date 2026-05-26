"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroAnimation() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-[420px] w-[420px]">
      {/* Soft radial glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[color:var(--accent-100)] to-[color:var(--tint-cyan-50)] blur-2xl opacity-70" />

      {/* Radar ping rings (3 staggered) */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ping-${i}`}
          className="absolute inset-0 rounded-full border border-[color:var(--accent-200)]"
          initial={{ scale: 0.55, opacity: 0 }}
          animate={
            reduce
              ? { scale: 1, opacity: 0.4 }
              : { scale: [0.55, 1.05], opacity: [0.55, 0] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 3.6,
                  ease: "easeOut",
                  repeat: Infinity,
                  delay: i * 1.2,
                }
          }
        />
      ))}

      {/* Three stable concentric guides */}
      <div className="absolute inset-6 rounded-full border border-[color:var(--accent-200)] opacity-40" />
      <div className="absolute inset-16 rounded-full border border-[color:var(--accent-200)] opacity-60" />
      <div className="absolute inset-28 rounded-full border border-[color:var(--accent-300,_#94aac8)] opacity-80" />

      {/* Rotating sweep line — like a radar scan */}
      {!reduce && (
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 9, ease: "linear", repeat: Infinity }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[2px] w-1/2 origin-left -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,37,69,0) 0%, rgba(11,37,69,0.45) 80%, rgba(15,118,110,0.7) 100%)",
            }}
          />
        </motion.div>
      )}

      {/* Outer orbit ring — 4 dots rotating clockwise */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={
          reduce
            ? undefined
            : { duration: 20, ease: "linear", repeat: Infinity }
        }
      >
        {[0, 90, 180, 270].map((angle, i) => (
          <span
            key={`out-${angle}`}
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-205px)`,
            }}
          >
            <span
              className={`block h-2 w-2 rounded-full shadow-[0_0_10px_rgba(11,37,69,0.5)] ${
                i === 0
                  ? "bg-[color:var(--accent-700)]"
                  : i === 2
                    ? "bg-[color:var(--tint-cyan-600)]"
                    : "bg-[color:var(--accent-500)]"
              }`}
            />
          </span>
        ))}
      </motion.div>

      {/* Inner orbit ring — 6 smaller dots rotating counter-clockwise */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={
          reduce
            ? undefined
            : { duration: 14, ease: "linear", repeat: Infinity }
        }
      >
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <span
            key={`in-${angle}`}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-115px)`,
            }}
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-500)] opacity-70" />
          </span>
        ))}
      </motion.div>

      {/* Central shield — breathing scale + soft glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={
            reduce
              ? undefined
              : {
                  scale: [1, 1.04, 1],
                  filter: [
                    "drop-shadow(0 0 0 rgba(11,37,69,0))",
                    "drop-shadow(0 0 16px rgba(11,37,69,0.35))",
                    "drop-shadow(0 0 0 rgba(11,37,69,0))",
                  ],
                }
          }
          transition={
            reduce
              ? undefined
              : { duration: 4, ease: EASE, repeat: Infinity }
          }
        >
          <svg
            viewBox="0 0 80 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-32 h-32 text-[color:var(--accent-700)]"
          >
            <path
              d="M40 6l28 10v22c0 18-12 32-28 38C24 70 12 56 12 38V16z"
              fill="white"
            />
            {/* animated check stroke */}
            {reduce ? (
              <path d="M28 40l8 8 16-18" />
            ) : (
              <motion.path
                d="M28 40l8 8 16-18"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0.4, 1, 1] }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1.6,
                }}
              />
            )}
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
