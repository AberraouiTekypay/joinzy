export interface Community {
  id: string;
  name: string;
  city: string;
  country: "Morocco" | "France";
  memberCount: number;
  category: "Tech & AI" | "Running & Fitness" | "Design & Creative" | "Food & Culture" | "Martial Arts" | "Founders";
  image: string;
  activityStatus: "Very Active" | "Active" | "Trending";
  eventsCount: number;
  completionRate: number;
  tagline: string;
  accentColor: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  communityName: string;
  city: string;
  country: "Morocco" | "France";
  attendeesGoing: number;
  dateStr: string;
  timeStr: string;
  locationName: string;
  category: string;
  image: string;
  priceType: "Free" | "Paid" | "RSVP Required";
  priceAmount?: string;
  sponsorshipStatus: "Sponsorship Open" | "Partially Sponsored" | "Fully Backed";
}

export interface ResourceNeed {
  id: string;
  category: "Venue" | "Food & Drinks" | "Cash Grant" | "Production" | "Prizes";
  iconName: string;
  community: string;
  requestTitle: string;
  quantityOrBudget: string;
  urgency: "Next Event" | "Monthly" | "Immediate";
  pledgedBy?: {
    businessName: string;
    businessType: string;
    offerText: string;
    verified: boolean;
  };
}

export const COMMUNITIES: Community[] = [
  {
    id: "casa-ai",
    name: "Casablanca AI Builders",
    city: "Casablanca",
    country: "Morocco",
    memberCount: 1284,
    category: "Tech & AI",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Trending",
    eventsCount: 24,
    completionRate: 92,
    tagline: "Machine learning engineers, researchers, and LLM practitioners.",
    accentColor: "from-purple-600 to-indigo-600",
  },
  {
    id: "rabat-runners",
    name: "Rabat Runners",
    city: "Rabat",
    country: "Morocco",
    memberCount: 2431,
    category: "Running & Fitness",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Very Active",
    eventsCount: 86,
    completionRate: 98,
    tagline: "Weekly sunrise coastal runs, track sessions, and half-marathon prep.",
    accentColor: "from-amber-500 to-orange-600",
  },
  {
    id: "women-who-build",
    name: "Women Who Build",
    city: "Casablanca",
    country: "Morocco",
    memberCount: 842,
    category: "Founders",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Trending",
    eventsCount: 18,
    completionRate: 95,
    tagline: "Female tech founders, operators, and product leaders scaling across MENA.",
    accentColor: "from-pink-600 to-rose-600",
  },
  {
    id: "casa-foodies",
    name: "Casablanca Foodies",
    city: "Casablanca",
    country: "Morocco",
    memberCount: 3102,
    category: "Food & Culture",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Very Active",
    eventsCount: 42,
    completionRate: 89,
    tagline: "Pop-up tastings, culinary walk-throughs, and chef roundtables.",
    accentColor: "from-emerald-600 to-teal-600",
  },
  {
    id: "morocco-bjj",
    name: "Morocco BJJ Community",
    city: "Marrakech",
    country: "Morocco",
    memberCount: 617,
    category: "Martial Arts",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Active",
    eventsCount: 34,
    completionRate: 96,
    tagline: "Gi & No-Gi open mats, guest black belt seminars, and youth camps.",
    accentColor: "from-blue-600 to-cyan-600",
  },
  {
    id: "casa-designers",
    name: "Designers of Casablanca",
    city: "Casablanca",
    country: "Morocco",
    memberCount: 1129,
    category: "Design & Creative",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Active",
    eventsCount: 29,
    completionRate: 91,
    tagline: "Product designers, UI/UX researchers, brand strategists and typographers.",
    accentColor: "from-violet-600 to-fuchsia-600",
  },
  {
    id: "paris-tech-innovators",
    name: "Paris Tech Innovators",
    city: "Paris",
    country: "France",
    memberCount: 1890,
    category: "Tech & AI",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Trending",
    eventsCount: 31,
    completionRate: 94,
    tagline: "Founders, seed investors, and engineers meeting across Paris incubators.",
    accentColor: "from-indigo-600 to-blue-600",
  },
  {
    id: "lyon-creative",
    name: "Lyon Creative Collective",
    city: "Lyon",
    country: "France",
    memberCount: 940,
    category: "Design & Creative",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    activityStatus: "Active",
    eventsCount: 22,
    completionRate: 90,
    tagline: "Visual artists, photographers, and motion designers sharing portfolios.",
    accentColor: "from-rose-500 to-amber-500",
  },
];

