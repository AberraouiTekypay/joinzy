"use client";

import React from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function OrganizerTrackRecord() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Conceptual explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff5ea] text-[#688F3A] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trust Infrastructure
            </div>

            <h2 className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-[#1F1F1D] leading-tight">
              Reputation <br />
              <span className="text-[#E4572E]">is earned.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#1F1F1D]/70 leading-relaxed">
              No fake five-star reviews or bought ratings. Joinzy builds a verified track record over time based entirely on measurable platform behavior.
            </p>

            {/* Platform Trust Ledger Pillars */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E4572E]/15 text-[#E4572E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F1F1D]">Zero Last-Minute Ghosting</div>
                  <div className="text-xs text-[#1F1F1D]/70 mt-0.5">
                    Platform records actual event completions, on-time arrivals, and venue stewardship.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#688F3A]/15 text-[#688F3A] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F1F1D]">Real Verified Check-Ins</div>
                  <div className="text-xs text-[#1F1F1D]/70 mt-0.5">
                    Attendance isn&apos;t RSVPs on paper — it&apos;s verified attendee check-ins at the physical venue.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#EDE6D9]/50 border border-[#C9C9C9] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#1F1F1D] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F1F1D]">Repeat Sponsor Retention</div>
                  <div className="text-xs text-[#1F1F1D]/70 mt-0.5">
                    Businesses that sponsor high-integrity organizers return again and again.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollTo("create-community")}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1F1F1D] hover:text-[#E4572E] group cursor-pointer"
              >
                <span>Start building your organizer track record</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Organizer Profile Card Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-[#1F1F1D] text-white rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#3A3A35] relative overflow-hidden">
              {/* Top Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#3A3A35]">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                      alt="Amina El Mansouri"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#E4572E] shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[#688F3A] text-white rounded-full p-1 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-black text-white font-heading">
                        Amina El Mansouri
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                      Founder &amp; Community Organizer · Casablanca
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-[#E4572E]/20 text-[#E4572E] border border-[#E4572E]/40 text-xs font-bold">
                      <Award className="w-3.5 h-3.5" />
                      Level 3 · Verified Organizer
                    </div>
                  </div>
                </div>

                {/* Platform Status Badge */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between">
                  <div className="text-xs text-zinc-400 font-mono">ID: MOR-ORG-7782</div>
                  <div className="text-xs font-bold text-[#688F3A] bg-[#eff5ea]/10 px-2.5 py-1 rounded-full border border-[#688F3A]/30">
                    Spotless Record
                  </div>
                </div>
              </div>

              {/* Measurable Behavioral History Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-[#252523] border border-[#3A3A35]">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Events Created
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">24</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">22 completed · 2 scheduled</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#252523] border border-[#3A3A35]">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Completion Rate
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#688F3A] mt-1">92%</div>
                  <div className="text-[11px] text-[#688F3A]/80 mt-0.5">Top 5% on platform</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#252523] border border-[#3A3A35]">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Verified Attendees
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#E4572E] mt-1">1,420</div>
                  <div className="text-[11px] text-[#E4572E]/80 mt-0.5">From 1,840 signups</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#252523] border border-[#3A3A35]">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Avg Attendance
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">77%</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Check-in reliability</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#252523] border border-[#3A3A35]">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Repeat Sponsors
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#E4572E] mt-1">6</div>
                  <div className="text-[11px] text-[#E4572E]/80 mt-0.5">Businesses renewed</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#252523] border border-[#3A3A35]">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Cancellations
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#688F3A] mt-1">0</div>
                  <div className="text-[11px] text-[#688F3A]/80 mt-0.5">Zero last-minute cancels</div>
                </div>
              </div>

              {/* Reputation Level Stepper */}
              <div className="p-4 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35]">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mb-2">
                  <span>Reputation Progression</span>
                  <span className="text-[#E4572E]">Level 3: Verified</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-2 rounded-full bg-[#688F3A]" title="New" />
                  <div className="h-2 rounded-full bg-[#688F3A]" title="Established" />
                  <div className="h-2 rounded-full bg-[#E4572E]" title="Verified" />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1.5 font-medium">
                  <span>New (0–2 Events)</span>
                  <span>Established (3–10 Events)</span>
                  <span className="text-white font-bold">Verified (10+ Events)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
