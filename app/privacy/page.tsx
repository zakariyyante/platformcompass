import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
          <p>
            Welcome to Platform Compass (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring you have a positive experience on our website, platformcompass.org.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
          <p>
            We may collect information that identifies you (&quot;Personal Information&quot;) when you use our website. This includes information you provide to us, such as your name and email address when you contact us, and information we collect automatically, such as your IP address and browsing behavior.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, communicate with you, and for marketing purposes. We do not sell your personal information to third parties.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">3. Cookies</h2>
          <p>
            We use cookies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">4. Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policies of any website you visit.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
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