export const EVENTS: CommunityEvent[] = [
  {
    id: "evt-ai-founders",
    title: "AI Founders Dinner & Live Demo Night",
    communityName: "Casablanca AI Builders",
    city: "Casablanca",
    country: "Morocco",
    attendeesGoing: 87,
    dateStr: "Tomorrow",
    timeStr: "19:30",
    locationName: "Technopark Sky Lounge, Casablanca",
    category: "Tech & AI",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    priceType: "Free",
    sponsorshipStatus: "Partially Sponsored",
  },
  {
    id: "evt-sunday-run",
    title: "Sunday Coastal Sunrise Run (5K & 10K)",
    communityName: "Rabat Runners",
    city: "Rabat",
    country: "Morocco",
    attendeesGoing: 124,
    dateStr: "Sunday",
    timeStr: "09:00",
    locationName: "Bouregreg Promenade, Rabat",
    category: "Running & Fitness",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80",
    priceType: "Free",
    sponsorshipStatus: "Fully Backed",
  },
  {
    id: "evt-designers-night",
    title: "Designers & Creators Night: Portfolio Critiques",
    communityName: "Designers of Casablanca",
    city: "Casablanca",
    country: "Morocco",
    attendeesGoing: 63,
    dateStr: "Thursday",
    timeStr: "18:30",
    locationName: "Atelier Gauthier, Casablanca",
    category: "Design & Creative",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    priceType: "Free",
    sponsorshipStatus: "Sponsorship Open",
  },
  {
    id: "evt-bjj-seminar",
    title: "Atlas Open Mat & Leglock Defense Seminar",
    communityName: "Morocco BJJ Community",
    city: "Marrakech",
    country: "Morocco",
    attendeesGoing: 48,
    dateStr: "Saturday",
    timeStr: "11:00",
    locationName: "Atlas Combat Dojo, Gueliz",
    category: "Martial Arts",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    priceType: "Free",
    sponsorshipStatus: "Partially Sponsored",
  },
  {
    id: "evt-paris-pitch",
    title: "DeepTech & Climate Founders Demo Stage",
    communityName: "Paris Tech Innovators",
    city: "Paris",
    country: "France",
    attendeesGoing: 112,
    dateStr: "Next Tuesday",
    timeStr: "19:00",
    locationName: "Halle Freyssinet, 13th Arr., Paris",
    category: "Tech & AI",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    priceType: "Free",
    sponsorshipStatus: "Partially Sponsored",
  },
  {
    id: "evt-food-walk",
    title: "Nocturne Habous Tasting & Street Bites",
    communityName: "Casablanca Foodies",
    city: "Casablanca",
    country: "Morocco",
    attendeesGoing: 75,
    dateStr: "Friday",
    timeStr: "20:00",
    locationName: "Place Moulay Youssef, Habous",
    category: "Food & Culture",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    priceType: "Free",
    sponsorshipStatus: "Fully Backed",
  },
];

