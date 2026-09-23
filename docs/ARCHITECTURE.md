# JOINZY Technical Architecture & Codebase Guide

> **Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4  
> **Repository**: [https://github.com/AberraouiTekypay/joinzy](https://github.com/AberraouiTekypay/joinzy)  
> **Production URL**: [https://joinzy.vercel.app](https://joinzy.vercel.app)  

---

## 1. Directory Structure

```
C:\joinzy
├── public/
│   ├── Joinzylogo.png       # Official Charcoal + Terracotta brand logo
│   └── icon.svg             # Dynamic SVG favicon
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind v4 import, design tokens, Mediterranean scrollbar
│   │   ├── layout.tsx       # Root metadata, OpenGraph, viewport, font definitions
│   │   └── page.tsx         # Master landing page layout
│   ├── components/
│   │   ├── Navbar.tsx       # Brand header, currency switch (MAD/EUR), mobile drawer
│   │   ├── Hero.tsx         # High-energy consumer social hero with live ticker
│   │   ├── NeedHelpMakingItHappen.tsx # THE CENTERPIECE: Need & pledge matching engine
│   │   ├── CommunityDiscovery.tsx    # Filterable grid of real communities
│   │   ├── EventsDiscovery.tsx       # Rich event cards with live RSVP states
│   │   ├── CreateCommunityMockup.tsx # High-fidelity community profile mockup
│   │   ├── MicrosponsorshipMarketplace.tsx # Tier cards (MAD/EUR) & pledge simulation
│   │   ├── SponsorDossiers.tsx       # Automated community deck & demographic tabs
│   │   ├── OrganizerTrackRecord.tsx  # Verifiable behavioral trust ledger
│   │   ├── SponsorIntelligence.tsx   # Aggregated cross-community sponsor portal
│   │   ├── Flywheel.tsx              # 7-step cyclical network effect diagram
│   │   ├── GeoNodes.tsx              # Morocco + France launch corridor switcher
│   │   ├── ForOrganizers.tsx         # 8 key organizer capabilities & CTA
│   │   ├── ForSponsors.tsx           # Direct community marketing benefits
│   │   ├── EarlyAccessForm.tsx       # Interactive waitlist with confetti & digital pass
│   │   └── Footer.tsx                # Brand links & strictly 'An EM300.co Company'
│   ├── context/
│   │   └── CurrencyContext.tsx       # Dynamic currency provider (MAD vs EUR €)
│   └── data/
│       └── mockData.ts               # Structured, typed community & event data
├── docs/
│   ├── BRAND_GUIDELINES.md  # Identity, colors, typography, and copywriting
│   ├── PRODUCT_SPEC.md      # Market problem, user journeys, defensibility graphs
│   └── ARCHITECTURE.md      # Technical stack and implementation guide
└── package.json             # Scripts and dependencies
```

---

## 2. State & Context Architecture

### Dynamic Currency Provider (`src/context/CurrencyContext.tsx`)
Because Joinzy launches simultaneously in Morocco and France, all sponsorship amounts and grant targets can be viewed in either **Moroccan Dirham (`MAD`)** or **Euro (`EUR €`)**:

```tsx
export type Currency = "MAD" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (mad: string, eur: string) => string;
}
```

Components consume `useCurrency()` to reactively re-render prices across:
- `MicrosponsorshipMarketplace` (e.g. `MAD 2,500` ⇄ `€250`)
- `NeedHelpMakingItHappen` (matching cash grants)
- `SponsorDossiers` (title partnership values)
- `SponsorIntelligence` (total spend calculations)

---

## 3. Component Architecture & Interactions

### The Centerpiece: `NeedHelpMakingItHappen.tsx`
Positioned directly after `Hero.tsx` as requested, this component serves as the primary visual differentiator:
- Left card displays a real community need (Auditorium space, 100 coffees, MAD 2,500 grant).
- Center displays the Joinzy matching bridge with subtle pulse animation.
- Right card shows the local business response (TechnoSpace Coworking, Café Bloom Roasters, Atlas Ventures).
- Interactive "Pledge Support" button gives immediate visual confirmation.

### Early Access Conversion Engine: `EarlyAccessForm.tsx`
- Captures `Name`, `Email`, `City`, and `Role` (`Participant`, `Community Organizer`, `Sponsor`, `Venue / Business`).
- On submission:
  1. Triggers custom canvas confetti styled in Joinzy brand colors (`#E4572E`, `#688F3A`, `#EDE6D9`, `#1F1F1D`).
  2. Renders a personal **Joinzy Batch #01 Priority Pass** card.
  3. Offers a 1-click invite link copier.

---

## 4. Performance & Styling (Tailwind CSS v4)

- Zero runtime CSS overhead via `@import "tailwindcss";`.
- Modern color variables declared under `@layer base` for instant caching.
- Clean standard semantic HTML elements throughout (`header`, `main`, `section`, `footer`, `nav`).
- Zero console errors or TypeScript compilation warnings.
