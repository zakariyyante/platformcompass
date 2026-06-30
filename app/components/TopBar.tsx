import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-slate-950 border-b border-slate-900 py-2 text-[10px] uppercase tracking-widest font-bold text-slate-500">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-[8px] text-white">18+</span>
          <span>Adults 18+ Only. Please use platforms responsibly.</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline opacity-50">|</span>
          <div className="group relative cursor-help">
            <span className="hover:text-primary transition-colors">Advertising Disclosure</span>
            <div className="absolute top-full right-0 mt-2 w-64 p-3 bg-slate-900 border border-slate-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] normal-case tracking-normal font-medium text-slate-400 text-[11px] leading-relaxed">
              Platform Compass is an independent review site. We may receive compensation from the companies whose products we review. This compensation may impact how and where products appear on this site.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
