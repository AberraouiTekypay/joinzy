"use client";

import React from "react";
import {
  Users2,
  CalendarCheck,
  Search,
  Coins,
  ShieldCheck,
  FileSpreadsheet,
  QrCode,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ForOrganizers() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    { title: "Create your community", desc: "Set up a high-converting profile in under 2 minutes for free.", icon: Users2 },
    { title: "Build your audience", desc: "Bring together members across WhatsApp, Instagram, and web.", icon: Sparkles },
    { title: "Organize events", desc: "Publish gatherings, set capacity, and manage RSVPs effortlessly.", icon: CalendarCheck },
    { title: "Find resources", desc: "Request venues, coffee, photography, and gear with 1-click needs.", icon: Search },
    { title: "Find sponsors", desc: "Receive cash grants and in-kind pledges directly from local brands.", icon: Coins },
    { title: "Build verified track record", desc: "Establish platform reputation based on completed events & attendance.", icon: ShieldCheck },
    { title: "Generate sponsorship dossiers", desc: "Automated media kits and metric decks that impress enterprise partners.", icon: FileSpreadsheet },
    { title: "Track attendance", desc: "Fast QR code check-in to verify actual in-person attendance.", icon: QrCode },
  ];

  return (
    <section id="organizers" className="py-24 bg-[#EDE6D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
            <Users2 className="w-3.5 h-3.5" />
            Built for Community Leaders
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D]">
            Your community. <br />
            <span className="text-[#E4572E]">Your people. Your events.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1F1F1D]/70 leading-relaxed">
            Running a community shouldn&apos;t mean spending out-of-pocket on room rentals or juggling five disconnected apps. Joinzy gives organizers the tools to thrive.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#C9C9C9] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#E4572E]/10 text-[#E4572E] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-[#1F1F1D]">{item.title}</h3>
                  <p className="text-xs text-[#1F1F1D]/70 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo("early-access")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E4572E] hover:bg-[#cf4921] text-white font-extrabold text-base shadow-lg transition flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Start a community</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-xs text-[#1F1F1D]/60 font-semibold">
            Free forever for community organizers · No credit card needed
          </span>
        </div>
      </div>
    </section>
  );
}
