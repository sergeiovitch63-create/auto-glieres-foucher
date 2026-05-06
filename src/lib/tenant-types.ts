export type Day =
  | "monday" | "tuesday" | "wednesday" | "thursday"
  | "friday" | "saturday" | "sunday";

export type ServiceSlug =
  | "permis-b"
  | "permis-boite-automatique"
  | "permis-moto-a2"
  | "conduite-accompagnee"
  | "conduite-supervisee"
  | "code-de-la-route"
  | "permis-am"
  | "passerelle"
  | "permis-accelere";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  isNew?: boolean;
  year?: number;
  ageMin: number;
  duration: string;
  hourPrice?: number;
  packagePrice?: number;
  hours?: number;
  cpfEligible: boolean;
  oneEuroDay?: boolean;
  acceleratedAvailable?: boolean;
  highlights: string[];
  description: string;
  programme: { title: string; items: string[] }[];
};

export type Package = {
  slug: string;
  label: string;
  price: number;
  hours?: number;
  includes: string[];
  popular?: boolean;
  tag?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  senior?: boolean;
};

export type Review = {
  id: string;
  author: string;
  initials: string;
  date: string;
  rating: number;
  formation: string;
  text: string;
  reply?: string;
};

export type FaqItem = { q: string; a: string; category: string };

export type NearbyCity = { name: string; slug: string; km?: number; intro?: string; highlights?: string[] };

export type Tenant = {
  id: string;
  name: string;
  shortName: string;
  domain: string;
  founded: number;

  address: string;
  street: string;
  city: string;
  postalCode: string;
  region: string;
  country: string;
  phone: string;
  phoneIntl: string;
  email: string;
  emailLegacy?: string;
  geo: { lat: number; lng: number };
  hours: Record<Day, string[]>;

  rating: number;
  ratingCount: number;
  studentsTrained: number;
  successRateFirstAttempt: number;
  positiveEvaluation: number;
  qualiopi: boolean;
  cpfEligible: boolean;
  permisAUnEuro: boolean;

  brand: {
    mode: "light" | "dark";
    accent: string;          // #hex — l'unique couleur à fournir
    accentName?: string;     // "or", "orange-corail", "bleu électrique"
    logo: {
      monogram: string;      // "G", "F"
      wordmark: string;      // "Auto-École", "FOUCHER"
      sub: string;           // "Les Glières", "Auto-École"
      goldEffect?: boolean;  // wordmark en dégradé doré ?
    };
  };

  copy: {
    heroBadge?: string;          // ex "Nouveau 2026", "Depuis 2008"
    heroBadgeSecondary?: string; // ex "Permis Moto A2 disponible"
    heroTitleLine1: string;      // "Le permis,"
    heroTitleLine2: string;      // "version sérieuse" / "signé Foucher"
    heroSubtitle: string;        // long
    statsTitle?: string;
    aboutIntro: string;          // page L'auto-école
    finalCtaBadge?: string;      // "Plus que quelques places"
  };

  services: Service[];
  packages: Package[];
  hourlyRates: { key: string; price: number; label: string }[];

  team: TeamMember[];
  nearbyCities: NearbyCity[];
  reviews: Review[];
  reviewStats: { average: number; total: number; distribution: Record<1 | 2 | 3 | 4 | 5, number> };
  faq: FaqItem[];

  social: { google?: string; instagram?: string; facebook?: string };
};
