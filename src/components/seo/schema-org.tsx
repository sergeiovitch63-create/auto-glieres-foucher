import { TENANT } from "@/tenant";

const DAY_MAP: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export function SchemaOrg() {
  const url = `https://${TENANT.domain}`;

  // Aplatit les horaires (jour, opens, closes) pour chaque créneau
  const openingHoursSpecification: { "@type": "OpeningHoursSpecification"; dayOfWeek: string; opens: string; closes: string }[] = [];
  for (const [day, slots] of Object.entries(TENANT.hours)) {
    for (const slot of slots) {
      const [opens, closes] = slot.split("-");
      openingHoursSpecification.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_MAP[day],
        opens,
        closes,
      });
    }
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: TENANT.name,
    image: `${url}/og.png`,
    "@id": url,
    url,
    telephone: TENANT.phoneIntl,
    email: TENANT.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: TENANT.street,
      addressLocality: TENANT.city,
      postalCode: TENANT.postalCode,
      addressRegion: TENANT.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: TENANT.geo.lat,
      longitude: TENANT.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: TENANT.rating,
      reviewCount: TENANT.ratingCount,
    },
    openingHoursSpecification,
    sameAs: [TENANT.social.google, TENANT.social.instagram, TENANT.social.facebook].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
