"use client";

import React, { useState } from "react";
import {
  Building2,
  Coffee,
  Banknote,
  Camera,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Store,
  Users2,
  BadgeCheck,
} from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";

interface MatchItem {
  id: string;
  category: "Venue" | "Food & Drinks" | "Cash Grant" | "Photography" | "Prizes";
  icon: React.ElementType;
  community: string;
  city: string;
  eventTitle: string;
  expectedAttendees: number;
  needDescription: string;
  needQuantity: string;
  businessName: string;
  businessType: string;
  pledgedItem: string;
  pledgeBenefit: string;
}

export default function NeedHelpMakingItHappen() {
  const { currency } = useCurrency();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [pledgedSuccess, setPledgedSuccess] = useState(false);

  const matches: MatchItem[] = [
    {
      id: "venue",
      category: "Venue",
      icon: Building2,
      community: "Casablanca AI Builders",
      city: "Casablanca",
      eventTitle: "AI Founders Dinner & Live Demos",
      expectedAttendees: 87,
      needDescription: "Spacious tech loft or auditorium with projector, fast Wi-Fi & sound desk for 3 hours.",
      needQuantity: "100-seat space",
      businessName: "TechnoSpace Coworking",
      businessType: "Innovation Hub & Coworking",
      pledgedItem: "Venue Provided · Sky Lounge Access",
      pledgeBenefit: "Direct exposure to 87 senior AI engineers and future startup tenants.",
    },
    {
      id: "coffee",
      category: "Food & Drinks",
      icon: Coffee,
      community: "Designers of Casablanca",
      city: "Casablanca",
      eventTitle: "Creators Night & Design Critiques",
      expectedAttendees: 63,
      needDescription: "Freshly brewed specialty cold brew, artisanal espresso & mini pastries.",
      needQuantity: "100 coffees + bites",
      businessName: "Café Bloom Roasters",
      businessType: "Artisan Coffee Roastery",
      pledgedItem: "100 Specialty Coffees & Matchas",
      pledgeBenefit: "Brand trial by 60+ top creative directors and agency leads.",
    },
    {
      id: "cash",
      category: "Cash Grant",
      icon: Banknote,
      community: "Women Who Build",
      city: "Casablanca",
      eventTitle: "Bootstrapping & Venture Forum",
      expectedAttendees: 110,
      needDescription: "Direct cash sponsorship to cover workshop printing, speaker logistics & livestream kit.",
      needQuantity: currency === "MAD" ? "MAD 2,500" : "€250",
      businessName: "Atlas Ventures Capital",
      businessType: "Pre-seed & Seed VC",
      pledgedItem: currency === "MAD" ? "MAD 2,500 Cash Sponsorship" : "€250 Cash Sponsorship",
      pledgeBenefit: "Exclusive pitch scouting pipeline & stage introduction slot.",
    },
    {
      id: "photo",
      category: "Photography",
      icon: Camera,
      community: "Rabat Runners",
      city: "Rabat",
      eventTitle: "Sunday Coastal 10K Sunrise Run",
      expectedAttendees: 124,
      needDescription: "Sports photographer for high-energy start/finish lines and social highlight reel.",
      needQuantity: "2h shoot + 30 photos",
      businessName: "Studio Lumina Maroc",
      businessType: "Digital Content Studio",
      pledgedItem: "Photography Partner Coverage",
      pledgeBenefit: "Credit watermark on 30+ viral social photos shared by 124 runners.",
    },
    {
      id: "prizes",
      category: "Prizes",
      icon: Trophy,
      community: "Morocco BJJ Community",
      city: "Marrakech",
      eventTitle: "Atlas Open Mat & Submission Challenge",
      expectedAttendees: 48,
      needDescription: "Performance hydration gear, combat rashguards or gift cards for tournament champions.",
      needQuantity: "6 Champion Bundles",
      businessName: "Vanguard Combat Lab",
      businessType: "Athletic Combat Apparel",
      pledgedItem: "6 Custom Rashguards & Bags",
      pledgeBenefit: "Authentic martial arts influencer endorsement and gym visibility.",
    },
  ];

  const current = matches[selectedIdx];
  const CurrentIcon = current.icon;

  const handleTestPledge = () => {
    setPledgedSuccess(true);
    setTimeout(() => setPledgedSuccess(false), 3000);
  };

  return (
    <section id="differentiator" className="py-24 bg-[#1F1F1D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#E4572E] mb-4 tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5" />
            The Joinzy Differentiator
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
            Need help making it happen?
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-[#EDE6D9]/90 leading-relaxed font-normal">
            Joinzy doesn&apos;t stop at event discovery. <br className="hidden sm:inline" />
            <strong className="text-white font-bold">Communities create the activity.</strong> Joinzy helps find the resources to make it happen.
          </p>
        </div>

        {/* Interactive Needs Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {matches.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#E4572E] text-white shadow-lg shadow-[#E4572E]/25 scale-105"
                    : "bg-[#2A2A27] hover:bg-[#343430] text-[#EDE6D9] border border-[#3E3E3A]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic 3-Part Match Centerpiece UI */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">
          {/* Card 1: Community Event Request (LEFT) */}
          <div className="lg:col-span-5 bg-[#252523] border border-[#3A3A35] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E4572E]/20 text-[#E4572E] border border-[#E4572E]/40">
                Need: {current.category}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F1F1D] flex items-center justify-center text-[#E4572E] font-black text-xl border border-[#3A3A35]">
                  {current.community[0]}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    {current.city} Community
                  </div>
                  <h3 className="text-xl font-black text-white">{current.community}</h3>
                </div>
              </div>

              <div className="bg-[#1C1C1A] rounded-2xl p-4 border border-[#3A3A35] mb-6">
                <div className="text-xs text-zinc-400 font-medium">Upcoming Event</div>
                <div className="text-base font-bold text-white mt-0.5">{current.eventTitle}</div>
                <div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1 text-[#EDE6D9] font-semibold">
                    <Users2 className="w-3.5 h-3.5 text-[#E4572E]" />
                    {current.expectedAttendees} expected attendees
                  </span>
                  <span>•</span>
                  <span>{current.city}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E4572E]">
                  Requested Resource
                </div>
                <div className="text-sm text-zinc-200 bg-[#1C1C1A] p-3.5 rounded-xl border border-[#3A3A35] leading-relaxed">
                  &ldquo;{current.needDescription}&rdquo;
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1.5 pt-1">
                  <span className="font-semibold text-white">Target volume:</span>
                  <span className="text-[#E4572E] font-bold">{current.needQuantity}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3A3A35] flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#688F3A]" />
                Verified Community Host
              </span>
              <span>100% Free Organizer Tool</span>
            </div>
          </div>

          {/* Joinzy Intelligent Match Bridge (MIDDLE) */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center py-4 lg:py-0">
            <div className="w-14 h-14 rounded-2xl bg-[#E4572E] flex items-center justify-center text-white shadow-xl animate-pulse-subtle">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="hidden lg:block h-12 w-0.5 bg-[#E4572E]/50 my-2" />
          </div>

          {/* Card 2: Local Business Pledging Support (RIGHT) */}
          <div className="lg:col-span-5 bg-[#252523] border border-[#E4572E]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#688F3A]/20 text-[#688F3A] border border-[#688F3A]/40 flex items-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5" />
                Verified Business Pledge
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E4572E] flex items-center justify-center text-white font-bold text-xl shadow-md">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#E4572E] font-semibold">
                    {current.businessType}
                  </div>
                  <h3 className="text-xl font-black text-white">{current.businessName}</h3>
                </div>
              </div>

              {/* What the business offers */}
              <div className="bg-[#1C1C1A] rounded-2xl p-4 border border-[#3A3A35] mb-6">
                <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                  Support Offered
                </div>
                <div className="text-lg font-black text-white mt-1 flex items-center gap-2">
                  <CurrentIcon className="w-5 h-5 text-[#E4572E]" />
                  <span>&ldquo;{current.pledgedItem}&rdquo;</span>
                </div>
              </div>

              {/* Why the business does it */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Business ROI &amp; Community Value
                </div>
                <div className="text-sm text-zinc-300 bg-[#1C1C1A] p-3.5 rounded-xl border border-[#3A3A35] leading-relaxed">
                  {current.pledgeBenefit}
                </div>
              </div>
            </div>

            {/* Interactive Action Button */}
            <div className="mt-6 pt-4 border-t border-[#3A3A35]">
              <button
                type="button"
                onClick={handleTestPledge}
                className="w-full py-3.5 rounded-2xl bg-[#E4572E] hover:bg-[#cf4921] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                {pledgedSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Resource Matched &amp; Confirmed!</span>
                  </>
                ) : (
                  <>
                    <span>Pledge Support as a Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Core Philosophy Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#252523] border border-[#3A3A35] text-center max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">0%</div>
              <div className="text-xs font-semibold uppercase text-zinc-400 mt-1">Organizer Fees</div>
              <div className="text-xs text-zinc-400 mt-1">Organizers never pay subscriptions or listing fees</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#E4572E]">Cash or In-Kind</div>
              <div className="text-xs font-semibold uppercase text-zinc-400 mt-1">Flexible Support</div>
              <div className="text-xs text-zinc-400 mt-1">Venues, food, coffee, gear, or direct funding</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#688F3A]">Verified</div>
              <div className="text-xs font-semibold uppercase text-zinc-400 mt-1">Trust Ledger</div>
              <div className="text-xs text-zinc-400 mt-1">Real attendance proof protects both sides</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
