import Twin from '@/components/twin';
import {
  Sparkles, Shield, Cpu, Activity, Command, ChevronRight, Cloud, BrainCircuit, Layers3,
} from 'lucide-react';

const stats = [
  { label: 'Infra cost saved', value: '30–45%', sub: 'Across platforms', tone: 'emerald' },
  { label: 'Enterprise revenue', value: '£2M+', sub: 'Strategic engagements', tone: 'blue' },
  { label: 'Uptime delivered', value: '99.99%', sub: 'Cloud-native systems', tone: 'cyan' },
];

const capabilities = [
  { label: 'AWS Architecture', icon: Cloud },
  { label: 'Agentic AI', icon: BrainCircuit },
  { label: 'Platform Engineering', icon: Layers3 },
  { label: 'System Design', icon: Shield },
  { label: 'Cloud Modernization', icon: Activity },
  { label: 'Enterprise Delivery', icon: Cpu },
];

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-[#060B16] text-white">
      <div className="relative flex h-full overflow-hidden">

        {/* ── Background ── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-cyan-500/10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        </div>

        {/* ── Sidebar ── */}
        <aside className="relative hidden w-[300px] shrink-0 flex-col overflow-y-auto border-r border-white/10 bg-white/[0.03] xl:flex">
          <div className="border-b border-white/10 px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 text-base font-semibold text-white shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                  AK
                </div>
                <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#060B16] bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.7)]" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base font-semibold tracking-tight text-white">Amit Kattyan</h1>
                <p className="mt-0.5 text-xs text-slate-400">AI Platform Leader</p>
                <p className="text-xs text-slate-500">Cloud Solutions Architect</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-6 py-6">
            <section>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Credentials</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-200">
                  <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l2.39 6.26L19 8.27l-5 4.87 1.18 6.86L10 16.77l-5.18 3.23L6 13.14 1 8.27l6.61-1.01z"/></svg>
                  AWS Golden Jacket
                </span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200">AWS Top 1%</span>
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">12x AWS Certified</span>
              </div>
            </section>

            <section>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Expertise</p>
              <div className="grid grid-cols-2 gap-2">
                {capabilities.map(({ label, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Icon className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-xs font-medium">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                Digital Twin Profile
              </div>
              <p className="text-xs leading-6 text-slate-400">
                Built to reflect architecture judgment, platform strategy, cloud modernization thinking, and enterprise AI decision-making.
              </p>
            </section>
          </div>
        </aside>

        {/* ── Main ── */}
        <section className="relative flex min-w-0 flex-1 flex-col overflow-hidden">

          {/* Top nav */}
          <header className="shrink-0 border-b border-white/10 bg-[#060B16]/80 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-5 py-3 md:px-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live in production
                </span>
                <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 md:inline-flex">
                  <Command className="h-3.5 w-3.5 text-slate-400" />
                  Conversational AI dashboard
                </span>
              </div>
              <div className="hidden items-center gap-2 lg:flex">
                {['Profile', 'Capabilities', 'Projects'].map(t => (
                  <button key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/[0.08]">{t}</button>
                ))}
              </div>
            </div>
          </header>

          {/* Scrollable content above chat */}
          <div className="shrink-0 overflow-y-auto px-5 pt-5 md:px-8">
            <div className="mx-auto w-full max-w-7xl space-y-4">

              {/* Hero + Session */}
              <div className="grid gap-4 2xl:grid-cols-[1.2fr_0.8fr]">
                <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    Digital Twin Interface
                  </div>
                  <h2 className="text-xl font-semibold tracking-tight text-white">
                    Premium AI twin experience for architecture, cloud, and platform conversations
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A focused environment designed to represent leadership in AWS architecture, enterprise AI systems, cloud modernization, and large-scale engineering strategy.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { icon: Shield, label: 'Enterprise-grade systems', color: 'text-emerald-300' },
                      { icon: Cpu, label: 'Agentic AI', color: 'text-blue-300' },
                      { icon: Activity, label: 'Cloud modernization', color: 'text-cyan-300' },
                    ].map(({ icon: Icon, label, color }) => (
                      <div key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
                        <Icon className={`h-3.5 w-3.5 ${color}`} />
                        {label}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Session</p>
                      <p className="mt-1 text-base font-semibold text-white">AI Twin Workspace</p>
                    </div>
                    <span className="rounded-xl border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">Online</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { label: 'Mode', value: 'Executive response profile' },
                      { label: 'Focus', value: 'Architecture, AI, cloud, systems' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-2.5">
                        <div>
                          <p className="text-[10px] text-slate-500">{label}</p>
                          <p className="text-xs font-medium text-white">{value}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-500" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(({ label, value, sub, tone }) => (
                  <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5">
                    <p className="mb-1.5 text-[10px] uppercase tracking-[0.24em] text-slate-500">{label}</p>
                    <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
                    <p className={`mt-1 text-xs font-medium ${tone === 'emerald' ? 'text-emerald-300' : tone === 'blue' ? 'text-blue-300' : 'text-cyan-300'}`}>{sub}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ── Chat — takes ALL remaining height, never overflows ── */}
          <div className="mx-auto flex w-full max-w-7xl flex-1 min-h-0 flex-col px-5 pb-5 pt-4 md:px-8">
            <div className="flex flex-1 min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              <Twin />
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}