"use client";

import React, { useState } from "react";
import { EVENTS } from "@/data/mockData";
import { Clock, MapPin, Users, Ticket, Check, HeartHandshake } from "lucide-react";

export default function EventsDiscovery() {
  const [rsvps, setRsvps] = useState<Record<string, boolean>>({});
  const [filterCity, setFilterCity] = useState<string>("All");

  const toggleRsvp = (id: string) => {
    setRsvps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cities = ["All", "Casablanca", "Rabat", "Marrakech", "Paris"];

  const filteredEvents = EVENTS.filter((evt) => {
    return filterCity === "All" || evt.city === filterCity;
  });

  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4572E]/15 text-[#E4572E] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              Real Gatherings
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#1F1F1D]">
              Don&apos;t just scroll. <br />
              <span className="text-[#E4572E]">
                Go somewhere.
              </span>
            </h2>
            <p className="mt-3 text-[#1F1F1D]/70 text-base max-w-xl">
              Authentic dinners, sunrise runs, open mats, and design critiques. Discover what&apos;s happening this week.
            </p>
          </div>

          {/* Quick city filter chips */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 overflow-x-auto pb-1">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setFilterCity(city)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCity === city
                    ? "bg-[#1F1F1D] text-white shadow-xs"
                    : "bg-[#EDE6D9] text-[#1F1F1D] hover:bg-[#E2D9C8]"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => {
            const isRsvped = rsvps[evt.id];
            const currentGoing = evt.attendeesGoing + (isRsvped ? 1 : 0);

            let sponsorshipBadgeClass = "bg-[#EDE6D9] text-[#1F1F1D] border-[#C9C9C9]";
            if (evt.sponsorshipStatus === "Fully Backed") {
              sponsorshipBadgeClass = "bg-[#eff5ea] text-[#688F3A] border-[#688F3A]/30";
            } else if (evt.sponsorshipStatus === "Sponsorship Open") {
              sponsorshipBadgeClass = "bg-[#E4572E]/10 text-[#E4572E] border-[#E4572E]/30";
            }

            return (
              <div
                key={evt.id}
                className="group bg-[#F7F3EB] rounded-3xl overflow-hidden border border-[#C9C9C9] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Event Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1D] via-[#1F1F1D]/20 to-transparent" />

                    {/* Date Tag */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md text-[#1F1F1D] font-black text-xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E4572E]" />
                      <span>{evt.dateStr} · {evt.timeStr}</span>
                    </div>

                    {/* Attendees Going Count */}
                    <div className="absolute top-3 right-3 bg-[#1F1F1D]/85 backdrop-blur-md px-3 py-1.5 rounded-full text-white font-bold text-xs flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-[#E4572E]" />
                      <span>{currentGoing} going</span>
                    </div>

                    {/* Community Host Pill */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-semibold text-[#EDE6D9] uppercase tracking-wider block">
                        Hosted by
                      </span>
                      <span className="font-bold text-sm text-white drop-shadow-xs">
                        {evt.communityName}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#1F1F1D] leading-snug group-hover:text-[#E4572E] transition-colors">
                      {evt.title}
                    </h3>

                    <div className="mt-4 space-y-2 text-xs text-[#1F1F1D]/70">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#E4572E] shrink-0" />
                        <span className="truncate">{evt.locationName}</span>
                      </div>
                    </div>

                    {/* Sponsorship Status Pill */}
                    <div className="mt-5 pt-4 border-t border-[#C9C9C9]/60 flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1 ${sponsorshipBadgeClass}`}>
                        <HeartHandshake className="w-3.5 h-3.5" />
                        {evt.sponsorshipStatus}
                      </span>
                      <span className="text-xs font-bold text-[#1F1F1D] bg-[#EDE6D9] px-2.5 py-1 rounded-full">
                        {evt.priceType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* RSVP Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => toggleRsvp(evt.id)}
                    className={`w-full py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isRsvped
                        ? "bg-[#688F3A] text-white shadow-md shadow-[#688F3A]/20"
                        : "bg-[#E4572E] hover:bg-[#cf4921] text-white shadow-md shadow-[#E4572E]/20"
                    }`}
                  >
                    {isRsvped ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>You&apos;re going! · See you there</span>
                      </>
                    ) : (
                      <>
                        <Ticket className="w-4 h-4" />
                        <span>RSVP / Free Spot</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
