"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { Brand } from "../data/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclid?: string;
}

export default function BrandCard({ brand, index, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    track("Brand Click", { brand: brand.name });
    
    // Call Google Tag conversion if defined
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(buildUrl(brand.url, gclid));
    } else {
      window.open(buildUrl(brand.url, gclid), "_blank");
    }
  };

  const getBadge = () => {
    if (index === 0) return { label: "Elite Choice", color: "bg-[#c5a059] text-black" };
    if (index === 1) return { label: "Highly Rated", color: "bg-slate-700 text-white" };
    if (index === 2) return { label: "Top Runner", color: "bg-slate-800 text-slate-300" };
    return null;
  };

  const badge = getBadge();

  return (
    <div 
      className="compass-card-bg rounded-3xl overflow-hidden relative group transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full border border-slate-800/50 hover:border-primary/40"
      onClick={handleCardClick}
    >
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-50" />

      {/* Rank Badge */}
      {badge && (
        <div className={`absolute top-6 left-6 ${badge.color} text-[10px] font-black uppercase px-3 py-1.5 rounded-full z-10 shadow-xl tracking-widest`}>
          {badge.label}
        </div>
      )}

      <div className="p-8 flex flex-col gap-8 items-center flex-grow">
        {/* Top Section: Logo + Rating */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="relative w-40 h-20 bg-slate-950 rounded-2xl p-4 flex items-center justify-center border border-slate-800/50 group-hover:border-primary/20 transition-all">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">{brand.rating.toFixed(1)}</span>
              <span className="text-sm font-bold text-slate-500">/10</span>
            </div>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(brand.rating / 2) ? "text-primary" : "text-slate-800"}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: Bonus */}
        <div className="flex flex-col items-center gap-2 text-center w-full">
          <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Exclusive Offer</div>
          <div className="text-xl font-black text-white leading-tight min-h-[3rem] flex items-center">
            {brand.bonus}
          </div>
        </div>

        {/* Bottom Section: CTA */}
        <div className="w-full mt-auto space-y-4">
          <button 
            className="w-full py-5 rounded-2xl bg-gradient-to-br from-primary via-[#e2c27d] to-primary text-black font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            Claim My Bonus
          </button>
          
          <div className="flex justify-between items-center px-2">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Verifed Today
            </span>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
              {brand.votes.toLocaleString()} Votes
            </span>
          </div>
        </div>
      </div>

      <div className="bg-slate-950/50 py-3 px-8 border-t border-slate-800/50">
        <p className="text-[9px] text-slate-600 leading-tight text-center uppercase tracking-tighter">
          18+ | New Customers Only | Terms Apply | be aware
        </p>
      </div>
    </div>
  );
}
