import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#05070a] border-t border-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Link href="/" className="mb-10">
            <div className="relative w-64 h-16">
              <Image
                src="/logo.png"
                alt="Platform Compass Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl text-center md:text-left">
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs">Navigation</h3>
              <Link href="/" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Home</Link>
              <Link href="/#brands" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Top Platforms</Link>
              <Link href="/#guide" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Review Guide</Link>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs">Legal Data</h3>
              <Link href="/privacy" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Terms of Use</Link>
              <Link href="/cookies" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Cookie Settings</Link>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs">Connect</h3>
              <Link href="/contact" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Contact Support</Link>
              <Link href="/about" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Our Expertise</Link>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs">Resources</h3>
              <Link href="/safety" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Safety & Support</Link>
              <Link href="/faq" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Help Center</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900/50 pt-12 flex flex-col items-center">
          <p className="text-slate-600 text-[11px] text-center max-w-3xl mb-12 leading-relaxed uppercase tracking-wide">
            Platform Compass is an independent authority. We receive referral commissions from partners featured on our site. 
            This compensation does not influence our objective ratings. We operate under strict compliance with the 
            UK authorities and relevant financial bodies. Please use platforms responsibly.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mb-12 opacity-30 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            <Image src="/18plus.svg" alt="18+" width={32} height={32} />
            <Image src="/gambleaware.png" alt="GambleAware" width={120} height={32} className="object-contain" />
            <Image src="/gamcare.png" alt="GamCare" width={100} height={32} className="object-contain" />
            <Image src="/gamestop.png" alt="GameStop" width={100} height={32} className="object-contain" />
          </div>

          <p className="text-slate-700 text-[9px] font-bold uppercase tracking-[0.5em]">
            © {year} PLATFORMCOMPASS.ORG | AN ELITE REVIEW AUTHORITY
          </p>
        </div>
      </div>
    </footer>
  );
}
