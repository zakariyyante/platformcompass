import Link from "next/link";

export default function ComplianceBar() {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold text-white">18+</span>
          <span className="text-xs font-bold text-slate-300">For adults 18+ only.</span>
        </div>
        <p className="text-[10px] text-slate-500 max-w-2xl">
          Platform Compass is committed to supporting user safety. If you or someone you know is facing challenges, please visit 
          <Link href="/safety" className="text-primary hover:underline mx-1">BeGambleAware.org</Link> 
          or call the National Support Helpline at 0808 8020 133.
        </p>
      </div>
    </div>
  );
}
