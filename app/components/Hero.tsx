import Image from "next/image";

export default function Hero() {
  const year = new Date().getFullYear();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden felt-texture border-b border-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative Compass Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 border border-primary/20 mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-300">
            UK&apos;s Premier Review Hub {year}
          </span>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">18+ Disclaimer:</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Use platforms responsibly & at your own risk</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight text-white">
          Navigate Your <span className="gold-text italic">Success</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Expert-led analysis, exclusive bonuses, and data-driven insights for the UK&apos;s top-tier trading and investment platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { label: "FCA Licensed", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04m0 0a11.955 11.955 0 00-3.382 8.56c0 1.583.314 3.085.88 4.454l3.52 8.8a1 1 0 001.48.52L12 21.48l3.52 3.88a1 1 0 001.48-.52l3.52-8.8c.566-1.369.88-2.871.88-4.454a11.955 11.955 0 00-3.382-8.56z" },
            { label: "Expert Audited", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
            { label: "Secure Payouts", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg group hover:border-primary/30 transition-all">
              <svg className="w-6 h-6 text-accent group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-200">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