export const RESOURCE_MATCHES: ResourceNeed[] = [
  {
    id: "res-1",
    category: "Venue",
    iconName: "Building2",
    community: "Casablanca AI Builders",
    requestTitle: "Modern auditorium or tech lounge for 100 people",
    quantityOrBudget: "3 hours · Projector + Sound",
    urgency: "Next Event",
    pledgedBy: {
      businessName: "TechnoSpace Coworking",
      businessType: "Innovation Campus & Hub",
      offerText: "Venue provided · Free Wi-Fi, audio desk & stage access",
      verified: true,
    },
  },
  {
    id: "res-2",
    category: "Food & Drinks",
    iconName: "Coffee",
    community: "Designers of Casablanca",
    requestTitle: "Specialty cold brew & artisan pastries for attendees",
    quantityOrBudget: "80 servings",
    urgency: "Next Event",
    pledgedBy: {
      businessName: "Café Bloom Roasters",
      businessType: "Local Specialty Café",
      offerText: "100 cold brews & mini canelés provided complimentary",
      verified: true,
    },
  },
  {
    id: "res-3",
    category: "Cash Grant",
    iconName: "Banknote",
    community: "Women Who Build",
    requestTitle: "Micro-grant for workshop materials and livestream AV",
    quantityOrBudget: "MAD 2,500 (€250)",
    urgency: "Immediate",
    pledgedBy: {
      businessName: "Atlas Ventures Capital",
      businessType: "Seed Stage Venture Fund",
      offerText: "MAD 2,500 cash sponsorship pledged as Community Partner",
      verified: true,
    },
  },
  {
    id: "res-4",
    category: "Production",
    iconName: "Camera",
    community: "Rabat Runners",
    requestTitle: "High-speed sports photographer for sunrise 10K finish line",
    quantityOrBudget: "2 hours live shooting",
    urgency: "Next Event",
    pledgedBy: {
      businessName: "Studio Lumina Maroc",
      businessType: "Creative Production House",
      offerText: "Full finish line photo coverage + 30s social highlight reel",
      verified: true,
    },
  },
  {
    id: "res-5",
    category: "Prizes",
    iconName: "Trophy",
    community: "Morocco BJJ Community",
    requestTitle: "Hydration packs & combat gear for tournament podium winners",
    quantityOrBudget: "6 prize packs",
    urgency: "Monthly",
    pledgedBy: {
      businessName: "Vanguard Combat Lab",
      businessType: "Athletic Gear Brand",
      offerText: "6 rashguards and competition bags provided to champions",
      verified: true,
    },
  },
];

export const SPONSOR_TIERS = [
  {
    id: "tier-community",
    name: "Community Partner",
    priceMAD: "1,000",
    priceEUR: "100",
    frequency: "Per Event",
    popular: false,
    badge: "Entry Micro-Sponsor",
    description: "Ideal for local businesses and independent shops wanting direct, authentic neighborhood visibility.",
    deliverables: [
      "Logo placement on digital badge & event page",
      "Mention in organizer pre-event email broadcast",
      "2 reserved VIP passes for company team",
      "Post-event attendee aggregate impression report",
    ],
  },
  {
    id: "tier-event",
    name: "Event Partner",
    priceMAD: "2,500",
    priceEUR: "250",
    frequency: "Per Event",
    popular: true,
    badge: "Most Popular",
    description: "The sweet spot for tech startups, roasters, studios, and agencies seeking meaningful local community loyalty.",
    deliverables: [
      "All Community Partner benefits",
      "Physical booth or demonstration table at venue",
      "3-minute stage introduction / welcome slot",
      "Exclusive swag & sample distribution in attendee bags",
      "Co-branded recap post across community social channels",
    ],
  },
  {
    id: "tier-main",
    name: "Main Title Partner",
    priceMAD: "5,000",
    priceEUR: "500",
    frequency: "Per Event",
    popular: false,
    badge: "Maximum Impact",
    description: "Category exclusivity and headline presence for brands aiming to be the defining champion of that community.",
    deliverables: [
      "All Event Partner benefits included",
      "Exclusive category dominance (no competing sponsors)",
      "Co-host status: 'Powered by [Your Brand]'",
      "5-minute keynote or workshop lightning presentation",
      "Direct aggregate audience demographic insights report",
      "First right of renewal for subsequent community gatherings",
    ],
  },
  {
    id: "tier-inkind",
    name: "In-Kind Partner",
    priceMAD: "Custom",
    priceEUR: "Custom",
    frequency: "Exchange",
    popular: false,
    badge: "Zero-Cash Option",
    description: "Provide the physical essentials: host at your space, brew drinks, bake food, or offer media gear.",
    deliverables: [
      "Venues: direct foot traffic of 50–300 qualified visitors",
      "Food & Drink: immediate product trial & authentic UGC",
      "Equipment / Media: prominent credit in recap footage",
      "Direct verified backlink on Joinzy community ledger",
    ],
  },
];
