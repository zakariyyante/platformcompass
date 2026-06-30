import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#05070a]">
        <section className="py-24 border-b border-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
              Our <span className="gold-text italic">Expertise</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Platform Compass is the UK&apos;s leading authority on trading and investment platforms. Our mission is to provide transparency and security through data-driven analysis.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-[40px] overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                  src="/logo-full.png"
                  alt="Platform Compass Expertise"
                  fill
                  className="object-contain p-12 bg-slate-900/50"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-white">Why Trust Our Compass?</h2>
                <div className="space-y-6">
                  {[
                    { title: "Unbiased Analysis", desc: "We operate independently of the brands we review, ensuring our ratings are based solely on performance and security." },
                    { title: "Real-Time Monitoring", desc: "Our team constantly monitors payout speeds, liquidity, and regulatory compliance to keep our data fresh." },
                    { title: "Security First", desc: "We prioritize platforms with the highest encryption standards and robust player protection tools." }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
