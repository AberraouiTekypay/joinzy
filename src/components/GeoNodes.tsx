"use client";

import React, { useState } from "react";
import { MapPin, Globe } from "lucide-react";

export default function GeoNodes() {
  const [activeCountry, setActiveCountry] = useState<"all" | "morocco" | "france">("all");

  const moroccoCities = [
    { name: "Casablanca", tag: "AI, Tech, Food & Design", count: "48 Communities", status: "Hub Active" },
    { name: "Rabat", tag: "Athletics, Running & Civic", count: "32 Communities", status: "Hub Active" },
    { name: "Marrakech", tag: "Martial Arts, Design & Retreats", count: "19 Communities", status: "Growing" },
    { name: "Tangier", tag: "Cross-border Creators & Maritime", count: "14 Communities", status: "Growing" },
  ];

  const franceCities = [
    { name: "Paris", tag: "DeepTech, Venture & Design", count: "54 Communities", status: "Hub Active" },
    { name: "Lyon", tag: "Creative Collective & Culinary", count: "26 Communities", status: "Hub Active" },
    { name: "Marseille", tag: "Coastal Social & Startups", count: "18 Communities", status: "Growing" },
    { name: "Bordeaux", tag: "Digital Nomads & Culture", count: "15 Communities", status: "Growing" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            Initial Launch Corridors
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D]">
            Starting where communities <br />
            <span className="text-[#E4572E]">are already everywhere</span> — but fragmented.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1F1F1D]/70 leading-relaxed">
            People are already connecting via WhatsApp groups, Telegram chats, and Instagram DMs. Joinzy gives them a shared infrastructure and marketplace.
          </p>

          {/* Territory filter switcher */}
          <div className="mt-8 inline-flex items-center bg-[#EDE6D9] p-1.5 rounded-full text-xs font-bold border border-[#C9C9C9]">
            <button
              type="button"
              onClick={() => setActiveCountry("all")}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${
                activeCountry === "all" ? "bg-[#1F1F1D] text-white shadow-xs" : "text-[#1F1F1D] hover:text-[#E4572E]"
              }`}
            >
              All Hubs
            </button>
            <button
              type="button"
              onClick={() => setActiveCountry("morocco")}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${
                activeCountry === "morocco" ? "bg-[#1F1F1D] text-white shadow-xs" : "text-[#1F1F1D] hover:text-[#E4572E]"
              }`}
            >
              Morocco Corridors
            </button>
            <button
              type="button"
              onClick={() => setActiveCountry("france")}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${
                activeCountry === "france" ? "bg-[#1F1F1D] text-white shadow-xs" : "text-[#1F1F1D] hover:text-[#E4572E]"
              }`}
            >
              France Corridors
            </button>
          </div>
        </div>

        {/* Dual Region Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Morocco Column */}
          {(activeCountry === "all" || activeCountry === "morocco") && (
            <div className="bg-[#EDE6D9] rounded-3xl p-6 sm:p-8 border border-[#C9C9C9]">
              <div className="flex items-center justify-between pb-6 border-b border-[#C9C9C9]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E4572E]">
                    Territory 01
                  </span>
                  <h3 className="text-2xl font-black text-[#1F1F1D] mt-0.5">Morocco</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-[#1F1F1D] border border-[#C9C9C9] text-xs font-bold">
                  113 Active Groups
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {moroccoCities.map((city) => (
                  <div
                    key={city.name}
                    className="bg-white p-5 rounded-2xl border border-[#C9C9C9] shadow-2xs hover:border-[#E4572E] transition group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-lg text-[#1F1F1D] group-hover:text-[#E4572E] transition">
                        {city.name}
                      </span>
                      <MapPin className="w-4 h-4 text-[#E4572E]" />
                    </div>
                    <p className="text-xs text-[#1F1F1D]/70 font-medium">{city.tag}</p>
                    <div className="mt-3 pt-3 border-t border-[#C9C9C9]/40 flex items-center justify-between text-[11px] font-bold">
                      <span className="text-[#1F1F1D]">{city.count}</span>
                      <span className="text-[#688F3A] bg-[#eff5ea] px-2 py-0.5 rounded-md border border-[#688F3A]/20">
                        {city.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* France Column */}
          {(activeCountry === "all" || activeCountry === "france") && (
            <div className="bg-[#EDE6D9] rounded-3xl p-6 sm:p-8 border border-[#C9C9C9]">
              <div className="flex items-center justify-between pb-6 border-b border-[#C9C9C9]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E4572E]">
                    Territory 02
                  </span>
                  <h3 className="text-2xl font-black text-[#1F1F1D] mt-0.5">France</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-[#1F1F1D] border border-[#C9C9C9] text-xs font-bold">
                  113 Active Groups
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {franceCities.map((city) => (
                  <div
                    key={city.name}
                    className="bg-white p-5 rounded-2xl border border-[#C9C9C9] shadow-2xs hover:border-[#E4572E] transition group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-lg text-[#1F1F1D] group-hover:text-[#E4572E] transition">
                        {city.name}
                      </span>
                      <MapPin className="w-4 h-4 text-[#E4572E]" />
                    </div>
                    <p className="text-xs text-[#1F1F1D]/70 font-medium">{city.tag}</p>
                    <div className="mt-3 pt-3 border-t border-[#C9C9C9]/40 flex items-center justify-between text-[11px] font-bold">
                      <span className="text-[#1F1F1D]">{city.count}</span>
                      <span className="text-[#688F3A] bg-[#eff5ea] px-2 py-0.5 rounded-md border border-[#688F3A]/20">
                        {city.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
