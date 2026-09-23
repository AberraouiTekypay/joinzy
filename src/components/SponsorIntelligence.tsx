"use client";

import React from "react";
import { useCurrency } from "@/context/CurrencyContext";
import {
  Lock,
  Shield,
  LineChart,
} from "lucide-react";

export default function SponsorIntelligence() {
  const { currency } = useCurrency();

  const totalSpend = currency === "MAD" ? "MAD 74,000" : "€7,400";

  return (
    <section id="sponsors-intel" className="py-24 bg-[#1F1F1D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#E4572E] uppercase tracking-wider mb-3">
            <LineChart className="w-3.5 h-3.5" />
            Enterprise Community Marketing
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white">
            Know the communities <br />
            <span className="text-[#E4572E]">
              you&apos;re supporting.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EDE6D9]/80 leading-relaxed font-normal">
            Start by sponsoring an individual event — no subscription required. Unlock deeper intelligence, audience benchmarks, and discovery as your community footprint expands.
          </p>
        </div>

        {/* Dashboard Frame Mockup */}
        <div className="max-w-5xl mx-auto bg-[#252523] border border-[#3A3A35] rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Dashboard Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#3A3A35] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E4572E] flex items-center justify-center font-black text-white text-lg">
                S
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Sponsor Portal
                </div>
                <div className="text-xl font-black text-white">SPONSOR INSIGHTS &amp; ANALYTICS</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#eff5ea]/10 text-[#688F3A] text-xs font-bold border border-[#688F3A]/30 flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#688F3A]" />
                Aggregated &amp; Privacy-First
              </span>
            </div>
          </div>

          {/* 5 High-Impact Dashboard KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 my-6">
            <div className="p-4 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35]">
              <div className="text-xs text-zinc-400 font-medium">Communities Reached</div>
              <div className="text-2xl font-black text-white mt-1">27</div>
              <div className="text-[10px] text-[#E4572E] mt-0.5 font-bold">across 4 cities</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35]">
              <div className="text-xs text-zinc-400 font-medium">Events Sponsored</div>
              <div className="text-2xl font-black text-white mt-1">14</div>
              <div className="text-[10px] text-[#688F3A] mt-0.5 font-bold">100% verified check-in</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35]">
              <div className="text-xs text-zinc-400 font-medium">Participants Reached</div>
              <div className="text-2xl font-black text-[#E4572E] mt-1">1,840</div>
              <div className="text-[10px] text-[#E4572E] mt-0.5 font-bold">In-person attendees</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35]">
              <div className="text-xs text-zinc-400 font-medium">Repeat Communities</div>
              <div className="text-2xl font-black text-[#688F3A] mt-1">8</div>
              <div className="text-[10px] text-[#688F3A] mt-0.5 font-bold">High loyalty index</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35]">
              <div className="text-xs text-zinc-400 font-medium">Sponsorship Spend</div>
              <div className="text-2xl font-black text-white mt-1 font-heading">{totalSpend}</div>
              <div className="text-[10px] text-zinc-400 mt-0.5 font-bold">Total community deployed</div>
            </div>
          </div>

          {/* Interactive Chart Mockup & Category Spread */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            {/* Visual Attendance Bar Graph */}
            <div className="md:col-span-7 bg-[#1C1C1A] p-5 rounded-2xl border border-[#3A3A35]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Verified Monthly Reach
                </span>
                <span className="text-xs text-[#688F3A] font-bold">+41% Growth</span>
              </div>

              {/* Bar chart visualization */}
              <div className="flex items-end justify-between h-40 pt-4 px-2">
                {[
                  { month: "Jan", val: 35, label: "210" },
                  { month: "Feb", val: 50, label: "340" },
                  { month: "Mar", val: 65, label: "490" },
                  { month: "Apr", val: 80, label: "680" },
                  { month: "May", val: 95, label: "860" },
                  { month: "Jun", val: 100, label: "1,140" },
                ].map((bar, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5 w-10">
                    <span className="text-[10px] text-zinc-400 font-bold">{bar.label}</span>
                    <div
                      className="w-full rounded-t-lg bg-[#E4572E] transition-all duration-500"
                      style={{ height: `${bar.val}%` }}
                    />
                    <span className="text-xs text-zinc-500 font-medium">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Audience Distribution */}
            <div className="md:col-span-5 bg-[#1C1C1A] p-5 rounded-2xl border border-[#3A3A35] space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Reach by Community Category
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                  <span>Tech &amp; AI Builders</span>
                  <span className="text-[#E4572E]">42% (772 people)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-[42%] h-full bg-[#E4572E] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                  <span>Design &amp; Creatives</span>
                  <span className="text-[#EDE6D9]">28% (515 people)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-[28%] h-full bg-[#EDE6D9] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                  <span>Running &amp; Athletics</span>
                  <span className="text-[#688F3A]">18% (331 people)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-[18%] h-full bg-[#688F3A] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                  <span>Food &amp; Culture</span>
                  <span className="text-zinc-400">12% (222 people)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-[12%] h-full bg-[#C9C9C9] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Privacy & Aggregation Guarantee Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35] flex items-center gap-3 text-xs text-zinc-400">
            <Lock className="w-4 h-4 text-[#E4572E] shrink-0" />
            <span>
              <strong className="text-white font-semibold">Strict Privacy Architecture:</strong> All analytics are 100% permissioned and aggregated at the cohort level. Joinzy does not harvest or expose personal user data or private social contacts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
