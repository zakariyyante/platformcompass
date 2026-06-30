import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#05070a] py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6 text-white tracking-tight">
              Get in <span className="gold-text italic">Touch</span>
            </h1>
            <p className="text-lg text-slate-400">
              Have questions about a platform or our review process? Our expert team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="compass-card-bg p-10 rounded-[40px] border border-slate-800/50">
              <h2 className="text-2xl font-black text-white mb-6">Contact Details</h2>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Email Us</div>
                  <div className="text-lg font-medium text-slate-200">support@platformcompass.org</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Office</div>
                  <div className="text-lg font-medium text-slate-200">
                    One Canada Square, Canary Wharf<br />
                    London, E14 5AB<br />
                    United Kingdom
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Hours</div>
                  <div className="text-lg font-medium text-slate-200">Mon - Fri: 09:00 - 18:00 GMT</div>
                </div>
              </div>
            </div>

            <form className="compass-card-bg p-10 rounded-[40px] border border-slate-800/50 space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-[#e2c27d] text-black font-black uppercase tracking-widest text-xs shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
