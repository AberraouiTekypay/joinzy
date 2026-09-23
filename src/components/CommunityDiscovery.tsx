"use client";

import React, { useState } from "react";
import { COMMUNITIES } from "@/data/mockData";
import { MapPin, Users, ArrowRight, Sparkles, Check } from "lucide-react";

export default function CommunityDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [joinedCommunities, setJoinedCommunities] = useState<Record<string, boolean>>({});

  const categories = ["All", "Tech & AI", "Running & Fitness", "Design & Creative", "Food & Culture", "Martial Arts", "Founders"];
  const cities = ["All", "Casablanca", "Rabat", "Marrakech", "Paris", "Lyon"];

  const filteredCommunities = COMMUNITIES.filter((comm) => {
    const matchesCat = selectedCategory === "All" || comm.category === selectedCategory;
    const matchesCity = selectedCity === "All" || comm.city === selectedCity;
    return matchesCat && matchesCity;
  });

  const toggleJoin = (id: string) => {
    setJoinedCommunities((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="communities" className="py-24 bg-[#EDE6D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Community Network
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D]">
              There&apos;s a community <br />
              <span className="text-[#E4572E]">for almost everything.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              type="button"
              onClick={() => scrollTo("create-community")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1F1F1D] hover:text-[#E4572E] group cursor-pointer"
            >
              <span>Don&apos;t see yours? Start one free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* City & Category Filter Rails */}
        <div className="space-y-3 mb-10">
          {/* City Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            <span className="text-xs font-bold text-[#1F1F1D]/60 uppercase tracking-wider shrink-0 mr-1">
              City:
            </span>
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCity === city
                    ? "bg-[#1F1F1D] text-white shadow-xs"
                    : "bg-white text-[#1F1F1D] hover:bg-[#F7F3EB] border border-[#C9C9C9]"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            <span className="text-xs font-bold text-[#1F1F1D]/60 uppercase tracking-wider shrink-0 mr-1">
              Vibe:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#E4572E] text-white shadow-md shadow-[#E4572E]/20"
                    : "bg-white text-[#1F1F1D] hover:bg-[#F7F3EB] border border-[#C9C9C9]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid of Community Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCommunities.map((comm) => {
            const isJoined = joinedCommunities[comm.id];
            return (
              <div
                key={comm.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#C9C9C9] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Community Header Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={comm.image}
                      alt={comm.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* City Badge */}
                    <div className="absolute top-3 left-3 bg-[#1F1F1D]/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E4572E]" />
                      <span>{comm.city}</span>
                    </div>

                    {/* Activity Indicator */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#1F1F1D] text-[11px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-[#688F3A]" />
                      <span>{comm.activityStatus}</span>
                    </div>

                    {/* Member Count Overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold drop-shadow-md">
                      <Users className="w-3.5 h-3.5 text-[#E4572E]" />
                      <span>{comm.memberCount.toLocaleString()} members</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#E4572E] mb-1">
                      {comm.category}
                    </div>
                    <h3 className="text-lg font-black text-[#1F1F1D] leading-snug group-hover:text-[#E4572E] transition-colors">
                      {comm.name}
                    </h3>
                    <p className="text-xs text-[#1F1F1D]/70 mt-2 line-clamp-2 leading-relaxed">
                      {comm.tagline}
                    </p>
                  </div>
                </div>

                {/* Footer Metrics & Join Button */}
                <div className="px-5 pb-5 pt-3 border-t border-[#C9C9C9]/50 flex items-center justify-between">
                  <div className="text-[11px] text-[#1F1F1D]/70 font-medium">
                    <strong className="text-[#1F1F1D] font-bold">{comm.eventsCount}</strong> events hosted
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleJoin(comm.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      isJoined
                        ? "bg-[#eff5ea] text-[#688F3A] border border-[#688F3A]/30"
                        : "bg-[#1F1F1D] text-white hover:bg-[#E4572E]"
                    }`}
                  >
                    {isJoined ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Joined</span>
                      </>
                    ) : (
                      <span>Join</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Explore Link */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => scrollTo("events")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#C9C9C9] font-bold text-[#1F1F1D] hover:border-[#1F1F1D] hover:bg-[#F7F3EB] transition shadow-2xs cursor-pointer group"
          >
            <span>Explore all local communities</span>
            <ArrowRight className="w-4 h-4 text-[#E4572E] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
