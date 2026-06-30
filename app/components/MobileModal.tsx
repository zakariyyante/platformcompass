"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Brand } from "../data/brands";
import BrandCard from "./BrandCard";
import Header from "./Header";
import Hero from "./Hero";
import ComplianceBar from "./ComplianceBar";
import Footer from "./Footer";

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

export default function MobileModal({ brands, gclid }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (gclid && brands.length > 0) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [gclid, brands]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#05070a] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => setIsOpen(false)}
        className="fixed top-6 right-6 z-[110] w-12 h-12 rounded-2xl bg-slate-900/90 text-white flex items-center justify-center backdrop-blur shadow-2xl border border-slate-800 group active:scale-95 transition-all"
      >
        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-[0.4em] text-white">
              Elite <span className="text-primary italic">Mobile</span> Rewards
            </h2>
            <div className="grid grid-cols-1 gap-10">
              {brands.map((brand, index) => (
                <BrandCard key={brand.id} brand={brand} index={index} gclid={gclid} />
              ))}
            </div>
          </div>
          <ComplianceBar />
        </main>
        <Footer />
      </div>
    </div>
  );
}
