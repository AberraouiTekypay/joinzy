"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, ArrowRight, CheckCircle2, Copy, Check } from "lucide-react";

export default function EarlyAccessForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Casablanca");
  const [role, setRole] = useState("Participant");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Trigger celebratory confetti in Joinzy Mediterranean brand colors
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E4572E", "#688F3A", "#EDE6D9", "#1F1F1D"],
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://joinzy.vercel.app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="early-access" className="py-24 bg-[#1F1F1D] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#E4572E] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            First Wave Priority Access
          </div>

          <h2 className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            Join the first wave.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EDE6D9]/80 leading-relaxed font-normal">
            We are rolling out invite access to organizers, participants, and sponsors across Morocco and France. Claim your spot in the network.
          </p>
        </div>

        {/* The Card / Form */}
        <div className="bg-[#252523] border border-[#3A3A35] rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Yassine Bennani"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#E4572E] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#E4572E] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#1C1C1A] border border-[#3A3A35] text-white text-sm focus:outline-none focus:border-[#E4572E] transition"
                >
                  <option value="Casablanca">Casablanca (Morocco)</option>
                  <option value="Rabat">Rabat (Morocco)</option>
                  <option value="Marrakech">Marrakech (Morocco)</option>
                  <option value="Tangier">Tangier (Morocco)</option>
                  <option value="Paris">Paris (France)</option>
                  <option value="Lyon">Lyon (France)</option>
                  <option value="Marseille">Marseille (France)</option>
                  <option value="Bordeaux">Bordeaux (France)</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              {/* Role Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  I am a:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Participant", sub: "Discover & attend local events" },
                    { label: "Community Organizer", sub: "Host gatherings & build a group" },
                    { label: "Sponsor", sub: "Support events with funding or swag" },
                    { label: "Venue / Business", sub: "Host events at our space or café" },
                  ].map((item) => (
                    <label
                      key={item.label}
                      onClick={() => setRole(item.label)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center gap-3 ${
                        role === item.label
                          ? "bg-[#E4572E]/15 border-[#E4572E] text-white"
                          : "bg-[#1C1C1A] border-[#3A3A35] text-zinc-400 hover:border-zinc-600"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        checked={role === item.label}
                        onChange={() => setRole(item.label)}
                        className="text-[#E4572E] focus:ring-0"
                      />
                      <div>
                        <div className="text-sm font-bold text-white">{item.label}</div>
                        <div className="text-[11px] text-zinc-400">{item.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#E4572E] hover:bg-[#cf4921] text-white font-extrabold text-base shadow-xl shadow-[#E4572E]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Join Joinzy</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-center text-xs text-zinc-400">
                Zero spam. Direct priority invite when rolling out to {city}.
              </p>
            </form>
          ) : (
            /* Success State with Pass Card */
            <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-3xl bg-[#688F3A]/20 text-[#688F3A] flex items-center justify-center mx-auto border border-[#688F3A]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#E4572E] font-bold">
                  Priority Pass Reserved
                </span>
                <h3 className="text-3xl font-black text-white mt-1">
                  Welcome to Joinzy, {name}!
                </h3>
                <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
                  You are registered as a <strong>{role}</strong> in <strong>{city}</strong>. We&apos;ve sent your onboarding link to <span className="text-[#EDE6D9] font-bold">{email}</span>.
                </p>
              </div>

              {/* Digital Pass Mockup */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#1C1C1A] border border-[#E4572E] text-left shadow-xl">
                <div className="flex justify-between items-center pb-3 border-b border-[#3A3A35]">
                  <div className="font-extrabold text-sm text-white font-heading">
                    JOINZY PASS · BATCH #01
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#688F3A] bg-[#eff5ea]/10 px-2 py-0.5 rounded-full border border-[#688F3A]/30">
                    STATUS: ACTIVE
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">HOLDER</span>
                    <span className="font-bold text-white">{name}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">CORRIDOR</span>
                    <span className="font-bold text-white">{city}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">ROLE</span>
                    <span className="font-bold text-[#EDE6D9]">{role}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">PRIORITY</span>
                    <span className="font-bold text-[#E4572E]">Tier 1 Waitlist</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-5 py-2.5 rounded-xl bg-[#2A2A27] hover:bg-[#343430] text-white text-xs font-bold flex items-center gap-2 transition cursor-pointer border border-[#3A3A35]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#688F3A]" />
                      <span>Invite Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#E4572E]" />
                      <span>Share with Community Organizers</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                >
                  Register another person
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
