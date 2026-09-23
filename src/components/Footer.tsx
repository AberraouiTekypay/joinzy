"use client";

import React, { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalBody, setModalBody] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openInfoModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalBody(content);
  };

  return (
    <footer className="bg-[#1F1F1D] text-white pt-20 pb-12 border-t border-[#3A3A35] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#3A3A35]">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#EDE6D9] p-2 rounded-2xl inline-block shadow-md">
                <img
                  src="/Joinzylogo.png"
                  alt="Joinzy Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              The infrastructure and marketplace for real-world communities. Discover gatherings, build verified reputations, and match with local business sponsors.
            </p>

            <div className="flex items-center gap-4 pt-2 text-zinc-400 text-sm">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E4572E] transition"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E4572E] transition"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E4572E] transition"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-[#EDE6D9] font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("differentiator")}
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  Discover Needs &amp; Pledges
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("communities")}
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  Communities Directory
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("events")}
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  Events Calendar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("organizers")}
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  For Organizers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("sponsors")}
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  For Sponsors
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#EDE6D9] font-medium">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openInfoModal(
                      "About Joinzy",
                      "Joinzy is built to serve genuine real-world communities. Starting in Morocco (Casablanca, Rabat, Marrakech, Tangier) and France (Paris, Lyon, Marseille, Bordeaux), we connect people through offline shared passions and provide the marketplace tools organizers need to get funded and sustained."
                    )
                  }
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openInfoModal(
                      "Contact & Partnerships",
                      "Interested in brand sponsorships, municipal partnerships, or venue integration? Reach out directly to team@joinzy.co or partners@em300.co."
                    )
                  }
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openInfoModal(
                      "Privacy & Data Ethics",
                      "Joinzy is engineered with privacy at its foundation. We never harvest or monetize sensitive personal contacts. All community audience data is 100% permissioned and aggregated at the cohort level."
                    )
                  }
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openInfoModal(
                      "Terms of Service",
                      "Community organizers use Joinzy free of charge. Sponsors agree to standard verified deliverable milestones. Harassment, hateful conduct, and spam are strictly prohibited across all community channels."
                    )
                  }
                  className="hover:text-[#E4572E] transition cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Back to top & Locations */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-[#2A2A27] hover:bg-[#343430] text-[#EDE6D9] hover:text-white border border-[#3A3A35] transition flex items-center gap-2 text-xs font-bold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-left md:text-right mt-6 md:mt-0 text-xs text-zinc-400 space-y-1">
              <div>Casablanca · Rabat · Marrakech</div>
              <div>Paris · Lyon · Marseille</div>
            </div>
          </div>
        </div>

        {/* Bottom Line Requirement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} JOINZY. All rights reserved.
          </div>

          {/* MANDATORY STRICT REQUIREMENT: "An EM300.co Company" */}
          <div className="font-bold text-sm tracking-wide text-white">
            An EM300.co Company
          </div>

          <div className="text-zinc-500 text-[11px]">
            Infrastructure for Real Communities
          </div>
        </div>
      </div>

      {/* Info Dialog Modal */}
      {modalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#252523] border border-[#3A3A35] rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative">
            <h3 className="text-2xl font-black text-white">{modalTitle}</h3>
            <p className="text-zinc-300 text-sm mt-3 leading-relaxed">{modalBody}</p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setModalTitle(null);
                  setModalBody(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#E4572E] hover:bg-[#cf4921] text-white font-bold text-xs transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
