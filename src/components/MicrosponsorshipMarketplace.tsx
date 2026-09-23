"use client";

import React, { useState } from "react";
import { SPONSOR_TIERS } from "@/data/mockData";
import { useCurrency } from "@/context/CurrencyContext";
import {
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Users,
  Check,
} from "lucide-react";

export default function MicrosponsorshipMarketplace() {
  const { currency, formatPrice } = useCurrency();
  const [selectedTier, setSelectedTier] = useState<string>("tier-event");
  const [pledgeSuccess, setPledgeSuccess] = useState(false);

  const handlePledgeSubmit = () => {
    setPledgeSuccess(true);
    setTimeout(() => setPledgeSuccess(false), 3500);
  };

  return (
    <section id="sponsors-marketplace" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Microsponsorship Marketplace
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D]">
            Businesses can back <br />
            <span className="text-[#E4572E]">the communities they care about.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1F1F1D]/70 leading-relaxed">
            Organizers don&apos;t pay to use Joinzy. Businesses sponsor the grassroots communities and events they want to authentically support.
          </p>
        </div>

        {/* Live Marketplace Example Card: CASABLANCA AI FOUNDERS */}
        <div className="mb-14 bg-[#1F1F1D] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#3A3A35]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#E4572E]/25 text-[#E4572E] text-xs font-bold border border-[#E4572E]/40">
                  Open Sponsorship Opportunity
                </span>
                <span className="text-xs text-zinc-400">Casablanca, Morocco</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                CASABLANCA AI FOUNDERS DINNER
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-zinc-300">
                <span className="flex items-center gap-1.5 font-bold text-white bg-white/10 px-3 py-1 rounded-lg">
                  <Users className="w-4 h-4 text-[#E4572E]" />
                  87 expected attendees
                </span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-[#E4572E]">Looking for:</strong>
                  <span>Venue · {currency === "MAD" ? "MAD 2,500" : "€250"} sponsorship · Food &amp; Refreshments</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-zinc-400">Target Community</div>
                <div className="font-bold text-sm text-white">Casablanca AI Builders</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#E4572E] flex items-center justify-center text-white font-black text-xl">
                AI
              </div>
            </div>
          </div>
        </div>

        {/* Sponsorship Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPONSOR_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            const priceDisplay = formatPrice(tier.priceMAD, tier.priceEUR);

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                  tier.popular
                    ? "bg-[#1F1F1D] text-white shadow-2xl scale-[1.02] border-2 border-[#E4572E]"
                    : "bg-[#EDE6D9] text-[#1F1F1D] border border-[#C9C9C9] hover:border-[#1F1F1D] hover:shadow-lg"
                }`}
              >
                {/* Popular / Tier Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                      tier.popular
                        ? "bg-[#E4572E] text-white shadow-xs"
                        : "bg-white text-[#1F1F1D] border border-[#C9C9C9]"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-[#688F3A] text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-xl font-black font-heading leading-tight">{tier.name}</h4>
                  <p
                    className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                      tier.popular ? "text-zinc-300" : "text-[#1F1F1D]/70"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Price Banner */}
                  <div className="my-6 pb-6 border-b border-[#C9C9C9]/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
                        {priceDisplay}
                      </span>
                    </div>
                    <div
                      className={`text-xs font-semibold mt-1 ${
                        tier.popular ? "text-[#E4572E]" : "text-[#1F1F1D]/60"
                      }`}
                    >
                      {tier.frequency} · No subscription needed
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <ul className="space-y-2.5 text-xs">
                    {tier.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.popular ? "text-[#E4572E]" : "text-[#688F3A]"
                          }`}
                        />
                        <span className={tier.popular ? "text-zinc-200" : "text-[#1F1F1D]/80"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Select Button */}
                <div className="mt-8 pt-4 border-t border-[#C9C9C9]/40">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTier(tier.id);
                      handlePledgeSubmit();
                    }}
                    className={`w-full py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      tier.popular
                        ? "bg-[#E4572E] hover:bg-[#cf4921] text-white shadow-lg"
                        : "bg-[#1F1F1D] hover:bg-[#E4572E] text-white shadow-xs"
                    }`}
                  >
                    {pledgeSuccess && isSelected ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Pledge Requested!</span>
                      </>
                    ) : (
                      <>
                        <span>Select {tier.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center text-xs text-[#1F1F1D]/60 font-medium">
          Businesses sponsor on a per-event basis with zero recurring lock-in. Joinzy guarantees verified check-ins and deliverables.
        </div>
      </div>
    </section>
  );
}
