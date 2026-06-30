import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
          <p>
            By accessing and using platformcompass.org (&quot;the Website&quot;), you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">1. Acceptance of Terms</h2>
          <p>
            If you do not agree to these terms, you should not use the Website. We reserve the right to change these terms at any time without notice.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">2. Use of the Website</h2>
          <p>
            The content on the Website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">3. Affiliate Disclosure</h2>
          <p>
            Platform Compass is an affiliate marketing website. This means we may earn a commission when you click on links to brands we review and make a purchase or sign up. This does not affect the price you pay or the quality of our reviews.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">4. Intellectual Property</h2>
          <p>
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">5. Limitation of Liability</h2>
          <p>
            We shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of the Website.
          </p>
          <p className="mt-12 text-sm italic">
            Last updated: June 30, 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
