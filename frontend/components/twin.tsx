'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, Shield, Cpu, Waves, CornerDownLeft } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED = [
  'Design a multi-account AWS platform',
  'How would Amit approach agentic AI architecture?',
  'Best practices for cloud modernization',
  'How to design resilient enterprise systems',
];

export default function Twin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText.trim(), session_id: sessionId || undefined }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      const data = await response.json();
      if (!sessionId && data.session_id) setSessionId(data.session_id);

      setMessages(prev => [...prev, {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: `${Date.now()}-error`,
        role: 'assistant',
        content: 'I ran into an issue while processing that request. Please try again in a moment.',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    // ↓ overflow-hidden added — this is the key fix
    <section className="relative flex h-full min-h-0 flex-col overflow-hidden bg-transparent text-white">

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 text-sm font-semibold text-white shadow-[0_0_24px_rgba(16,185,129,0.25)]">
              AK
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#060B16] bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.75)]" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-white">Amit's AI Twin</p>
            <p className="truncate text-xs text-slate-400">Executive architecture and platform intelligence</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Online
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Executive Mode
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {messages.length === 0 ? (
          <div className="flex min-h-0 flex-1 overflow-y-auto px-5 py-5">
            <div className="mx-auto flex w-full max-w-5xl flex-col">
              <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">

                {/* Intro card */}
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 text-sm font-semibold text-white shadow-[0_0_36px_rgba(16,185,129,0.22)]">
                      AK
                    </div>
                    <div>
                      <p className="text-base font-semibold tracking-tight text-white">Welcome</p>
                      <p className="text-xs text-slate-400">High-signal conversations on architecture, AI, and platform strategy</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                    <p className="text-sm leading-7 text-slate-100">
                      Welcome — I'm Amit's AI twin. Ask about AI platforms, AWS architecture, cloud modernization, or large-scale system design.
                    </p>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      { icon: Shield, label: 'Architecture', color: 'text-emerald-300', desc: 'Secure AWS foundations, multi-account design, resilience, and platform governance.' },
                      { icon: Cpu, label: 'Agentic AI', color: 'text-blue-300', desc: 'Multi-agent systems, orchestration patterns, evaluation strategy, and enterprise adoption.' },
                      { icon: Waves, label: 'Modernization', color: 'text-cyan-300', desc: 'Cloud migration, platform transformation, performance, cost efficiency, and operating models.' },
                    ].map(({ icon: Icon, label, color, desc }) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                          <Icon className={`h-4 w-4 ${color}`} />
                          {label}
                        </div>
                        <p className="text-xs leading-6 text-slate-400">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prompt rail */}
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">Suggested prompts</p>
                      <p className="text-xs text-slate-500">Curated conversation starters</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-500">Ready</div>
                  </div>
                  <div className="space-y-3">
                    {SUGGESTED.map((q, index) => (
                      <button key={q} onClick={() => sendMessage(q)}
                        className="group w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all duration-200 hover:border-emerald-400/30 hover:bg-emerald-400/[0.08]">
                        <div className="mb-1.5 flex items-center justify-between gap-3">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Prompt {index + 1}</span>
                          <span className="text-xs text-slate-500 transition-colors group-hover:text-emerald-200">Use →</span>
                        </div>
                        <p className="text-sm leading-6 text-slate-200">{q}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-1.5 flex items-center gap-2 text-xs font-medium text-slate-300">
                      <CornerDownLeft className="h-3.5 w-3.5 text-slate-400" />
                      Interaction note
                    </div>
                    <p className="text-xs leading-6 text-slate-500">Ask specific architecture, AI, cloud, or transformation questions for sharper responses.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
              {messages.map((message) => (
                <div key={message.id} className={`flex items-end gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.role === 'assistant' && (
                    <div className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.22)]">AK</div>
                  )}
                  <div className={`max-w-[78%] rounded-[22px] px-4 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] ${
                    message.role === 'user'
                      ? 'rounded-br-md bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 text-white'
                      : 'rounded-bl-md border border-white/10 bg-white/[0.05] text-slate-100'
                  }`}>
                    <p className="whitespace-pre-wrap text-sm leading-7">{message.content}</p>
                    <div className={`mt-2 text-[11px] ${message.role === 'user' ? 'text-white/65' : 'text-slate-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  {message.role === 'user' && (
                    <div className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[11px] font-semibold text-slate-300">You</div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-end gap-3 justify-start">
                  <div className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.22)]">AK</div>
                  <div className="rounded-[22px] rounded-bl-md border border-white/10 bg-white/[0.05] px-4 py-4">
                    <div className="flex items-center gap-1.5">
                      {[0, 120, 240].map(delay => (
                        <span key={delay} className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Input — always anchored at bottom */}
        <div className="shrink-0 border-t border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="mx-auto w-full max-w-4xl">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-2 backdrop-blur-xl">
              <div className="flex items-center gap-3 rounded-[22px] bg-white/[0.03] px-4 py-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Amit's AI twin about architecture, AI, cloud, or platform strategy..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500 disabled:opacity-50"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 text-white shadow-[0_12px_28px_rgba(16,185,129,0.28)] transition-all duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between gap-3 px-3 pb-1 pt-2">
                <p className="text-[11px] text-slate-500">Press Enter to send</p>
                <p className="hidden text-[11px] text-slate-500 sm:block">Focused on enterprise AI, AWS, modernization, and system design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}