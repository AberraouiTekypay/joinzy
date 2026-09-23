"use client";

import React, { useState } from "react";
import {
  Users2,
  CalendarDays,
  UserCheck,
  Building,
  Gift,
  Sparkles,
  RefreshCw,
} from "lucide-react";

export default function Flywheel() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Communities",
      icon: Users2,
      desc: "Passionate groups form around tech, running, design, BJJ, culture, and startups.",
      accent: "text-[#E4572E] bg-[#E4572E]/10",
    },
    {
      num: "02",
      title: "Events",
      icon: CalendarDays,
      desc: "Organizers host real-world dinners, morning runs, workshops, and demo nights.",
      accent: "text-[#1F1F1D] bg-[#EDE6D9]",
    },
    {
      num: "03",
      title: "Participants",
      icon: UserCheck,
      desc: "Locals RSVP, attend in person, and build verified participation history.",
      accent: "text-[#688F3A] bg-[#eff5ea]",
    },
    {
      num: "04",
      title: "Sponsors",
      icon: Building,
      desc: "Local shops, cafes, and companies discover relevant high-intent audiences.",
      accent: "text-[#E4572E] bg-[#E4572E]/10",
    },
    {
      num: "05",
      title: "Resources",
      icon: Gift,
      desc: "Venues, specialty coffees, cash grants, photo coverage, and prizes are pledged.",
      accent: "text-[#1F1F1D] bg-[#EDE6D9]",
    },
    {
      num: "06",
      title: "Better Events",
      icon: Sparkles,
      desc: "Production quality rises, retention soars, and organizers build reputation.",
      accent: "text-[#688F3A] bg-[#eff5ea]",
    },
    {
      num: "07",
      title: "More Communities",
      icon: RefreshCw,
      desc: "New organizers see that running a community on Joinzy gets them real backing.",
      accent: "text-[#E4572E] bg-[#E4572E]/10",
    },
  ];

  return (
    <section className="py-24 bg-[#EDE6D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            Network Effect
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D] leading-tight">
            More communities create more activity. <br />
            <span className="text-[#E4572E]">More activity creates more value.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1F1F1D]/70 leading-relaxed">
            The platform gradually creates a self-reinforcing graph of communities, events, verified attendance, and resource sponsors.
          </p>
        </div>

        {/* Visual Flywheel Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                  isSelected
                    ? "bg-[#1F1F1D] text-white shadow-xl scale-105 border-2 border-[#E4572E]"
                    : "bg-white text-[#1F1F1D] border border-[#C9C9C9] hover:border-[#1F1F1D] hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#1F1F1D]/50">
                      {step.num}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${step.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-black font-heading">{step.title}</h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isSelected ? "text-zinc-300" : "text-[#1F1F1D]/70"}`}>
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#C9C9C9]/30 flex items-center justify-end text-[10px] font-bold text-[#1F1F1D]/50">
                  {idx < steps.length - 1 ? "Next Step →" : "Loops Back ↺"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Summary Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-[#C9C9C9] text-xs sm:text-sm font-bold text-[#1F1F1D] shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#688F3A]" />
            <span>Community Graph + Event Graph + Sponsor Graph = Trusted Infrastructure Layer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
