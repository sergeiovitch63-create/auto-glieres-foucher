export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  {
    label: "Prestations",
    href: "/prestations",
    children: [
      { label: "Permis B", href: "/prestations/permis-b", description: "Boîte manuelle, formation classique" },
      { label: "Boîte automatique", href: "/prestations/permis-boite-automatique", description: "Plus court, dès 13h" },
      { label: "Permis Moto A2", href: "/prestations/permis-moto-a2", description: "Nouveauté 2026" },
      { label: "Conduite accompagnée", href: "/prestations/conduite-accompagnee", description: "Dès 15 ans, 88% de réussite" },
      { label: "Conduite supervisée", href: "/prestations/conduite-supervisee", description: "Pour repasser en confiance" },
      { label: "Code de la route", href: "/prestations/code-de-la-route", description: "En salle + en ligne" },
      { label: "Permis AM", href: "/prestations/permis-am", description: "Scooter dès 14 ans" },
      { label: "Passerelle auto → manuelle", href: "/prestations/passerelle", description: "7h, sans examen" },
    ],
  },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Code en ligne", href: "/code-en-ligne" },
  { label: "L'auto-école", href: "/lauto-ecole" },
  { label: "Avis", href: "/avis" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
