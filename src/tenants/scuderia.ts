import type { Tenant } from "@/lib/tenant-types";

export const scuderia: Tenant = {
  id: "scuderia",
  name: "École de Conduite Scudéria",
  shortName: "Scudéria",
  domain: "ecole-conduite-scuderia.fr",
  founded: 2010,

  address: "43 rue des Tournelles, 74100 Ville-la-Grand",
  street: "43 rue des Tournelles",
  city: "Ville-la-Grand",
  postalCode: "74100",
  region: "Haute-Savoie",
  country: "France",
  phone: "04 50 38 04 78",
  phoneIntl: "+33450380478",
  email: "contact@ecole-conduite-scuderia.fr",
  geo: { lat: 46.198, lng: 6.255 },

  hours: {
    monday: ["14:00-18:00"],
    tuesday: ["14:00-18:00"],
    wednesday: [],
    thursday: ["14:00-18:00"],
    friday: ["14:00-18:00"],
    saturday: ["09:00-12:00"],
    sunday: [],
  },

  rating: 4.0,
  ratingCount: 33,
  studentsTrained: 1100,
  successRateFirstAttempt: 70,
  positiveEvaluation: 92,
  qualiopi: true,
  cpfEligible: true,
  permisAUnEuro: true,

  brand: {
    mode: "dark",
    accent: "#EC4899",
    accentName: "rose vif",
    logo: { monogram: "S", wordmark: "SCUDÉRIA", sub: "École de Conduite" },
  },

  copy: {
    heroBadge: "Voiture + Moto",
    heroBadgeSecondary: "À Ville-la-Grand depuis 2010",
    heroTitleLine1: "Le permis,",
    heroTitleLine2: "version Scudéria",
    heroSubtitle:
      "Permis B, conduite accompagnée, supervisée, permis Moto A2 et code en ligne à __CITY__. Sébastien, Thomas et l'équipe forment depuis __FOUNDED__ avec patience et bienveillance — __SUCCESS__% de réussite au premier passage.",
    statsTitle: "Une auto-école nerveuse et carrée. Comme un V8.",
    aboutIntro:
      "Créée en __FOUNDED__ à __CITY__, Scudéria est née d'une passion pour la conduite et la transmission. Sébastien, Thomas et leur équipe forment voitures ET motos avec la même rigueur et la même bienveillance.",
    finalCtaBadge: "🏁 Inscriptions ouvertes",
  },

  services: [
    {
      slug: "permis-b", name: "Permis B",
      short: "Le permis voiture, par des moniteurs patients et bienveillants.",
      icon: "Car", ageMin: 17, duration: "3 à 6 mois",
      hourPrice: 55, packagePrice: 1390, hours: 20,
      cpfEligible: true, oneEuroDay: true, acceleratedAvailable: true,
      highlights: ["Forfait 20h dès 1 390 €", "Sébastien & Thomas, l'équipe complice", "Examens blancs réguliers", "Suivi pédagogique sur-mesure"],
      description: "Le permis B classique, sur boîte manuelle. 20 heures de conduite avec Sébastien ou Thomas, deux moniteurs patients et bienveillants — c'est ce que disent nos élèves dans les avis Google.",
      programme: [
        { title: "1. Maîtriser le maniement du véhicule", items: ["Découvrir les commandes, démarrages, arrêts", "Diriger en avant et en arrière", "Régulation de l'allure"] },
        { title: "2. Appréhender la route", items: ["Routes à chaussée séparée, intersections", "Communication entre usagers", "Choisir sa position sur la chaussée"] },
        { title: "3. Circuler dans des situations difficiles", items: ["Circulation en ville, hors agglomération", "Conduite de nuit, sur autoroute", "Conditions météo dégradées"] },
        { title: "4. Pratiquer une conduite autonome, sûre et économique", items: ["Anticiper, partager la route", "Économiser le carburant", "Préparer un trajet, gérer la fatigue"] },
      ],
    },
    {
      slug: "permis-moto-a2", name: "Permis Moto A2",
      short: "La passion de la moto, transmise avec rigueur.",
      icon: "Bike", ageMin: 18, duration: "1 à 3 mois",
      hourPrice: 70, packagePrice: 1290, hours: 20,
      cpfEligible: true,
      highlights: ["20h de plateau & circulation", "Moto récente bridée 35 kW", "Équipement examen fourni", "Préparation A après 2 ans"],
      description: "Le permis Moto A2 — nous formons aux deux roues depuis 2010. Notre équipe maîtrise plateau et circulation, et te prépare à passer en A complète après 2 ans.",
      programme: [
        { title: "1. Maîtrise de la moto à allure réduite", items: ["Maniabilité plateau", "Évitement, freinage", "Démarrage en côte"] },
        { title: "2. Plateau allure normale", items: ["Slalom, lent et rapide", "Freinage d'urgence", "Évitement obstacle"] },
        { title: "3. Circulation", items: ["Trajectoires moto", "Gestion intersections", "Trafic dense"] },
        { title: "4. Autonomie", items: ["Trajet long", "Météo dégradée", "Conduite défensive"] },
      ],
    },
    {
      slug: "conduite-accompagnee", name: "Conduite accompagnée (AAC)",
      short: "Dès 15 ans. La meilleure stat de réussite.",
      icon: "Users", ageMin: 15, duration: "1 à 3 ans",
      hourPrice: 55, packagePrice: 1490, hours: 20,
      cpfEligible: true, oneEuroDay: true,
      highlights: ["Démarre dès 15 ans", "Permis dès 17 ans", "Réussite 1er passage : 88%", "Période probatoire réduite"],
      description: "La conduite accompagnée chez Scudéria, c'est l'option intelligente : 20h en moniteur + au moins 1 an et 3 000 km avec ton accompagnateur. À l'arrivée, le permis dès 17 ans avec une réussite à 88%.",
      programme: [
        { title: "1. Formation initiale (20h)", items: ["Apprentissage avec moniteur", "4 compétences REMC", "Évaluation finale"] },
        { title: "2. Rendez-vous préalable (2h)", items: ["Bilan avec ton accompagnateur", "Mise en situation", "Documents officiels"] },
        { title: "3. Phase accompagnée", items: ["1 an minimum, 3 000 km", "Trajets variés", "Carnet d'apprentissage"] },
        { title: "4. RDV pédagogiques (2x2h)", items: ["Bilan à mi-parcours", "Bilan final avant examen"] },
      ],
    },
    {
      slug: "conduite-supervisee", name: "Conduite supervisée",
      short: "Pour repasser en confiance après un échec.",
      icon: "ShieldCheck", ageMin: 18, duration: "Variable",
      hourPrice: 55, cpfEligible: false,
      highlights: ["Après un échec ou par choix", "Roule avec un accompagnateur", "1 000 km minimum", "Pas de pression de timing"],
      description: "Tu as raté un examen ailleurs ? La conduite supervisée chez Scudéria te remet en confiance avec une évaluation, puis 1 000 km minimum avec ton accompagnateur. Tu choisis quand tu repasses.",
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
      highlights: ["Forfait 6 mois à 250 €", "Plateforme web + mobile", "+ de 1 000 questions officielles", "Examen sur place"],
      description: "Le code, on le bosse intelligemment. Plateforme accessible 24/7 avec stats par thème, cours en salle, examens blancs hebdo. Tu passes l'examen quand tu es prêt.",
      programme: [
        { title: "Les 10 thèmes officiels", items: ["Circulation routière", "Conducteur", "Route", "Autres usagers", "Notions diverses", "Premiers secours", "Mécanique", "Sécurité passagers", "Environnement", "Réglementation"] },
        { title: "Méthode", items: ["Quiz quotidien recommandé", "Examens blancs hebdomadaires", "Cours en salle réguliers"] },
      ],
    },
    {
      slug: "permis-accelere", name: "Permis B accéléré",
      short: "Le permis en 4 semaines. Pour les pressés.",
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
      includes: ["Code en ligne 12 mois", "20h de conduite", "RDV préalable accompagnateur", "2 RDV pédagogiques"] },
    { slug: "permisMotoA2", label: "Permis Moto A2", price: 1290, hours: 20,
      includes: ["Code moto", "20h de plateau & circulation", "Équipement examen fourni"], tag: "Voiture + Moto" },
    { slug: "permisBAccelere", label: "Permis B accéléré (4 sem.)", price: 1890, hours: 20,
      includes: ["Code intensif 1 mois", "20h de conduite en 4 semaines", "Examens prioritaires", "Suivi quotidien"], tag: "Express" },
    { slug: "code", label: "Code de la route — 6 mois", price: 250,
      includes: ["Accès web & mobile illimité", "Cours en salle", "Inscription à l'examen"] },
  ],

  hourlyRates: [
    { key: "standard", price: 55, label: "Heure de conduite — boîte manuelle" },
    { key: "moto", price: 70, label: "Heure de moto A2" },
    { key: "accelerated", price: 75, label: "Heure de conduite — formation accélérée" },
  ],

  team: [
    { name: "Sébastien", role: "Moniteur permis B", bio: "Pédagogue, patient, fait progresser tout le monde. Cité dans plusieurs avis Google.", senior: true },
    { name: "Thomas", role: "Moniteur permis B", bio: "L'autre moitié du duo Scudéria. Réputé respectueux des élèves et carré sur la sécurité.", senior: false },
    { name: "Équipe accueil", role: "Secrétariat & inscriptions", bio: "Pour t'accompagner dans toutes tes démarches.", senior: false },
  ],

  nearbyCities: [
    { name: "Annemasse", slug: "annemasse", km: 3, intro: "À 3 minutes d'Annemasse, Scudéria forme depuis Ville-la-Grand. Voiture + Moto + Code.", highlights: ["3 min d'Annemasse", "Permis B + Moto A2", "Sébastien & Thomas, moniteurs reconnus", "Tarifs honnêtes (1 390€ le forfait 20h)", "Examen dans le secteur Annemasse", "Code en ligne illimité"] },
    { name: "Ambilly", slug: "ambilly", km: 4, intro: "À 4 minutes d'Ambilly, idéal pour les Ambillaires.", highlights: ["4 min d'Ambilly", "Voiture + Moto", "Conduite accompagnée dès 15 ans", "Réussite 70% au 1er passage"] },
    { name: "Gaillard", slug: "gaillard", km: 6, intro: "À 6 minutes de Gaillard, on accueille de nombreux élèves de la commune.", highlights: ["6 min de Gaillard", "Tous les permis : B, Moto A2", "Forfait code à 250€", "Permis 1€/jour disponible"] },
    { name: "Ville-la-Grand", slug: "ville-la-grand", km: 1, intro: "Au cœur de Ville-la-Grand, 43 rue des Tournelles. Notre maison, notre fierté.", highlights: ["43 rue des Tournelles", "Voiture + Moto sur place", "Sébastien & Thomas, moniteurs reconnus", "Cours en salle", "Examens dans le secteur", "Note Google 4,0/5"] },
    { name: "Vétraz-Monthoux", slug: "vetraz-monthoux", km: 8, intro: "À 8 minutes de Vétraz-Monthoux.", highlights: ["8 min de Vétraz-Monthoux", "Voiture + Moto", "Conduite supervisée pour repasser", "Pédagogie sur-mesure"] },
  ],

  reviews: [
    { id: "r1", author: "Coline F.", initials: "CF", date: "2024-12-15", rating: 5, formation: "Permis B", text: "Une auto-école super ! Les moniteurs sont à l'écoute, bienveillants et surtout très patients ! Je la conseille fortement pour l'apprentissage de la conduite, encore un grand merci à eux !" },
    { id: "r2", author: "Delphine G.", initials: "DG", date: "2024-09-12", rating: 5, formation: "Permis B", text: "Excellente auto-école. Vraiment un grand merci à Sébastien et Thomas d'avoir pris en charge ma fille de 17 ans. Elle a toujours eu beaucoup de plaisir à faire ses cours de conduite avec ses 2 moniteurs. Ils sont très respectueux des élèves." },
    { id: "r3", author: "Lucas M.", initials: "LM", date: "2025-08-20", rating: 5, formation: "Permis Moto A2", text: "Permis moto A2 obtenu du premier coup. Sébastien est un excellent moniteur, technique et pédagogue. Je recommande." },
    { id: "r4", author: "Élise R.", initials: "ER", date: "2025-06-10", rating: 5, formation: "Conduite accompagnée", text: "AAC commencée à 15 ans, permis obtenu à 17 ans du premier coup. Thomas a été extra avec moi. Merci !" },
    { id: "r5", author: "Maxime D.", initials: "MD", date: "2025-04-22", rating: 4, formation: "Permis B", text: "Bonne auto-école, équipe sympa. Délais d'attente parfois un peu longs en haute saison mais sinon rien à redire." },
    { id: "r6", author: "Camille P.", initials: "CP", date: "2025-03-08", rating: 5, formation: "Permis B accéléré", text: "Permis en 4 semaines, mission accomplie. Les moniteurs s'adaptent vraiment au rythme intense. Merci Scudéria !" },
    { id: "r7", author: "Anthony B.", initials: "AB", date: "2025-02-15", rating: 4, formation: "Permis B", text: "Globalement satisfait. Sébastien est top, ambiance familiale, locaux corrects. Je recommande." },
    { id: "r8", author: "Sarah K.", initials: "SK", date: "2024-11-30", rating: 5, formation: "Conduite supervisée", text: "Repassée chez Scudéria après un échec ailleurs. La conduite supervisée m'a remis en confiance, permis obtenu. Top !" },
    { id: "r9", author: "Romain T.", initials: "RT", date: "2024-10-18", rating: 5, formation: "Permis Moto A2", text: "Permis A2 réalisé chez Scudéria, super expérience. Encadrement carré, plateau bien préparé. Je recommande." },
    { id: "r10", author: "Léa N.", initials: "LN", date: "2024-08-25", rating: 5, formation: "Code de la route", text: "Plateforme code claire, cours en salle utiles. Eu mon code à 39/40 du premier coup. Merci pour le suivi." },
  ],

  reviewStats: { average: 4.0, total: 33, distribution: { 5: 22, 4: 6, 3: 2, 2: 1, 1: 2 } },

  faq: [
    { category: "Inscription", q: "À partir de quel âge je peux m'inscrire ?", a: "15 ans pour la conduite accompagnée, 17 ans pour le permis B classique, 18 ans pour le permis moto A2 et l'examen pratique." },
    { category: "Inscription", q: "Quels documents je dois fournir ?", a: "Pièce d'identité, 2 photos e-photo, justificatif de domicile -3 mois, ASSR2 (si né après 1988), attestation de recensement (16-25 ans)." },
    { category: "Inscription", q: "Combien de temps avant de pouvoir commencer ?", a: "Sous 48h après ton inscription. On crée ton dossier ANTS et tu démarres le code et la conduite dans la foulée." },
    { category: "Tarifs", q: "Combien coûte le permis B ?", a: "Forfait 20h dès 1 390 €. On a aussi 30h à 2 050 € et accéléré (4 sem.) à 1 890 €." },
    { category: "Tarifs", q: "Combien coûte le permis Moto A2 ?", a: "Forfait à 1 290 € incluant 20h de plateau et circulation, le code moto et l'équipement pour l'examen." },
    { category: "Tarifs", q: "Le permis est-il finançable avec le CPF ?", a: "Oui. Permis B, AAC, Moto A2, accéléré et code sont éligibles CPF." },
    { category: "Tarifs", q: "Vous proposez le permis à 1€ par jour ?", a: "Oui, pour les 15-25 ans. C'est un prêt à taux zéro de l'État. On t'aide à monter le dossier." },
    { category: "Conduite", q: "Voiture et moto, c'est bien la même école ?", a: "Oui, Scudéria forme aux deux. Sébastien et Thomas sont les moniteurs voiture, l'équipe est aussi habilitée moto A2." },
    { category: "Conduite", q: "Combien d'heures de conduite faut-il en moyenne ?", a: "La moyenne nationale est à 35h. Chez nous, le forfait 20h convient à la majorité, sinon on propose 30h ou des heures supplémentaires." },
    { category: "Examen", q: "Quel est votre taux de réussite ?", a: "70% au premier passage sur le permis B (vs 60% en moyenne nationale). 88% pour les conduites accompagnées." },
    { category: "Examen", q: "Si j'échoue, je dois tout repayer ?", a: "Non. Tu paies juste la représentation à l'examen (80 €) et éventuellement quelques heures complémentaires." },
    { category: "Pratique", q: "Vos horaires ?", a: "Lundi, mardi, jeudi, vendredi de 14h à 18h. Samedi matin de 9h à 12h. Mercredi et dimanche fermés." },
    { category: "Handicap", q: "Vous accueillez les personnes en situation de handicap ?", a: "Oui, on a un référent handicap et une procédure dédiée. Selon le handicap, on peut adapter ou orienter vers un partenaire spécialisé." },
  ],

  social: {
    google: "https://maps.google.com/?cid=scuderia",
    instagram: "https://instagram.com/scuderia.conduite",
    facebook: "https://facebook.com/scuderia.conduite",
  },
};
