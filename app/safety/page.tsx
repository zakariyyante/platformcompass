import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#05070a] py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
              User <span className="text-red-500 italic">Safety</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              At Platform Compass, your safety is our absolute priority. Using these platforms should always be an enjoyable leisure activity, not a way to make money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Set Limits", desc: "Always set deposit and time limits before you start playing.", icon: "⏱️" },
              { title: "Never Chase", desc: "Don't try to win back what you've lost. Accept losses as the cost of entertainment.", icon: "📉" },
              { title: "Take Breaks", desc: "Use reality checks and take regular breaks from the screen.", icon: "☕" }
            ].map((item, i) => (
              <div key={i} className="compass-card-bg p-8 rounded-[32px] border border-slate-800/50 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="compass-card-bg p-12 rounded-[48px] border border-red-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <svg className="w-64 h-64 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-black text-white mb-8">Need Support?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
              If you feel you&apos;re losing control, there are professional organizations ready to help you for free and confidentially.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/safety" className="flex items-center justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-red-500/50 transition-all group">
                <div>
                  <div className="font-black text-white group-hover:text-red-500 transition-colors">Awareness</div>
                  <div className="text-xs text-slate-500">24/7 Confidential Support</div>
                </div>
                <span className="text-2xl">→</span>
              </Link>
              <Link href="/safety" className="flex items-center justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-red-500/50 transition-all group">
                <div>
                  <div className="font-black text-white group-hover:text-red-500 transition-colors">Access Blocker</div>
                  <div className="text-xs text-slate-500">Self-Exclusion Service</div>
                </div>
                <span className="text-2xl">→</span>
              </Link>
              <Link href="/safety" className="flex items-center justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-red-500/50 transition-all group">
                <div>
                  <div className="font-black text-white group-hover:text-red-500 transition-colors">Support Care</div>
                  <div className="text-xs text-slate-500">National Helpline Available</div>
                </div>
                <span className="text-2xl">→</span>
              </Link>
              <Link href="/safety" className="flex items-center justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-red-500/50 transition-all group">
                <div>
                  <div className="font-black text-white group-hover:text-red-500 transition-colors">Support Groups</div>
                  <div className="text-xs text-slate-500">Community & Meetings</div>
                </div>
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
