import type { Tenant } from "@/lib/tenant-types";

export const leman: Tenant = {
  id: "leman",
  name: "Annemasse Moto École & Léman Bateau École",
  shortName: "Léman Moto-Bateau",
  domain: "leman-bateau-ecole.com",
  founded: 2010,

  address: "9 rue Marc Courriard, 74100 Annemasse",
  street: "9 rue Marc Courriard",
  city: "Annemasse",
  postalCode: "74100",
  region: "Haute-Savoie",
  country: "France",
  phone: "04 50 43 03 03",
  phoneIntl: "+33450430303",
  email: "leman.bateau.ecole@gmail.com",
  geo: { lat: 46.1936, lng: 6.234 },

  hours: {
    monday: ["14:00-18:00"],
    tuesday: [],
    wednesday: [],
    thursday: ["14:00-18:00"],
    friday: [],
    saturday: ["10:00-12:00"],
    sunday: [],
  },

  rating: 4.9,
  ratingCount: 67,
  studentsTrained: 1800,
  successRateFirstAttempt: 92,
  positiveEvaluation: 99,
  qualiopi: true,
  cpfEligible: true,
  permisAUnEuro: false,

  brand: {
    mode: "light",
    accent: "#0E3A6B",
    accentName: "bleu marine",
    logo: { monogram: "L", wordmark: "Léman", sub: "Moto · Bateau" },
  },

  copy: {
    heroBadge: "4,9/5 sur Google",
    heroBadgeSecondary: "Moto + bateau, double spécialité",
    heroTitleLine1: "La moto, le bateau,",
    heroTitleLine2: "même passion",
    heroSubtitle:
      "Permis Moto A2 et permis bateau (côtier, fluvial, international) à __CITY__ et St Julien-en-Genevois. Une équipe passionnée menée par Olivier, __SUCCESS__% de réussite et 4,9/5 sur Google.",
    statsTitle: "Une école, deux passions, une seule exigence.",
    aboutIntro:
      "Depuis __FOUNDED__, Olivier et son équipe forment les motards et les plaisanciers de Haute-Savoie. Deux écoles sous un même toit, à __CITY__ et St Julien-en-Genevois, avec la même passion : transmettre.",
    finalCtaBadge: "🎯 Inscriptions ouvertes — moto & bateau",
  },

  services: [
    {
      slug: "permis-moto-a2",
      name: "Permis Moto A2",
      short: "La spécialité d'Olivier. Manuelle ou automatique.",
      icon: "Bike",
      ageMin: 18,
      duration: "1 à 3 mois",
      hourPrice: 65,
      packagePrice: 1290,
      hours: 20,
      cpfEligible: true,
      highlights: [
        "Manuelle ET automatique disponibles",
        "Olivier, moniteur passionné",
        "Plateau + circulation",
        "Équipement examen fourni",
      ],
      description:
        "Le permis Moto A2 est notre coeur de métier. Avec Olivier, formé sur les deux options (manuelle et automatique), tu te formes sur des machines récentes et tu passes le permis en confiance. Réussite au premier passage : 92%.",
      programme: [
        { title: "1. Maîtrise de la moto à allure réduite", items: ["Maniabilité plateau", "Évitement, freinage", "Démarrage en côte"] },
        { title: "2. Plateau allure normale", items: ["Slalom, lent et rapide", "Freinage d'urgence", "Évitement obstacle"] },
        { title: "3. Circulation", items: ["Trajectoires moto", "Gestion intersections", "Trafic dense"] },
        { title: "4. Autonomie", items: ["Trajet long", "Météo dégradée", "Conduite défensive"] },
      ],
    },
    {
      slug: "permis-cotier",
      name: "Permis Côtier",
      short: "Pour piloter un bateau à moteur en mer jusqu'à 6 milles d'un abri.",
      icon: "Anchor",
      ageMin: 16,
      duration: "1 à 2 mois",
      packagePrice: 390,
      cpfEligible: false,
      highlights: [
        "Théorie + pratique",
        "Cours en salle à Annemasse & St Julien",
        "Pratique sur le Lac Léman",
        "Examen théorique en centre agréé",
      ],
      description:
        "Le permis côtier permet de piloter un bateau à moteur de plus de 6 CV en mer, jusqu'à 6 milles d'un abri. La formation se fait en deux temps : théorie en salle puis pratique de pilotage sur notre bateau école.",
      programme: [
        { title: "Théorie (5h minimum)", items: ["Règles de barre et de route", "Balisage", "Météorologie marine", "Sécurité à bord"] },
        { title: "Pratique (3h30 minimum)", items: ["Manoeuvres de port", "Navigation au cap", "Homme à la mer", "Mouillage"] },
      ],
    },
    {
      slug: "permis-fluvial",
      name: "Permis Fluvial",
      short: "Pour naviguer sur les fleuves, lacs et rivières.",
      icon: "Ship",
      ageMin: 16,
      duration: "1 à 2 mois",
      packagePrice: 290,
      cpfEligible: false,
      highlights: [
        "Lacs, fleuves, rivières",
        "Théorie + pratique",
        "Idéal pour le Léman",
        "Cours en groupe ou individuels",
      ],
      description:
        "Le permis fluvial autorise la navigation sur tous les plans d'eau intérieurs : lacs, fleuves, rivières, canaux. Indispensable pour profiter pleinement du Léman ou du Rhône.",
      programme: [
        { title: "Théorie", items: ["Signalisation fluviale", "Règles de navigation", "Sécurité"] },
        { title: "Pratique", items: ["Manoeuvres", "Accostage", "Navigation par tous temps"] },
      ],
    },
    {
      slug: "permis-cotier-international",
      name: "Permis Côtier International",
      short: "Spécial résidents suisses, valable à l'international.",
      icon: "Compass",
      ageMin: 16,
      duration: "1 à 3 mois",
      packagePrice: 590,
      cpfEligible: false,
      highlights: [
        "Réservé résidents suisses",
        "Valable à l'international",
        "Reconnaissance large",
        "Procédure spécifique gérée par nos soins",
      ],
      description:
        "Le permis côtier international est délivré spécifiquement aux résidents suisses et reconnu dans la plupart des pays côtiers. Nous nous occupons de toute la procédure administrative.",
      programme: [
        { title: "Théorie", items: ["Programme côtier classique", "Spécificités internationales"] },
        { title: "Pratique", items: ["Identique au permis côtier français"] },
        { title: "Démarches", items: ["Dossier ICC (International Certificate of Competence)"] },
      ],
    },
    {
      slug: "perfectionnement",
      name: "Perfectionnement",
      short: "Stages de perfectionnement moto ou bateau pour confirmés.",
      icon: "Award",
      ageMin: 18,
      duration: "1 jour à 1 semaine",
      hourPrice: 75,
      cpfEligible: false,
      highlights: [
        "Pour titulaires du permis",
        "Moto : pilotage avancé",
        "Bateau : navigation hauturière",
        "Coaching personnalisé",
      ],
      description:
        "Tu as ton permis depuis longtemps et tu veux te remettre à niveau, ou pousser plus loin ? Nos stages de perfectionnement sont sur-mesure : conduite défensive, pilotage sportif, navigation longue distance.",
      programme: [
        { title: "Évaluation initiale", items: ["Bilan compétences", "Définition objectifs"] },
        { title: "Programme sur-mesure", items: ["Sessions techniques", "Mise en situation", "Débriefing"] },
      ],
    },
  ],

  packages: [
    { slug: "permisMotoA2", label: "Permis Moto A2 — Forfait", price: 1290, hours: 20,
      includes: ["Code moto", "20h de plateau & circulation", "Équipement examen fourni", "Suivi pédagogique"], popular: true, tag: "Notre spécialité" },
    { slug: "permisCotier", label: "Permis Côtier — Forfait complet", price: 390,
      includes: ["5h théorie en salle", "3h30 de pratique", "Inscription examen", "Pavillon offert"] },
    { slug: "permisFluvial", label: "Permis Fluvial — Forfait", price: 290,
      includes: ["Théorie", "Pratique sur le Léman", "Inscription examen"] },
    { slug: "permisCotierInternational", label: "Permis Côtier International (résidents suisses)", price: 590,
      includes: ["Formation côtier complète", "Démarches ICC", "Reconnaissance internationale"] },
    { slug: "perfectionnement", label: "Stage Perfectionnement", price: 290,
      includes: ["Évaluation initiale", "Sessions techniques sur-mesure", "Débriefing personnalisé"] },
    { slug: "permisCotierFluvial", label: "Pack Côtier + Fluvial", price: 590,
      includes: ["Les deux permis bateau", "Théorie commune", "Pratique sur les deux", "Économie de 90 €"], tag: "Économie" },
  ],

  hourlyRates: [
    { key: "moto", price: 65, label: "Heure de moto A2" },
    { key: "bateau", price: 90, label: "Heure de bateau (pratique)" },
    { key: "perfectionnement", price: 75, label: "Heure de perfectionnement" },
  ],

  team: [
    { name: "Olivier", role: "Moniteur moto & bateau, fondateur", bio: "Passionné depuis toujours par les deux roues et la navigation. Cité dans la quasi-totalité des avis Google. C'est lui que tu vas rencontrer.", senior: true },
    { name: "Équipe administrative", role: "Accueil & inscriptions", bio: "Pour t'accueillir dans nos locaux d'Annemasse et de St Julien-en-Genevois.", senior: false },
  ],

  nearbyCities: [
    { name: "Annemasse", slug: "annemasse", km: 1, intro: "Au cœur d'Annemasse, 9 rue Marc Courriard. Permis moto A2 et permis bateau (côtier, fluvial). Antenne complémentaire à St Julien-en-Genevois (25 Grande Rue).", highlights: ["Locaux à Annemasse — 9 rue Marc Courriard", "4,9/5 sur Google, 67 avis", "Permis moto A2 (manuelle + auto)", "Permis Côtier, Fluvial, International", "Olivier, moniteur passionné", "Pratique bateau sur le Léman"] },
    { name: "Ambilly", slug: "ambilly", km: 4, intro: "À 5 minutes d'Ambilly, notre école moto + bateau t'accueille pour le permis A2 et les permis nautiques.", highlights: ["5 min d'Ambilly", "Permis Moto A2 (manuelle ou auto)", "Permis bateau", "Olivier, moniteur passionné"] },
    { name: "Gaillard", slug: "gaillard", km: 6, intro: "À 6 minutes de Gaillard, idéal pour les résidents franco-suisses.", highlights: ["6 min de Gaillard", "Permis Côtier International pour résidents suisses", "Moto A2 manuelle + auto", "Antenne St Julien à proximité"] },
    { name: "Ville-la-Grand", slug: "ville-la-grand", km: 5, intro: "À 5 minutes de Ville-la-Grand, formation moto et bateau au cœur de l'agglomération.", highlights: ["5 min de Ville-la-Grand", "Cours du lundi et samedi à Annemasse", "Pratique bateau sur le Léman", "92% de réussite"] },
    { name: "Vétraz-Monthoux", slug: "vetraz-monthoux", km: 8, intro: "À 8 minutes de Vétraz-Monthoux, viens passer ton permis moto ou bateau avec Olivier.", highlights: ["8 min de Vétraz-Monthoux", "Permis Moto + bateau", "Pratique sur le Léman", "Approche pédagogique sur-mesure"] },
  ],

  reviews: [
    { id: "r1", author: "Lucas N.", initials: "LN", date: "2025-12-15", rating: 5, formation: "Permis Moto A2", text: "Superbe expérience ! Dès mon inscription j'ai eu mon planning de tous les cours de plateau. Olivier est top, très pédagogue. Je recommande à 100%." },
    { id: "r2", author: "Amélie C.", initials: "AC", date: "2026-01-20", rating: 5, formation: "Permis Moto A2", text: "Je recommande vivement cette moto-école. Olivier est arrangeant, super sympa et pédagogue. J'ai passé mon permis moto A2 automatique et j'ai tout réussi du premier coup. Alors merci." },
    { id: "r3", author: "Antoine C.", initials: "AC", date: "2026-02-12", rating: 5, formation: "Permis Moto A2", text: "Permis A2 réalisé avec Olivier, un super moniteur passionné et pédagogue qui vous fera progresser et rouler en toute sécurité. Je recommande ! Très bonne moto-école sur Annemasse." },
    { id: "r4", author: "Sophie B.", initials: "SB", date: "2025-11-18", rating: 5, formation: "Permis Côtier", text: "Permis côtier passé du premier coup. Théorie claire, pratique excellente sur le Léman. Olivier explique simplement. Top !" },
    { id: "r5", author: "Marc D.", initials: "MD", date: "2025-10-25", rating: 5, formation: "Permis Fluvial", text: "Permis fluvial obtenu sans difficulté. L'équipe est super, ambiance familiale. Pratique sur un beau bateau bien entretenu." },
    { id: "r6", author: "Julien T.", initials: "JT", date: "2025-09-30", rating: 5, formation: "Permis Moto A2", text: "Olivier m'a redonné confiance après un échec ailleurs. Pédagogue, patient. Permis obtenu, je vais pouvoir profiter de la moto !" },
    { id: "r7", author: "Caroline R.", initials: "CR", date: "2025-09-12", rating: 5, formation: "Permis Côtier International", text: "Démarches ICC bien gérées par l'équipe. Pratique au top, théorie claire. Maintenant je peux naviguer en Méditerranée et en Adriatique." },
    { id: "r8", author: "Florian K.", initials: "FK", date: "2025-08-22", rating: 4, formation: "Permis Moto A2", text: "Très bonne école, Olivier est top. Petit bémol sur les délais en haute saison mais c'est compréhensible vu la demande." },
    { id: "r9", author: "Mélanie P.", initials: "MP", date: "2025-07-15", rating: 5, formation: "Perfectionnement", text: "Stage de perfectionnement moto avec Olivier après 10 ans sans rouler. Remise en confiance parfaite. Je conseille à toute personne qui hésite à reprendre." },
    { id: "r10", author: "Bertrand L.", initials: "BL", date: "2025-06-08", rating: 5, formation: "Permis Côtier", text: "Cours à St Julien-en-Genevois, parfait pour moi qui habite côté suisse. Pratique impeccable sur le Léman. Je recommande." },
  ],

  reviewStats: { average: 4.9, total: 67, distribution: { 5: 60, 4: 5, 3: 1, 2: 0, 1: 1 } },

  faq: [
    { category: "Inscription", q: "Comment je m'inscris ?", a: "Tu peux passer directement à l'école (Annemasse ou St Julien) ou demander un devis en ligne. On te recontacte sous 24h pour caler ton dossier." },
    { category: "Inscription", q: "À partir de quel âge je peux m'inscrire ?", a: "16 ans pour les permis bateau (côtier, fluvial). 18 ans pour le permis moto A2." },
    { category: "Inscription", q: "Vous avez deux adresses, je vais où ?", a: "On a une école à Annemasse (9 rue Marc Courriard) et une antenne à St Julien-en-Genevois (25 Grande Rue). Tu choisis selon où tu habites. La théorie peut se faire dans l'une, la pratique selon planning." },
    { category: "Tarifs", q: "Combien coûte le permis Moto A2 ?", a: "Forfait à 1 290 € (code + 20h plateau & circulation + équipement examen). Éligible CPF." },
    { category: "Tarifs", q: "Combien coûte le permis bateau ?", a: "Permis Côtier : 390 €. Permis Fluvial : 290 €. Pack Côtier + Fluvial : 590 € (tu économises 90 €). Permis Côtier International (résidents suisses) : 590 €." },
    { category: "Moto", q: "Manuelle ou automatique ?", a: "On forme aux deux. La moto automatique est plus accessible (pas d'embrayage à gérer), la manuelle plus polyvalente. Olivier t'oriente selon ton profil." },
    { category: "Moto", q: "Je n'ai jamais conduit de moto, c'est possible ?", a: "Bien sûr. Olivier accueille des débutants complets toute l'année. Le programme commence par les bases, à allure très réduite." },
    { category: "Bateau", q: "Où se passe la pratique bateau ?", a: "Sur le Lac Léman, depuis nos pontons. Pratique en conditions réelles." },
    { category: "Bateau", q: "Je peux conduire quoi avec le permis côtier ?", a: "Tout bateau à moteur de plus de 6 CV en mer, jusqu'à 6 milles d'un abri. Au-delà, il faut le permis hauturier." },
    { category: "Bateau", q: "Je suis suisse, je peux passer le permis chez vous ?", a: "Oui. On propose même un Permis Côtier International (ICC) spécifique pour les résidents suisses, reconnu dans la plupart des pays côtiers." },
    { category: "Bateau", q: "Je veux naviguer sur le Léman, quel permis ?", a: "Permis Fluvial obligatoire. Si tu veux aussi naviguer en mer, prends le pack Côtier + Fluvial à 590 €." },
    { category: "Examen", q: "Quel est votre taux de réussite ?", a: "92% au premier passage sur le permis Moto A2 et plus de 95% sur les permis bateau. Note Google : 4,9/5 sur 67 avis." },
    { category: "Pratique", q: "Vos horaires ?", a: "Lundi 14h-18h à Annemasse. Jeudi 14h-18h à St Julien-en-Genevois. Samedi matin 10h-12h Annemasse + 13h-15h St Julien." },
  ],

  social: {
    google: "https://maps.google.com/?cid=leman",
    instagram: "https://instagram.com/leman.bateau.ecole",
    facebook: "https://facebook.com/lemanbateauecole",
  },
};
