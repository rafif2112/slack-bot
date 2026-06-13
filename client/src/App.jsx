export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap');
        .mono { font-family: 'JetBrains Mono', monospace; }
        .hero-glow::before { content:''; position:absolute; top:-120px; left:50%; transform:translateX(-50%); width:600px; height:600px; background:radial-gradient(ellipse, rgba(124,58,237,.18) 0%, transparent 70%); pointer-events:none; }
        .gradient-text { background:linear-gradient(135deg,#7C3AED,#06B6D4); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .animate-pulse-dot { animation: pulse-dot 2s infinite; }
        .animate-blink { animation: blink 1.1s step-end infinite; }
      `}</style>

      {/* NAV */}
      <nav className="flex items-center justify-between px-12 py-5 border-b border-[#21262D] sticky top-0 bg-[#0D1117] backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base bg-linear-to-br from-violet-600 to-cyan-400">⚡</div>
          <span className="text-lg font-bold tracking-tight text-[#E6EDF3]">Fidev Bot</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-[#8B949E] text-sm font-medium hover:text-[#E6EDF3] transition-colors">Features</a>
          <a href="#commands" className="text-[#8B949E] text-sm font-medium hover:text-[#E6EDF3] transition-colors">Commands</a>
          <a href="https://slack.com" className="bg-linear-to-r from-violet-600 to-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-85 transition-opacity">Add to Slack</a>
        </div>
      </nav>

      <main className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">

        {/* HERO */}
        <section className="relative overflow-hidden text-center px-12 pt-24 pb-20 hero-glow">
          <div className="mono inline-flex items-center gap-2 bg-[#161B22] border border-[#30363D] rounded-full px-4 py-1.5 text-xs text-[#8B949E] mb-7">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-dot" />
            Active &amp; running in socket mode
          </div>

          <h1 className="text-6xl font-bold leading-[1.1] tracking-[-1.5px] mb-5 max-w-2xl mx-auto">
            Your Slack workspace,{" "}
            <span className="gradient-text">supercharged</span>
          </h1>
          <p className="text-[#8B949E] text-lg leading-relaxed max-w-lg mx-auto mb-10">
            Fidev Bot brings dev tools, fun interactions, and instant utilities right into your channels — no context switching needed.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#commands" className="bg-linear-to-r from-violet-600 to-violet-800 text-white px-7 py-3 rounded-xl text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,.4)] transition-all">View Commands</a>
            <a href="#features" className="bg-transparent text-[#E6EDF3] px-7 py-3 rounded-xl text-sm font-semibold border border-[#30363D] hover:border-violet-600 hover:bg-violet-600/10 transition-all">Learn More</a>
          </div>

          {/* Terminal */}
          <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 max-w-lg mx-auto mt-14 text-left">
            <div className="flex gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
            </div>
            <div className="mono text-[13px] leading-[1.9] text-[#8B949E] space-y-0">
              <p><span className="text-violet-400">you</span> → <span className="text-cyan-400">/fidev-ping</span></p>
              <p><span className="text-green-400">✓ Pong! Latency: 12ms</span></p>
              <p className="mt-2"><span className="text-violet-400">you</span> → <span className="text-cyan-400">/fidev-joke</span></p>
              <p><span className="text-green-400">✓ Why do Java developers wear glasses?</span></p>
              <p><span className="text-green-400">&nbsp;&nbsp; Because they don't C#</span></p>
              <p className="mt-2"><span className="text-violet-400">you</span> → <span className="text-cyan-400">/fidev-</span><span className="inline-block w-2 h-3.5 bg-violet-500 rounded-sm align-middle animate-blink" /></p>
            </div>
          </div>
        </section>

        <div className="h-px bg-linear-to-r from-transparent via-[#21262D] to-transparent mx-12" />

        {/* FEATURES */}
        <section id="features" className="px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <span className="mono text-xs text-violet-500 tracking-[2px] uppercase mb-3 block">Why Fidev Bot</span>
            <h2 className="text-4xl font-bold tracking-tight mb-12">Built for developers,<br />loved by teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "🚀", title: "Fast & Reliable", desc: "Socket mode connection keeps latency minimal — commands respond in milliseconds." },
                { icon: "🎉", title: "Fun Interactions", desc: "Jokes, cat facts, and quotes to keep team morale high between deploys." },
                { icon: "🛠️", title: "Developer Tools", desc: "Echo, ping, and latency check — small utilities that save big context switches." },
              ].map((f) => (
                <div key={f.title} className="bg-[#161B22] border border-[#21262D] rounded-2xl p-7 hover:border-violet-600 hover:-translate-y-1 transition-all">
                  <span className="text-3xl mb-4 block">{f.icon}</span>
                  <h4 className="text-base font-semibold text-[#E6EDF3] mb-2">{f.title}</h4>
                  <p className="text-[#8B949E] text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-linear-to-r from-transparent via-[#21262D] to-transparent mx-12" />

        {/* COMMANDS */}
        <section id="commands" className="px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <span className="mono text-xs text-violet-500 tracking-[2px] uppercase mb-3 block">Slash Commands</span>
            <h2 className="text-4xl font-bold tracking-tight mb-12">Everything at your fingertips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                { cmd: "/fidev-ping",    desc: "Check bot latency and confirm it's online." },
                { cmd: "/fidev-catfact", desc: "Get a random, interesting fact about cats." },
                { cmd: "/fidev-joke",    desc: "Brighten your day with a random dev joke." },
                { cmd: "/fidev-hello",   desc: "A friendly greeting from your bot." },
                { cmd: "/fidev-echo",    desc: "Bot repeats whatever message you send." },
                { cmd: "/fidev-quote",   desc: "Get an inspirational quote to stay motivated." },
                { cmd: "/fidev-help",    desc: "Show all available commands inside Slack." },
              ].map((c) => (
                <div key={c.cmd} className="bg-[#161B22] border border-[#21262D] rounded-xl px-5 py-5 hover:border-cyan-500/50 hover:bg-[#1C2128] transition-all">
                  <span className="mono text-[13px] font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-md px-2.5 py-1 inline-block mb-3">{c.cmd}</span>
                  <p className="text-[#8B949E] text-[13px] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0D1117] border-t border-[#21262D] text-center py-8 text-[#484F58] text-sm">
        © 2026 <span className="text-violet-500">Fidev Bot</span>. All rights reserved.
      </footer>
    </>
  );
}