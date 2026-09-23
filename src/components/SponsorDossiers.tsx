"use client";

import React, { useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function SponsorDossiers() {
  const { formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState<"overview" | "audience" | "activations">("overview");

  return (
    <section className="py-24 bg-[#EDE6D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            Automated Sponsorship Deck
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D]">
            Every community <br />
            <span className="text-[#E4572E]">can tell its story.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1F1F1D]/70 leading-relaxed">
            Joinzy helps organizers create professional sponsorship dossiers without becoming marketing experts. Verified metrics sponsors actually trust.
          </p>
        </div>

        {/* The Dossier Paper / Deck Mockup */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#C9C9C9] shadow-2xl overflow-hidden">
          {/* Deck Top Header Bar */}
          <div className="bg-[#1F1F1D] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E4572E] uppercase tracking-widest">
                <span>Joinzy Verified Dossier #2026-CAS-084</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Casablanca AI Builders · Sponsorship Dossier
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                Prepared automatically by Joinzy Platform Engine
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#eff5ea] text-[#688F3A] border border-[#688F3A]/30 text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Track Record
              </span>
            </div>
          </div>

          {/* Dossier Tabs */}
          <div className="border-b border-[#C9C9C9] px-6 sm:px-8 flex gap-6 overflow-x-auto text-sm font-bold text-[#1F1F1D]/70 bg-[#F7F3EB]">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`py-4 border-b-2 transition cursor-pointer shrink-0 ${
                activeTab === "overview"
                  ? "border-[#E4572E] text-[#E4572E]"
                  : "border-transparent hover:text-[#1F1F1D]"
              }`}
            >
              Executive Summary
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("audience")}
              className={`py-4 border-b-2 transition cursor-pointer shrink-0 ${
                activeTab === "audience"
                  ? "border-[#E4572E] text-[#E4572E]"
                  : "border-transparent hover:text-[#1F1F1D]"
              }`}
            >
              Audience &amp; Demographics
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("activations")}
              className={`py-4 border-b-2 transition cursor-pointer shrink-0 ${
                activeTab === "activations"
                  ? "border-[#E4572E] text-[#E4572E]"
                  : "border-transparent hover:text-[#1F1F1D]"
              }`}
            >
              Activation Opportunities
            </button>
          </div>

          {/* Tab Content 1: Overview */}
          {activeTab === "overview" && (
            <div className="p-6 sm:p-8 space-y-8 animate-in fade-in duration-200">
              {/* 5 Core Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]/70">
                  <div className="text-xs font-bold text-[#1F1F1D]/60 uppercase">Community</div>
                  <div className="text-2xl font-black text-[#1F1F1D] mt-1">1,284</div>
                  <div className="text-[11px] font-bold text-[#E4572E] mt-0.5">Active members</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]/70">
                  <div className="text-xs font-bold text-[#1F1F1D]/60 uppercase">Track Record</div>
                  <div className="text-2xl font-black text-[#1F1F1D] mt-1">24</div>
                  <div className="text-[11px] font-bold text-[#1F1F1D]/70 mt-0.5">Events hosted</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]/70">
                  <div className="text-xs font-bold text-[#1F1F1D]/60 uppercase">Reliability</div>
                  <div className="text-2xl font-black text-[#688F3A] mt-1">92%</div>
                  <div className="text-[11px] font-bold text-[#688F3A] mt-0.5">Completion rate</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]/70">
                  <div className="text-xs font-bold text-[#1F1F1D]/60 uppercase">Attendance</div>
                  <div className="text-2xl font-black text-[#E4572E] mt-1">77%</div>
                  <div className="text-[11px] font-bold text-[#E4572E] mt-0.5">Avg check-in rate</div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]/70">
                  <div className="text-xs font-bold text-[#1F1F1D]/60 uppercase">Growth</div>
                  <div className="text-2xl font-black text-[#1F1F1D] mt-1">+38%</div>
                  <div className="text-[11px] font-bold text-[#688F3A] mt-0.5">MoM expansion</div>
                </div>
              </div>

              {/* Next Event & Primary Opportunity Highlight */}
              <div className="bg-[#F7F3EB] p-6 sm:p-7 rounded-3xl border border-[#C9C9C9] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E4572E] mb-1">
                    Featured Event Opportunity
                  </div>
                  <h4 className="text-2xl font-black text-[#1F1F1D]">AI Founders Dinner &amp; Demo Stage</h4>
                  <p className="text-xs sm:text-sm text-[#1F1F1D]/70 mt-1 max-w-lg">
                    Technopark Sky Lounge, Casablanca · 87 expected attendees (CTOs, ML leads, enterprise decision-makers).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#C9C9C9] shadow-xs shrink-0 text-center md:text-right">
                  <div className="text-xs font-bold text-[#1F1F1D]/60 uppercase">Title Partnership</div>
                  <div className="text-3xl font-black text-[#1F1F1D] font-heading">
                    {formatPrice("5,000", "500")}
                  </div>
                  <div className="text-[11px] text-[#688F3A] font-bold mt-1">
                    1 slot remaining
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Audience & Demographics */}
          {activeTab === "audience" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <h4 className="text-lg font-black text-[#1F1F1D]">Verified Member Breakdown</h4>
              <p className="text-xs sm:text-sm text-[#1F1F1D]/70 -mt-2">
                Permissioned, aggregated demographic data based on platform check-ins. Zero personal identifiers shared.
              </p>

              <div className="space-y-4">
                {[
                  { role: "Senior Software Engineers & ML Practitioners", pct: 44, color: "bg-[#1F1F1D]" },
                  { role: "Founders, CEOs & Technical Co-founders", pct: 28, color: "bg-[#E4572E]" },
                  { role: "Product Managers & Digital Leads", pct: 18, color: "bg-[#688F3A]" },
                  { role: "Graduate Researchers & Applied Academics", pct: 10, color: "bg-[#C9C9C9]" },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-[#1F1F1D]">
                      <span>{item.role}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#EDE6D9] overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 3: Activation Opportunities */}
          {activeTab === "activations" && (
            <div className="p-6 sm:p-8 space-y-4 animate-in fade-in duration-200">
              <h4 className="text-lg font-black text-[#1F1F1D]">Included Sponsor Activations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]">
                  <div className="font-bold text-sm text-[#1F1F1D]">Keynote Lightning Slot</div>
                  <div className="text-xs text-[#1F1F1D]/70 mt-1">
                    5 minutes of dedicated stage speaking before the main keynote begins.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]">
                  <div className="font-bold text-sm text-[#1F1F1D]">Product Demo Table</div>
                  <div className="text-xs text-[#1F1F1D]/70 mt-1">
                    Dedicated 2-meter physical counter for developer trials and product swag.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]">
                  <div className="font-bold text-sm text-[#1F1F1D]">Direct WhatsApp Group Blast</div>
                  <div className="text-xs text-[#1F1F1D]/70 mt-1">
                    Community organizer sends approved sponsor announcement to 1,280+ members.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9]">
                  <div className="font-bold text-sm text-[#1F1F1D]">Post-Event Intelligence Report</div>
                  <div className="text-xs text-[#1F1F1D]/70 mt-1">
                    Detailed summary of verified attendance, retention time, and brand engagement.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dossier Footer Action */}
          <div className="bg-[#F7F3EB] p-6 px-6 sm:px-8 border-t border-[#C9C9C9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#1F1F1D]/60 font-medium">
              Generated in real-time from Joinzy Platform Ledger
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("sponsors-marketplace");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#E4572E] hover:bg-[#cf4921] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Sponsor This Community</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
