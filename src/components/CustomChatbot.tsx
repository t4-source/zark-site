"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import { matchIntent } from "./chatbot/matcher";
import { SUGGESTION_LABELS, DEFAULT_FOLLOW_UPS } from "./chatbot/intents";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WELCOME_MESSAGE =
  "Hello — I am Vitta, an information-only assistant for Z A R K & Co LLP. I can describe the firm's practice areas, cybersecurity services, DPDPA compliance, offices and contact details.\n\nA quick note: under ICAI rules, I cannot quote fees, take engagements, give tailored advice or share client references. For anything beyond general information, please contact the firm directly.";

function labelFor(intentId: string): string | null {
  return SUGGESTION_LABELS[intentId] || null;
}

export default function CustomChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: WELCOME_MESSAGE, isUser: false, timestamp: new Date() },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastIntentId, setLastIntentId] = useState<string | undefined>(undefined);
  const [suggestionIds, setSuggestionIds] = useState<string[]>(DEFAULT_FOLLOW_UPS);

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const suggestionLabels = useMemo(
    () =>
      suggestionIds
        .map((id) => ({ id, label: labelFor(id) }))
        .filter((s): s is { id: string; label: string } => !!s.label),
    [suggestionIds],
  );

  const handleSendMessage = useCallback(
    (text?: string) => {
      const messageText = (text ?? inputText).trim();
      if (!messageText) return;

      const userMessage: Message = {
        id: Date.now(),
        text: messageText,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputText("");
      setIsTyping(true);

      // Simulate thinking time scaled by response length (200–1100ms).
      const result = matchIntent(messageText, { lastIntentId });
      const delay = Math.min(
        1100,
        Math.max(200, 200 + Math.floor(result.intent.response.length / 6)),
      );

      window.setTimeout(() => {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: result.intent.response,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setSuggestionIds(result.followUpIntents);
        if (result.intent.category !== "fallback") {
          setLastIntentId(result.intent.id);
        }
        setIsTyping(false);
      }, delay);
    },
    [inputText, lastIntentId],
  );

  const handleQuickReply = useCallback(
    (intentId: string) => {
      const label = labelFor(intentId);
      if (label) handleSendMessage(label);
    },
    [handleSendMessage],
  );

  const handleResetConversation = useCallback(() => {
    setMessages([
      { id: Date.now(), text: WELCOME_MESSAGE, isUser: false, timestamp: new Date() },
    ]);
    setLastIntentId(undefined);
    setSuggestionIds(DEFAULT_FOLLOW_UPS);
    setInputText("");
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group focus:outline-none"
          aria-label="Open chat"
        >
          <div className="relative inline-flex items-center">
            <div className="flex items-center gap-3 bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-xl border border-slate-200 max-w-xs sm:max-w-sm">
              <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm flex-shrink-0">
                <Image
                  src="/bot.webp"
                  alt="Chat assistant"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  Information assistant
                  <span className="flex gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </span>
                </span>
                <span className="text-sm font-semibold text-slate-900 leading-tight">
                  Ask Vitta
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />
          </div>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100%-2rem)] max-w-md h-[70vh] sm:h-[560px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-white/10">
                <Image
                  src="/bot.webp"
                  alt="Vitta"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <div className="leading-tight">
                <div className="font-semibold">Vitta</div>
                <div className="text-[11px] text-blue-100">
                  Information assistant · Z A R K &amp; Co LLP
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetConversation}
                className="text-blue-100 hover:text-white transition-colors p-1"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v6h6M20 20v-6h-6M4 10a8 8 0 0114-5.3M20 14a8 8 0 01-14 5.3"
                  />
                </svg>
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-blue-100 hover:text-white transition-colors p-1"
                title={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMinimized
                        ? "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        : "M20 12H4"
                    }
                  />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white transition-colors p-1"
                title="Close chat"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <div
              ref={scrollerRef}
              className="flex-1 overflow-y-auto p-4 space-y-3"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                      message.isUser
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-slate-100 text-slate-900 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.text}
                    </p>
                    <p className="text-[10px] mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-900 px-4 py-2 rounded-2xl rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick suggestions */}
          {!isMinimized && suggestionLabels.length > 0 && (
            <div className="px-4 pb-2">
              <p className="text-[10px] text-slate-500 mb-1.5 uppercase tracking-wider font-medium">
                Suggested
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestionLabels.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleQuickReply(s.id)}
                    className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 px-3 py-1.5 rounded-full transition-colors font-medium border border-slate-200"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          {!isMinimized && (
            <div className="p-3 border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about practice areas, cybersecurity, offices…"
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-900 placeholder-slate-500 bg-white"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  Send
                </button>
              </div>
              <p className="mt-1.5 text-[10px] text-slate-400 leading-tight">
                Information only. Not professional advice or an offer of services.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
