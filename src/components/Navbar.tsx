"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, User } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#EDE6D9]/95 backdrop-blur-md border-b border-[#C9C9C9]/80 shadow-xs py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo using authentic Joinzylogo.png */}
            <Link
              href="/"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img
                src="/Joinzylogo.png"
                alt="Joinzy Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#1F1F1D]">
              <button
                type="button"
                onClick={() => scrollToSection("differentiator")}
                className="hover:text-[#E4572E] transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("communities")}
                className="hover:text-[#E4572E] transition-colors cursor-pointer"
              >
                Communities
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("events")}
                className="hover:text-[#E4572E] transition-colors cursor-pointer"
              >
                Events
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("organizers")}
                className="hover:text-[#E4572E] transition-colors cursor-pointer"
              >
                For Organizers
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("sponsors")}
                className="hover:text-[#E4572E] transition-colors cursor-pointer"
              >
                For Sponsors
              </button>
            </nav>

            {/* Actions & Currency Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Currency Switcher */}
              <div className="flex items-center bg-[#E2D9C8] p-1 rounded-full text-xs font-semibold text-[#1F1F1D]">
                <button
                  type="button"
                  onClick={() => setCurrency("MAD")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    currency === "MAD"
                      ? "bg-[#1F1F1D] text-white shadow-xs font-bold"
                      : "text-[#1F1F1D]/70 hover:text-[#1F1F1D]"
                  }`}
                  title="Display in Moroccan Dirham"
                >
                  MAD
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("EUR")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    currency === "EUR"
                      ? "bg-[#1F1F1D] text-white shadow-xs font-bold"
                      : "text-[#1F1F1D]/70 hover:text-[#1F1F1D]"
                  }`}
                  title="Display in Euro"
                >
                  EUR (€)
                </button>
              </div>

              {/* Login Button */}
              <button
                type="button"
                onClick={() => setLoginModalOpen(true)}
                className="px-4 py-2 text-sm font-semibold text-[#1F1F1D] hover:text-[#E4572E] transition-colors cursor-pointer"
              >
                Log in
              </button>

              {/* Primary CTA in Terracotta */}
              <button
                type="button"
                onClick={() => scrollToSection("early-access")}
                className="px-5 py-2.5 text-sm font-bold text-white bg-[#E4572E] hover:bg-[#cf4921] rounded-full shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer group"
              >
                <span>Join Joinzy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger & Quick CTA */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => scrollToSection("early-access")}
                className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#E4572E] hover:bg-[#cf4921] rounded-full"
              >
                Join
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#1F1F1D] hover:bg-[#E2D9C8]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#EDE6D9] border-b border-[#C9C9C9] px-5 pt-3 pb-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#C9C9C9]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1D]/70">
                Currency
              </span>
              <div className="flex items-center bg-[#E2D9C8] p-1 rounded-full text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setCurrency("MAD")}
                  className={`px-3 py-1 rounded-full ${
                    currency === "MAD" ? "bg-[#1F1F1D] text-white" : "text-[#1F1F1D]"
                  }`}
                >
                  MAD
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("EUR")}
                  className={`px-3 py-1 rounded-full ${
                    currency === "EUR" ? "bg-[#1F1F1D] text-white" : "text-[#1F1F1D]"
                  }`}
                >
                  EUR (€)
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-3 font-semibold text-[#1F1F1D] text-base">
              <button
                type="button"
                onClick={() => scrollToSection("differentiator")}
                className="text-left py-2 hover:text-[#E4572E]"
              >
                How It Works
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("communities")}
                className="text-left py-2 hover:text-[#E4572E]"
              >
                Communities
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("events")}
                className="text-left py-2 hover:text-[#E4572E]"
              >
                Events
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("organizers")}
                className="text-left py-2 hover:text-[#E4572E]"
              >
                For Organizers
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("sponsors")}
                className="text-left py-2 hover:text-[#E4572E]"
              >
                For Sponsors
              </button>
            </div>

            <div className="pt-4 border-t border-[#C9C9C9] flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-[#1F1F1D] bg-white rounded-xl border border-[#C9C9C9]"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("early-access")}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#E4572E] hover:bg-[#cf4921] rounded-xl shadow-md"
              >
                Join Joinzy — Get Early Access
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Login Demo Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#C9C9C9] relative text-[#1F1F1D]">
            <button
              type="button"
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EDE6D9] text-[#1F1F1D]/60 hover:text-[#1F1F1D]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-[#E4572E] flex items-center justify-center text-white mb-4 shadow-md">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#1F1F1D] tracking-tight">
              Welcome to Joinzy
            </h3>
            <p className="text-[#1F1F1D]/70 text-sm mt-1.5 mb-6">
              Joinzy is currently in invite-only early access for initial hubs in Morocco &amp; France.
            </p>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setLoginModalOpen(false);
                  scrollToSection("early-access");
                }}
                className="w-full py-3 bg-[#E4572E] hover:bg-[#cf4921] text-white font-bold rounded-xl transition shadow-md cursor-pointer"
              >
                Request Early Access Pass
              </button>
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="w-full py-2.5 text-[#1F1F1D]/70 font-semibold text-sm hover:text-[#1F1F1D] transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
