"use client";

import React from "react";
import { ArrowRight, MapPin, Users, CheckCircle2, HeartHandshake } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#EDE6D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1F1D] text-white text-xs md:text-sm font-medium shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-[#688F3A]" />
            <span className="text-[#E4572E] font-bold">Now in Beta:</span>
            <span>Casablanca · Rabat · Marrakech · Paris · Lyon</span>
          </div>
        </div>

        {/* Hero Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1F1F1D] font-heading leading-[1.02]">
            Find your people. <br />
            <span className="text-[#E4572E]">
              Make things happen.
            </span>
          </h1>

          <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-[#1F1F1D]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Join communities. Discover events. Create your own. Get the people and businesses around you to make things happen.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("communities")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E4572E] hover:bg-[#cf4921] text-white font-extrabold text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore communities</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("create-community")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1F1F1D] border-2 border-[#C9C9C9] font-extrabold text-base hover:border-[#1F1F1D] hover:bg-[#F7F3EB] shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Create a community</span>
              <span className="text-xs bg-[#eff5ea] text-[#688F3A] px-2.5 py-0.5 rounded-full font-bold">Free</span>
            </button>
          </div>

          {/* Subtext reassurance */}
          <p className="mt-4 text-xs sm:text-sm text-[#1F1F1D]/60 font-medium">
            100% free for organizers &amp; participants · No subscription fees
          </p>
        </div>

        {/* Editorial Visual Showcase (Mediterranean & Authentic Photography) */}
        <div className="mt-14 md:mt-18 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Card: Young Founders / Creative Workshop */}
            <div className="md:col-span-4 space-y-4">
              <div className="group relative rounded-3xl overflow-hidden shadow-md border border-[#C9C9C9] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Designers and creative group in Casablanca"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1F1F1D]/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#E4572E]" />
                    Casablanca
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#C9C9C9]/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-[#1F1F1D]/60 uppercase tracking-wider">Community</div>
                        <div className="font-extrabold text-[#1F1F1D] text-sm">Designers of Casablanca</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-[#E4572E] bg-[#E4572E]/10 px-2.5 py-1 rounded-lg">
                          1,129 members
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified badge snippet */}
              <div className="bg-white p-4 rounded-2xl border border-[#C9C9C9] shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#eff5ea] text-[#688F3A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F1F1D]">Verified Platform Reputation</div>
                  <div className="text-xs text-[#1F1F1D]/60">Measurable completion &amp; attendance history</div>
                </div>
              </div>
            </div>

            {/* Center Card: Featured Live Event with real sponsor pledge badge */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#1F1F1D]/15 bg-white">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"
                    alt="AI Builders meetup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1D] via-[#1F1F1D]/25 to-transparent" />
                  
                  {/* Live Status Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#1F1F1D]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#688F3A]" />
                    Tomorrow · 19:30
                  </div>

                  {/* Attendance badge */}
                  <div className="absolute top-4 right-4 bg-[#1F1F1D]/85 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#E4572E]" />
                    87 Going
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-xs font-bold text-[#E4572E] uppercase tracking-widest mb-1">
                      Next Event Spotlight
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black leading-tight">
                      AI Founders Dinner &amp; Live Demo
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E4572E]" />
                      Technopark Sky Lounge, Casablanca
                    </p>
                  </div>
                </div>

                {/* Micro-sponsorship pledge indicator */}
                <div className="p-4 bg-[#F7F3EB] border-t border-[#C9C9C9]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E4572E] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1F1F1D]">Resource Pledged</div>
                      <div className="text-[11px] text-[#1F1F1D]/70">TechnoSpace provided Venue + Wi-Fi</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#688F3A] bg-[#eff5ea] px-2.5 py-1 rounded-full border border-[#688F3A]/20">
                    Active Match
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: Athletic / Run Club Community */}
            <div className="md:col-span-3 space-y-4">
              <div className="group relative rounded-3xl overflow-hidden shadow-md border border-[#C9C9C9] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80"
                    alt="Rabat Runners group"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1F1F1D]/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#E4572E]" />
                    Rabat
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#C9C9C9]/50">
                    <div className="text-xs font-semibold text-[#1F1F1D]/60 uppercase tracking-wider">Athletics</div>
                    <div className="font-extrabold text-[#1F1F1D] text-sm">Rabat Runners</div>
                    <div className="text-xs text-[#E4572E] font-bold mt-0.5">2,431 members · 86 runs</div>
                  </div>
                </div>
              </div>

              {/* Quick interactive action card */}
              <div className="p-5 rounded-2xl bg-[#1F1F1D] text-white shadow-md">
                <div className="text-xs text-zinc-400 font-medium">Looking for sponsors?</div>
                <div className="text-sm font-bold text-white mt-0.5">Post an event need in 60s</div>
                <div className="mt-2.5 flex items-center gap-1 text-xs text-[#E4572E] font-bold cursor-pointer hover:underline">
                  <span>Match with local businesses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Community Activity Ticker */}
        <div className="mt-16 pt-8 border-t border-[#C9C9C9] overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-[#1F1F1D]/60 mb-4">
            Real activity happening right now in Morocco &amp; France
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {[
              { text: "Casablanca AI Builders just posted a venue request for 100 people", tag: "Need" },
              { text: "Café Bloom Roasters pledged 100 cold brews to Designers Night", tag: "Pledge" },
              { text: "Amina El Mansouri achieved Level 3 Verified Organizer status", tag: "Reputation" },
              { text: "Rabat Runners just reached 2,431 active members", tag: "Milestone" },
              { text: "Atlas Ventures sponsored Women Who Build with MAD 2,500 grant", tag: "Sponsorship" },
              { text: "Paris Tech Innovators opened RSVPs for DeepTech Demo Stage", tag: "Event" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C9C9C9] text-xs text-[#1F1F1D] shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#E4572E]" />
                <span className="font-bold text-[#1F1F1D] uppercase text-[10px] bg-[#EDE6D9] px-2 py-0.5 rounded-md">
                  {item.tag}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
