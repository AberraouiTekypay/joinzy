"use client";

import React from "react";
import {
  Users,
  CalendarCheck,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function CreateCommunityMockup() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="create-community" className="py-24 bg-[#EDE6D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Acquisition Copy & Value Props */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff5ea] text-[#688F3A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Community Infrastructure
            </div>

            <h2 className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-[#1F1F1D] leading-tight">
              Your community <br />
              <span className="text-[#E4572E]">doesn&apos;t need permission.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#1F1F1D]/80 leading-relaxed">
              Start a community around whatever brings people together. Grow it. Organize events. Build a track record. Get sponsors to back your ambition.
            </p>

            <ul className="space-y-3.5 pt-2 text-sm text-[#1F1F1D]/90 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#eff5ea] text-[#688F3A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-[#1F1F1D] font-bold">100% Free Forever:</strong> Zero subscriptions, zero organizer paywalls.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E4572E]/15 text-[#E4572E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-[#1F1F1D] font-bold">Instant Microsponsorship:</strong> Post event needs (venues, catering, cash) with one click.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EDE6D9] text-[#1F1F1D] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-[#1F1F1D] font-bold">Reputation Ledger:</strong> Build an immutable platform track record that unlocks enterprise sponsors.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => scrollTo("early-access")}
                className="px-8 py-4 rounded-full bg-[#E4572E] hover:bg-[#cf4921] text-white font-extrabold text-base shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer group"
              >
                <span>Create your community — it&apos;s free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-xs text-[#1F1F1D]/60 mt-2 font-medium">
                Takes less than 2 minutes · No credit card required
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Community Profile Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#C9C9C9] shadow-2xl overflow-hidden">
              {/* Browser style title bar */}
              <div className="bg-[#EDE6D9]/70 px-4 py-3 border-b border-[#C9C9C9] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E4572E]" />
                  <div className="w-3 h-3 rounded-full bg-[#688F3A]" />
                  <div className="w-3 h-3 rounded-full bg-[#C9C9C9]" />
                </div>
                <div className="bg-white px-4 py-1 rounded-full text-[11px] font-mono font-medium text-[#1F1F1D]/70 border border-[#C9C9C9]">
                  joinzy.co/c/casa-ai-builders
                </div>
                <div className="w-8" />
              </div>

              {/* Cover Banner */}
              <div className="relative h-36 sm:h-44 w-full bg-[#1F1F1D]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Community banner"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#1F1F1D] flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#688F3A]" />
                  Verified Community Hub
                </div>
              </div>

              {/* Profile Header & Avatar */}
              <div className="px-6 sm:px-8 relative pb-6 border-b border-[#C9C9C9]/50">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-12 sm:-mt-14 mb-4 gap-4">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#1F1F1D] p-1 border-4 border-white shadow-xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80"
                        alt="Casablanca AI Builders Avatar"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl bg-[#EDE6D9] text-[#1F1F1D] text-xs font-bold border border-[#C9C9C9]"
                    >
                      + Follow Updates
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl bg-[#E4572E] text-white text-xs font-bold"
                    >
                      Join Community
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-[#1F1F1D]">Casablanca AI Builders</h3>
                    <CheckCircle2 className="w-5 h-5 text-[#688F3A]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#1F1F1D]/70 mt-1 max-w-xl">
                    Morocco&apos;s primary hub for machine learning researchers, LLM application engineers, and data founders. Meeting monthly across Casablanca.
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#1F1F1D]/60 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E4572E]" />
                      Casablanca, Morocco
                    </span>
                    <span>•</span>
                    <span>Founded Sep 2024</span>
                  </div>
                </div>

                {/* 4 Key Platform Performance Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  <div className="p-3 bg-[#F7F3EB] rounded-2xl border border-[#C9C9C9]/80">
                    <div className="flex items-center gap-1 text-[#1F1F1D]/60 text-[11px] font-semibold">
                      <Users className="w-3 h-3 text-[#E4572E]" />
                      <span>Members</span>
                    </div>
                    <div className="text-xl font-black text-[#1F1F1D] mt-1">1,284</div>
                    <div className="text-[10px] font-bold text-[#688F3A] mt-0.5">+38% this month</div>
                  </div>

                  <div className="p-3 bg-[#F7F3EB] rounded-2xl border border-[#C9C9C9]/80">
                    <div className="flex items-center gap-1 text-[#1F1F1D]/60 text-[11px] font-semibold">
                      <CalendarCheck className="w-3 h-3 text-[#E4572E]" />
                      <span>Events</span>
                    </div>
                    <div className="text-xl font-black text-[#1F1F1D] mt-1">24</div>
                    <div className="text-[10px] font-bold text-[#1F1F1D]/60 mt-0.5">22 completed</div>
                  </div>

                  <div className="p-3 bg-[#F7F3EB] rounded-2xl border border-[#C9C9C9]/80">
                    <div className="flex items-center gap-1 text-[#1F1F1D]/60 text-[11px] font-semibold">
                      <TrendingUp className="w-3 h-3 text-[#688F3A]" />
                      <span>Attendance</span>
                    </div>
                    <div className="text-xl font-black text-[#1F1F1D] mt-1">77%</div>
                    <div className="text-[10px] font-bold text-[#1F1F1D]/60 mt-0.5">Verified check-in</div>
                  </div>

                  <div className="p-3 bg-[#F7F3EB] rounded-2xl border border-[#C9C9C9]/80">
                    <div className="flex items-center gap-1 text-[#1F1F1D]/60 text-[11px] font-semibold">
                      <Award className="w-3 h-3 text-[#E4572E]" />
                      <span>Reputation</span>
                    </div>
                    <div className="text-xl font-black text-[#1F1F1D] mt-1">92%</div>
                    <div className="text-[10px] font-bold text-[#E4572E] mt-0.5">Level 3 Verified</div>
                  </div>
                </div>
              </div>

              {/* Mockup Profile Content Tab: Upcoming Event Preview */}
              <div className="p-6 bg-[#EDE6D9]/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F1F1D]/60">
                    Upcoming Gathering
                  </span>
                  <span className="text-xs font-bold text-[#E4572E]">
                    Sponsorship Open
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#C9C9C9] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#E4572E]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Tomorrow · 19:30</span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#1F1F1D]">
                      AI Founders Dinner &amp; Live Demo Night
                    </h4>
                    <p className="text-xs text-[#1F1F1D]/70">
                      Technopark Sky Lounge · 87 confirmed guests
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold text-[#1F1F1D] bg-[#EDE6D9] px-3 py-1.5 rounded-xl">
                      Venue Pledged
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollTo("sponsors-marketplace")}
                      className="px-3.5 py-1.5 rounded-xl bg-[#E4572E] text-white text-xs font-bold hover:bg-[#cf4921] transition cursor-pointer"
                    >
                      Sponsor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
