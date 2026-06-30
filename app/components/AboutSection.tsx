import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="guide" className="py-24 bg-[#05070a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
              How We <span className="text-primary italic">Verify</span> Excellence
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Our multi-layer verification process ensures you only trade and use platforms that meet the highest global standards.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="compass-card-bg p-10 rounded-[40px] relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            
            <h3 className="text-2xl font-black mb-8 text-white flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              The Authority Method
            </h3>
            
            <ul className="space-y-6">
              {[
                "Tier-1 License Verification",
                "Deep-Liquidity & Payout Latency Tests",
                "Advanced Encryption Standard Audit",
                "Transparency & Spread Analysis",
                "Verified User Sentiment Aggregation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-400 font-bold text-sm tracking-wide">
                  <span className="text-accent text-xl">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="compass-card-bg p-10 rounded-[40px] relative overflow-hidden group border-red-900/10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all" />
            
            <h3 className="text-2xl font-black mb-8 text-white flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              User Protection Standards
            </h3>
            
            <p className="text-slate-500 mb-8 leading-relaxed font-medium">
              We exclusively list platforms that provide industry-leading protection tools, including AI-driven behavioral monitoring and instant access controls.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="https://www.gamstop.co.uk" className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950 hover:bg-slate-900 transition-all border border-slate-900 group">
                <span className="font-black text-xs text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">BLOCKER</span>
              </Link>
              <Link href="/safety" className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950 hover:bg-slate-900 transition-all border border-slate-900 group">
                <span className="font-black text-xs text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">AWARE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
