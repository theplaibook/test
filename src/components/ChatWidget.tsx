"use client";

import { useState, useEffect, useRef } from "react";

/* A scripted demo of Bootyfull signing up a customer.
   Purely a showcase — no backend, no data leaves the page. */
type Line = { from: "bot" | "user"; text: string };

const script: Line[] = [
  { from: "bot", text: "Hey there! I'm Bootyfull. Looking to get signed up today?" },
  { from: "user", text: "yeah, how much is it?" },
  { from: "bot", text: "Plans start at $99/mo and I do all the talking. Want me to set you up right now?" },
  { from: "user", text: "sure, let's do it" },
  { from: "bot", text: "Amazing. Quick one — what's your name?" },
  { from: "user", text: "Camila" },
  { from: "bot", text: "Encantada, Camila. Best number to reach you?" },
  { from: "user", text: "555-0142" },
  { from: "bot", text: "Done. You're officially signed up. I'll take it from here while you sleep." },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(0); // how many lines are shown
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reveal the conversation one line at a time whenever the panel opens.
  useEffect(() => {
    if (!open) {
      setVisible(0);
      setTyping(false);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function step(i: number) {
      if (cancelled || i >= script.length) return;
      const line = script[i];
      const showDelay = line.from === "bot" ? 750 : 550;

      if (line.from === "bot") setTyping(true);

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setTyping(false);
          setVisible(i + 1);
          timers.push(setTimeout(() => step(i + 1), 650));
        }, showDelay)
      );
    }

    step(0);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [open]);

  // Keep the newest message in view.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visible, typing]);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Chat panel */}
      {open && (
        <div className="widget-pop w-[90vw] max-w-sm bg-charcoal border border-gold/30 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate bg-gradient-to-r from-gold/15 via-violet/10 to-transparent">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gold to-violet">
              <span className="font-display text-xl text-black">B</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-cyan border-2 border-charcoal" />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg tracking-wider text-off-white leading-none">
                BOOTYFULL
              </p>
              <p className="text-[11px] text-cyan uppercase tracking-wider mt-1">
                Online — always
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-gray-500 hover:text-gold transition-colors text-2xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto px-4 py-4 space-y-3 bg-black/40"
          >
            {script.slice(0, visible).map((line, i) => (
              <div
                key={i}
                className={`bubble-in flex ${
                  line.from === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                    line.from === "bot"
                      ? "bg-gradient-to-br from-gold to-violet text-black font-medium"
                      : "bg-slate text-off-white"
                  }`}
                >
                  {line.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-slate px-4 py-3 flex items-center gap-1.5">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            {visible >= script.length && !typing && (
              <p className="text-center text-[11px] text-gray-500 uppercase tracking-wider pt-2">
                Customer signed up in 9 seconds
              </p>
            )}
          </div>

          {/* Fake input */}
          <div className="px-4 py-3 border-t border-slate flex items-center gap-2 bg-charcoal">
            <div className="flex-1 bg-black/50 border border-slate px-4 py-2.5 text-sm text-gray-600">
              Type a message...
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gold to-violet">
              <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with Bootyfull"
        className="relative flex items-center gap-3 bg-gradient-to-r from-gold to-violet text-black pl-5 pr-6 py-4 shadow-xl hover:translate-y-[-2px] transition-transform"
      >
        {!open && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan pulse-ring" />
        )}
        <span className="relative w-3 h-3 bg-cyan" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          {open ? "Close chat" : "Chat with Bootyfull"}
        </span>
      </button>
    </div>
  );
}
