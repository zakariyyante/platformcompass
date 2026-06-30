import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24 max-w-4xl min-h-screen">
        <h1 className="text-5xl font-black mb-12 text-white tracking-tight">
          Cookie <span className="gold-text italic">Policy</span>
        </h1>
        <div className="prose prose-invert max-w-none space-y-8 text-slate-400">
          <p className="text-lg leading-relaxed">
            This Cookie Policy explains how Platform Compass (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at platformcompass.org.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Why do we use cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Sections.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Types of cookies we use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> Necessary for the website to function.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the website (e.g., Vercel Analytics).</li>
              <li><strong>Affiliate cookies:</strong> Used to track referrals to our partner brands so we can receive commissions.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">How can I control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
          </section>

          <p className="mt-12 text-sm italic font-medium">
            Last updated: June 30, 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
