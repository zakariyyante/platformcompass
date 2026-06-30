import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      q: "How do you rate the platforms?",
      a: "We use a proprietary multi-layer verification process that evaluates licensing, payout speed, liquidity, security standards, and user sentiment. Each platform is manually tested by our experts."
    },
    {
      q: "Is Platform Compass free to use?",
      a: "Yes, our service is completely free for users. We earn commissions from the platforms we feature when you click our links and sign up, which allows us to keep our reviews independent and high-quality."
    },
    {
      q: "Are the bonuses exclusive?",
      a: "Many of the bonuses listed on our site are negotiated exclusively for Platform Compass users. Always check the terms and conditions on the provider's site as they can change."
    },
    {
      q: "How often is the data updated?",
      a: "We monitor our featured brands daily. Payout speeds and bonus offers are updated in real-time as soon as we verify a change."
    },
    {
      q: "Is my personal data safe?",
      a: "We do not collect sensitive financial data. Any personal information you provide (like when contacting us) is handled according to our strict Privacy Policy and GDPR standards."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#05070a] py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black mb-6 text-white tracking-tight">
              Frequently Asked <span className="gold-text italic">Questions</span>
            </h1>
            <p className="text-lg text-slate-400">
              Everything you need to know about our review process and how we help you find the best platforms.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="compass-card-bg p-8 rounded-[32px] border border-slate-800/50 group hover:border-primary/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-4">
                  <span className="text-primary">Q:</span>
                  {faq.q}
                </h3>
                <div className="flex items-start gap-4 text-slate-400 leading-relaxed">
                  <span className="text-accent font-bold">A:</span>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center p-12 rounded-[40px] bg-slate-900/30 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-slate-400 mb-8">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
            <a href="/contact" className="inline-block px-10 py-4 rounded-xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:scale-[1.05] transition-transform">
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
