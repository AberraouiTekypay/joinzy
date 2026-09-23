"use client";

import React from "react";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NeedHelpMakingItHappen from "@/components/NeedHelpMakingItHappen";
import CommunityDiscovery from "@/components/CommunityDiscovery";
import EventsDiscovery from "@/components/EventsDiscovery";
import CreateCommunityMockup from "@/components/CreateCommunityMockup";
import MicrosponsorshipMarketplace from "@/components/MicrosponsorshipMarketplace";
import SponsorDossiers from "@/components/SponsorDossiers";
import OrganizerTrackRecord from "@/components/OrganizerTrackRecord";
import SponsorIntelligence from "@/components/SponsorIntelligence";
import Flywheel from "@/components/Flywheel";
import GeoNodes from "@/components/GeoNodes";
import ForOrganizers from "@/components/ForOrganizers";
import ForSponsors from "@/components/ForSponsors";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#121316] font-sans antialiased selection:bg-[#7c3aed] selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Landing Experience */}
        <main className="flex-1">
          {/* HERO */}
          <Hero />

          {/* THE CENTERPIECE DIFFERENTIATOR (Right after Hero) */}
          <NeedHelpMakingItHappen />

          {/* SECTION 1: COMMUNITY DISCOVERY */}
          <CommunityDiscovery />

          {/* SECTION 2: REAL EVENTS DISCOVERY */}
          <EventsDiscovery />

          {/* SECTION 3: CREATE A COMMUNITY (Profile Mockup & Free Acquisition) */}
          <CreateCommunityMockup />

          {/* SECTION 5: MICROSPONSORSHIP MARKETPLACE */}
          <MicrosponsorshipMarketplace />

          {/* SECTION 6: SPONSOR DOSSIERS (Automated Decks) */}
          <SponsorDossiers />

          {/* SECTION 7: ORGANIZER TRACK RECORD (Reputation Infrastructure) */}
          <OrganizerTrackRecord />

          {/* SECTION 8: SPONSOR INTELLIGENCE (Cross-community analytics) */}
          <SponsorIntelligence />

          {/* SECTION 9: THE NETWORK FLYWHEEL */}
          <Flywheel />

          {/* SECTION 10: MOROCCO + FRANCE CORRIDORS */}
          <GeoNodes />

          {/* SECTION 11: FOR ORGANIZERS */}
          <ForOrganizers />

          {/* SECTION 12: FOR SPONSORS */}
          <ForSponsors />

          {/* SECTION 13: EARLY ACCESS CONVERSION FORM */}
          <EarlyAccessForm />
        </main>

        {/* SECTION 14: FOOTER (Includes strictly "An EM300.co Company") */}
        <Footer />
      </div>
    </CurrencyProvider>
  );
}
