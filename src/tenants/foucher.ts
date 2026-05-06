import type { Tenant } from "@/lib/tenant-types";

export const foucher: Tenant = {
  id: "foucher",
  name: "Auto-École Foucher",
  shortName: "Foucher",
  domain: "autoecole-foucher.fr",
  founded: 2008,

  address: "18 rue Léandre Vaillat, 74100 Annemasse",
  street: "18 rue Léandre Vaillat",
  city: "Annemasse",
  postalCode: "74100",
  region: "Haute-Savoie",
  country: "France",
  phone: "04 50 92 60 47",
  phoneIntl: "+33450926047",
  email: "contact@autoecole-foucher.fr",
  geo: { lat: 46.1971, lng: 6.2425 },

  hours: {
    monday: ["14:30-18:30"],
    tuesday: ["09:00-12:00", "14:30-18:30"],
    wednesday: ["09:00-12:00", "14:30-18:30"],
    thursday: ["09:00-12:00", "14:30-18:30"],
    friday: ["09:00-12:00", "14:30-18:30"],
    saturday: ["09:00-12:00"],
    sunday: [],
  },

  rating: 4.1,
  ratingCount: 59,
  studentsTrained: 2400,
  successRateFirstAttempt: 72,
  positiveEvaluation: 94,
  qualiopi: true,
  cpfEligible: true,
  permisAUnEuro: true,

  brand: {
    mode: "dark",
    accent: "#FF6B1A",
    accentName: "orange",
    logo: { monogram: "F", wordmark: "FOUCHER", sub: "Auto-École" },
  },

  copy: {
    heroBadge: "Depuis 2008",
    heroBadgeSecondary: "+ de 2 400 permis obtenus",
    heroTitleLine1: "Le permis,",
    heroTitleLine2: "signé Foucher",
    heroSubtitle:
      "Permis B, conduite accompagnée, supervisée et code en ligne à __CITY__. Depuis __FOUNDED__, une équipe pédagogue qui forme dans la confiance — et __SUCCESS__% de réussite au premier passage.",
    statsTitle: "17 ans d'expérience. Et toujours la même rigueur.",
    aboutIntro:
      "Créée en __FOUNDED__ par Pierre Foucher à __CITY__, l'Auto-École Foucher accompagne les élèves de Haute-Savoie avec une approche pédagogue et patiente. 17 ans plus tard, on continue avec la même rigueur.",
    finalCtaBadge: "🎯 Inscriptions ouvertes",
  },

  services: [
    {
      slug: "permis-b", name: "Permis B",
      short: "La voiture, formation classique sur boîte manuelle.",
      icon: "Car", ageMin: 17, duration: "3 à 6 mois",
      hourPrice: 55, packagePrice: 1390, hours: 20,
      cpfEligible: true, oneEuroDay: true, acceleratedAvailable: true,
      highlights: ["Forfait 20h dès 1 390 €", "Boîte manuelle, voiture récente", "Examens blancs réguliers", "Suivi pédagogique personnalisé"],
      description: "La formation classique de l'Auto-École Foucher : 20 heures de conduite sur boîte manuelle, code en ligne inclus, frais d'examen compris. Une équipe pédagogue qui te suit du dossier au passage.",
      programme: [
        { title: "1. Maîtriser le maniement du véhicule", items: ["Découvrir les commandes, démarrages, arrêts", "Diriger en avant et en arrière", "Régulation de l'allure"] },
        { title: "2. Appréhender la route", items: ["Routes à chaussée séparée, intersections", "Communication entre usagers", "Choisir sa position sur la chaussée"] },
        { title: "3. Circuler dans des situations difficiles", items: ["Circulation en ville, hors agglomération", "Conduite de nuit, sur autoroute", "Conditions météo dégradées"] },
        { title: "4. Pratiquer une conduite autonome, sûre et économique", items: ["Anticiper, partager la route", "Économiser le carburant", "Préparer un trajet, gérer la fatigue"] },
      ],
    },
    {
      slug: "conduite-accompagnee", name: "Conduite accompagnée (AAC)",
      short: "Notre spécialité. Démarre à 15 ans, passe le permis à 17.",
      icon: "Users", ageMin: 15, duration: "1 à 3 ans selon âge",
      hourPrice: 55, packagePrice: 1490, hours: 20,
      cpfEligible: true, oneEuroDay: true,
      highlights: ["Notre formation phare", "Démarre dès 15 ans", "Permis dès 17 ans", "Période probatoire réduite"],
      description: "L'AAC est la formation la plus complète et la plus sûre. Tu démarres ta formation dès 15 ans, tu passes le code, puis tu roules avec un accompagnateur pendant minimum 1 an et 3 000 km. C'est notre spécialité depuis 2008.",
      programme: [
        { title: "1. Formation initiale (20h)", items: ["Apprentissage avec moniteur", "4 compétences REMC", "Évaluation finale"] },
        { title: "2. Rendez-vous préalable (2h)", items: ["Bilan avec ton accompagnateur", "Mise en situation", "Documents officiels"] },
        { title: "3. Phase accompagnée", items: ["1 an minimum, 3 000 km", "Trajets variés", "Carnet d'apprentissage"] },
        { title: "4. RDV pédagogiques (2x2h)", items: ["Bilan à mi-parcours", "Bilan final avant examen"] },
      ],
    },
    {
      slug: "conduite-supervisee", name: "Conduite supervisée",
      short: "Roule avec un proche pour gagner en confiance avant l'examen.",
      icon: "ShieldCheck", ageMin: 18, duration: "Variable",
      hourPrice: 55, cpfEligible: false,
      highlights: ["Après un échec ou par choix", "Roule avec un accompagnateur", "Repasse l'examen en confiance", "1 000 km minimum"],
      description: "La conduite supervisée est parfaite si tu veux te muscler avant l'examen, ou si tu repasses après un premier échec. Tu roules avec un accompagnateur entre l'évaluation et l'examen, sans pression de timing.",
      programme: [
        { title: "1. Évaluation préalable", items: ["Bilan compétences", "Validation par le moniteur"] },
        { title: "2. Phase supervisée", items: ["1 000 km minimum", "Trajets variés", "Tu choisis quand passer l'examen"] },
        { title: "3. Examen pratique", items: ["Préparation finale", "Examen en conditions réelles"] },
      ],
    },
    {
      slug: "code-de-la-route", name: "Code de la route",
      short: "Cours en salle + entraînement en ligne illimité.",
      icon: "BookOpen", ageMin: 15, duration: "1 à 3 mois",
      packagePrice: 250, cpfEligible: true,
      highlights: ["Forfait 6 mois à 250 €", "Cours en salle + plateforme web", "+ de 1 000 questions officielles", "Examen sur place"],
      description: "Le code, c'est la base. Tu as accès à notre plateforme en ligne (web + mobile), des cours en salle, et on t'inscrit à l'examen quand tu es prêt. Pas avant.",
      programme: [
        { title: "Les 10 thèmes officiels", items: ["Circulation routière", "Conducteur", "Route", "Autres usagers", "Notions diverses", "Premiers secours", "Mécanique", "Sécurité passagers", "Environnement", "Réglementation"] },
        { title: "Méthode", items: ["Quiz quotidien recommandé", "Examens blancs hebdomadaires", "Cours en salle 2x/semaine"] },
      ],
    },
    {
      slug: "permis-accelere", name: "Permis B accéléré",
      short: "Le permis en 4 semaines. Pour ceux qui sont pressés.",
      icon: "Zap", ageMin: 18, duration: "4 semaines",
      hourPrice: 75, packagePrice: 1890, hours: 20,
      cpfEligible: true, acceleratedAvailable: true,
      highlights: ["Permis en 4 semaines", "Code intensif 1 mois", "20h de conduite condensées", "Examens prioritaires"],
      description: "Tu as besoin du permis vite ? On condense le programme sur 4 semaines : code intensif, conduite quotidienne, examens prioritaires. Places limitées chaque mois.",
      programme: [
        { title: "Semaine 1-2 : Code intensif", items: ["Cours quotidiens en salle", "Examens blancs chronométrés", "Passage de l'examen théorique"] },
        { title: "Semaine 3-4 : Conduite condensée", items: ["20h de conduite réparties", "Examens blancs sur parcours", "Passage de l'examen pratique"] },
      ],
    },
  ],

  packages: [
    { slug: "permisB20h", label: "Permis B — Forfait 20h", price: 1390, hours: 20,
      includes: ["Code en ligne 6 mois", "20h de conduite", "Frais de présentation à l'examen", "Livret d'apprentissage"], popular: true },
    { slug: "permisB30h", label: "Permis B — Forfait 30h", price: 2050, hours: 30,
      includes: ["Code en ligne 12 mois", "30h de conduite", "2 examens blancs", "Frais d'inscription préfecture"] },
    { slug: "permisAAC", label: "Conduite accompagnée — Forfait", price: 1490, hours: 20,
      includes: ["Code en ligne 12 mois", "20h de conduite", "RDV préalable accompagnateur", "2 RDV pédagogiques"], tag: "Spécialité maison" },
    { slug: "permisBAccelere", label: "Permis B accéléré (4 sem.)", price: 1890, hours: 20,
      includes: ["Code intensif 1 mois", "20h de conduite en 4 semaines", "Examens prioritaires", "Suivi quotidien"], tag: "Express" },
    { slug: "code", label: "Code de la route — 6 mois", price: 250,
      includes: ["Accès web & mobile illimité", "Cours en salle 2x/semaine", "Inscription à l'examen"] },
    { slug: "supervisee", label: "Conduite supervisée", price: 690, hours: 10,
      includes: ["Évaluation préalable", "10h de conduite", "RDV accompagnateur"] },
  ],

  hourlyRates: [
    { key: "standard", price: 55, label: "Heure de conduite — boîte manuelle" },
    { key: "accelerated", price: 75, label: "Heure de conduite — formation accélérée" },
    { key: "additional", price: 55, label: "Heure supplémentaire" },
  ],

  team: [
    { name: "Pierre Foucher", role: "Fondateur & moniteur", bio: "À la tête de l'auto-école depuis 2008. Plus de 2 400 élèves formés.", senior: true },
    { name: "Nadine", role: "Accueil & secrétariat", bio: "Pilote des dossiers et de l'accueil élèves." },
    { name: "Karim", role: "Moniteur permis B", bio: "Spécialiste de l'AAC et de la conduite supervisée." },
    { name: "Léa", role: "Monitrice permis B", bio: "Pédagogue, mise en confiance, c'est sa marque de fabrique." },
  ],

  nearbyCities: [
    { name: "Annemasse", slug: "annemasse", km: 1, intro: "Au cœur d'Annemasse, l'Auto-École Foucher forme les Annemassiens depuis 2008.", highlights: ["Locaux au cœur d'Annemasse — 18 rue Léandre Vaillat", "17 ans d'expérience locale", "Spécialiste de la conduite accompagnée", "Cours de code en salle"] },
    { name: "Ambilly", slug: "ambilly", km: 5, intro: "À 5 minutes d'Ambilly, l'Auto-École Foucher accueille de nombreux élèves Ambillaires.", highlights: ["5 min en voiture depuis Ambilly", "Bus direct vers nos locaux", "Spécialiste AAC", "Examens dans le secteur Annemasse"] },
    { name: "Gaillard", slug: "gaillard", km: 8, intro: "L'Auto-École Foucher est à 8 minutes de Gaillard.", highlights: ["8 min en voiture depuis Gaillard", "Examens dans le secteur Annemasse", "Permis B accéléré disponible", "Code en ligne accessible 24/7"] },
    { name: "Ville-la-Grand", slug: "ville-la-grand", km: 6, intro: "À 6 minutes de Ville-la-Grand.", highlights: ["6 min en voiture", "AAC, B, accéléré", "Conduite supervisée", "Forfait code 6 mois à 250€"] },
    { name: "Vétraz-Monthoux", slug: "vetraz-monthoux", km: 10, intro: "L'Auto-École Foucher est à 10 minutes de Vétraz-Monthoux.", highlights: ["10 min en voiture", "Approche pédagogique personnalisée", "Examens connus dans le secteur", "Financement CPF & permis 1€/jour"] },
  ],

  reviews: [
    { id: "r1", author: "Adea O.", initials: "AO", date: "2026-01-12", rating: 5, formation: "Permis B", text: "Très bonne auto-école ! J'ai été très bien accompagnée tout au long de ma formation, avec une équipe à l'écoute et des moniteurs pédagogues qui savent mettre en confiance et donner de bons conseils.", reply: "Chère Adea, un immense merci pour ce superbe retour ⭐⭐⭐⭐⭐" },
    { id: "r2", author: "Dina F.", initials: "DF", date: "2025-12-20", rating: 5, formation: "Conduite accompagnée", text: "LA MEILLEURE AUTO ÉCOLE ! Les moniteurs sont extrêmement patients, pédagogues et d'une grande gentillesse. Ils prennent le temps d'expliquer, de rassurer et de nous faire progresser.", reply: "Chère Dina, un immense merci pour votre superbe message !" },
    { id: "r3", author: "Rabia B.", initials: "RB", date: "2025-11-15", rating: 5, formation: "Permis B", text: "Je recommande vivement l'Auto-École Foucher ! Toute l'équipe a été au top et m'a accompagnée tout au long de ma formation avec beaucoup de bienveillance et de professionnalisme. Grâce à eux, j'ai obtenu mon permis rapidement !", reply: "Chère Rabia, un immense merci pour votre superbe message !" },
    { id: "r4", author: "Mathieu D.", initials: "MD", date: "2025-10-22", rating: 5, formation: "Conduite accompagnée", text: "AAC démarrée à 15 ans, permis obtenu du premier coup à 17 ans. Karim est un excellent moniteur, très patient. Toute l'équipe est top." },
    { id: "r5", author: "Sofia M.", initials: "SM", date: "2025-09-08", rating: 4, formation: "Permis B", text: "Bonne auto-école, équipe sympa. Quelques délais d'attente pour les leçons en haute saison mais sinon rien à redire." },
    { id: "r6", author: "Jean L.", initials: "JL", date: "2025-08-30", rating: 5, formation: "Permis B accéléré", text: "Permis en 4 semaines, mission accomplie ! L'équipe gère vraiment bien le rythme intensif. Merci à toute l'auto-école." },
    { id: "r7", author: "Emma R.", initials: "ER", date: "2025-08-12", rating: 5, formation: "Conduite supervisée", text: "Repassée après un premier échec ailleurs. La conduite supervisée chez Foucher m'a remis en confiance. Permis obtenu !" },
    { id: "r8", author: "Lucas T.", initials: "LT", date: "2025-07-25", rating: 5, formation: "Code de la route", text: "Plateforme code claire, cours en salle utiles. J'ai eu 37/40 du premier coup." },
    { id: "r9", author: "Manon V.", initials: "MV", date: "2025-06-10", rating: 4, formation: "Permis B", text: "Ambiance familiale, pas de modèle usine. On sent que les moniteurs aiment leur métier." },
    { id: "r10", author: "Yacine B.", initials: "YB", date: "2025-05-18", rating: 5, formation: "Conduite accompagnée", text: "Fait l'AAC ici, recommandé par mon frère qui l'avait fait chez eux il y a 5 ans. Toujours autant de qualité. Pierre est un vrai pro." },
  ],

  reviewStats: { average: 4.1, total: 59, distribution: { 5: 42, 4: 9, 3: 4, 2: 2, 1: 2 } },

  faq: [
    { category: "Inscription", q: "À partir de quel âge je peux m'inscrire ?", a: "Dès 15 ans pour la conduite accompagnée (AAC), 17 ans pour le permis B classique, 18 ans pour passer l'examen de conduite." },
    { category: "Inscription", q: "Quels documents je dois fournir ?", a: "Pièce d'identité, 2 photos e-photo agréées, justificatif de domicile de moins de 3 mois, ASSR2 (si né après 1988), attestation de recensement (16-25 ans)." },
    { category: "Inscription", q: "Combien de temps avant de pouvoir commencer ?", a: "Sous 48h après ton inscription. On te crée ton compte ANTS, on lance le dossier, et tu commences le code et les heures dans la foulée." },
    { category: "Tarifs", q: "Combien coûte le permis B chez vous ?", a: "Le forfait 20h démarre à 1 390 € (code + conduite + présentation à l'examen). On a aussi des formules 30h et accélérées. Aucun frais caché." },
    { category: "Tarifs", q: "Le permis est-il finançable avec le CPF ?", a: "Oui, on est référencé Mon Compte Formation. Permis B, AAC, accéléré et code sont éligibles CPF." },
    { category: "Tarifs", q: "Vous proposez le permis à 1€ par jour ?", a: "Oui, pour les 15-25 ans. C'est un prêt à taux zéro de l'État qui te permet d'étaler le paiement." },
    { category: "AAC", q: "C'est quoi exactement la conduite accompagnée ?", a: "C'est notre spécialité. Tu démarres ta formation dès 15 ans, tu passes le code, puis tu roules avec un accompagnateur pendant minimum 1 an et 3 000 km. À 17 ans tu peux passer le permis." },
    { category: "AAC", q: "Qui peut être mon accompagnateur ?", a: "Toute personne titulaire du permis B depuis au moins 5 ans sans interruption, et qui a obtenu l'accord de l'assurance." },
    { category: "AAC", q: "Combien de km minimum à faire en accompagnée ?", a: "3 000 km minimum sur 1 an. On conseille plutôt 5 000-7 000 km pour vraiment tout voir." },
    { category: "Conduite", q: "Combien d'heures de conduite faut-il en moyenne ?", a: "La moyenne nationale est à 35h. Chez nous, le forfait 20h convient à la majorité." },
    { category: "Conduite", q: "Vous faites la conduite supervisée ?", a: "Oui, c'est parfait si tu as raté un premier examen ou si tu veux t'entraîner avec un proche. 1 000 km minimum, sans pression de timing." },
    { category: "Examen", q: "Quel est votre taux de réussite ?", a: "72% de réussite au premier passage sur le permis B (vs 60% en moyenne nationale). 88% pour les conduites accompagnées." },
    { category: "Examen", q: "Si j'échoue, je dois tout repayer ?", a: "Non. Tu paies juste la représentation à l'examen (80 €) et éventuellement quelques heures complémentaires si nécessaire." },
    { category: "Pratique", q: "Vous êtes ouverts le samedi ?", a: "Oui, le samedi matin de 9h à 12h." },
    { category: "Pratique", q: "Comment je récupère mon permis ?", a: "Le permis est expédié à ton domicile par lettre recommandée environ 3 semaines après l'examen." },
    { category: "Handicap", q: "Vous accueillez les personnes en situation de handicap ?", a: "Oui, on a un référent handicap et une procédure dédiée." },
  ],

  social: {
    google: "https://maps.google.com/?cid=foucher",
    instagram: "https://instagram.com/autoecole.foucher",
    facebook: "https://facebook.com/autoecolefoucher",
  },
};
