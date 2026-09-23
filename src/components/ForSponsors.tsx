"use client";

import React from "react";
import {
  Compass,
  Coins,
  Building2,
  FileCheck,
  TrendingUp,
  BarChart2,
  ArrowRight,
} from "lucide-react";

export default function ForSponsors() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const sponsorFeatures = [
    { title: "Discover relevant communities", desc: "Filter groups by city, demographic, and activity frequency.", icon: Compass },
    { title: "Sponsor events without subscriptions", desc: "Back single events with clear, standardized deliverables.", icon: Coins },
    { title: "Provide venues or products", desc: "Convert empty space or food & drinks into loyal brand ambassadors.", icon: Building2 },
    { title: "Manage sponsorships cleanly", desc: "One central dashboard for invoices, asset proofs, and dates.", icon: FileCheck },
    { title: "Track real performance", desc: "Verified attendee headcount and real attendee satisfaction benchmarks.", icon: TrendingUp },
    { title: "Access deeper insights", desc: "Cohort-level aggregated demographic data without privacy violations.", icon: BarChart2 },
  ];

  return (
    <section id="sponsors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
            <Coins className="w-3.5 h-3.5" />
            Direct Community Marketing
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D]">
            Stop sponsoring <br />
            <span className="text-[#E4572E]">blindly.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1F1F1D]/70 leading-relaxed">
            Discover real communities. Support real events. Understand who you&apos;re reaching with verified behavioral metrics and zero waste.
          </p>
        </div>

        {/* Sponsor Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsorFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#EDE6D9] p-6 rounded-3xl border border-[#C9C9C9] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#E4572E]/10 text-[#E4572E] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#1F1F1D]">{feat.title}</h3>
                <p className="text-xs text-[#1F1F1D]/70 mt-2 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Action CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo("early-access")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E4572E] hover:bg-[#cf4921] text-white font-extrabold text-base shadow-lg transition flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Become a sponsor</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-xs text-[#1F1F1D]/60 font-semibold">
            Micro-sponsorship starts at MAD 1,000 / €100 · Cash or In-Kind
          </span>
        </div>
      </div>
    </section>
  );
}
