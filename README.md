# Auto-École Multi-Tenant — Plateforme de sites vitrine

Une seule codebase Next.js qui génère un site vitrine complet et animé pour **N auto-écoles** différentes. Chaque auto-école = un fichier de config dans `src/tenants/`.

> ⏱️ **Adapter le site à une nouvelle auto-école : ~2 minutes** (remplir 1 fichier).

---

## Démarrer

```bash
npm install
npm run dev:glieres   # → http://localhost:3000
npm run dev:foucher   # → http://localhost:3001
```

Builds production :

```bash
npm run build:glieres
npm run build:foucher
```

---

## ➕ Ajouter une nouvelle auto-école (workflow ≤ 2 min)

### 1. Créer le fichier de config

Copie `src/tenants/glieres.ts` (ou `foucher.ts`) en `src/tenants/[mon-client].ts`. Modifie les valeurs.

```ts
// src/tenants/dupont.ts
import type { Tenant } from "@/lib/tenant-types";

export const dupont: Tenant = {
  id: "dupont",
  name: "Auto-École Dupont",
  shortName: "Dupont",
  domain: "autoecole-dupont.fr",
  founded: 2015,

  address: "12 rue de Lyon, 69001 Lyon",
  city: "Lyon",
  postalCode: "69001",
  phone: "04 78 ...",
  phoneIntl: "+334...",
  email: "contact@...",
  geo: { lat: 45.76, lng: 4.83 },
  hours: { /* ... */ },

  rating: 4.6,
  ratingCount: 124,
  studentsTrained: 850,
  successRateFirstAttempt: 78,

  brand: {
    mode: "light",            // ou "dark"
    accent: "#2D5BFF",        // ← l'unique couleur, le reste se génère tout seul
    logo: { monogram: "D", wordmark: "Auto-École", sub: "Dupont" },
    // goldEffect: true        // active le rendu doré (cf. Foucher)
  },

  copy: {
    heroBadge: "Depuis 2015",
    heroTitleLine1: "Le permis,",
    heroTitleLine2: "à Lyon",
    heroSubtitle: "Permis B, AAC et code à __CITY__ depuis __FOUNDED__. __SUCCESS__% de réussite.",
    aboutIntro: "...",
  },

  services: [ /* tableau de Service */ ],
  packages: [ /* tableau de Package */ ],
  hourlyRates: [ /* ... */ ],
  team: [ /* ... */ ],
  nearbyCities: [ /* SEO local */ ],
  reviews: [ /* avis */ ],
  reviewStats: { average: 4.6, total: 124, distribution: { 5: 95, 4: 20, 3: 5, 2: 2, 1: 2 } },
  faq: [ /* questions */ ],
  social: { /* ... */ },
};
```

### 2. L'enregistrer

```ts
// src/tenants/index.ts
import { dupont } from "./dupont";

export const TENANTS = { glieres, foucher, dupont };
```

### 3. Builder

```bash
TENANT_ID=dupont npm run build
# ou
cross-env TENANT_ID=dupont next build
```

**C'est tout.** Le site complet (39 pages : accueil animée, fiches prestations, tarifs avec simulateur, FAQ, contact avec carte Leaflet, légal, dashboard mockup, SEO local x5) se génère avec :
- Le **logo** modifié (monogramme + wordmark)
- La **palette 50→900** générée depuis l'unique couleur accent
- Les **neutres** (background, surface, foreground) adaptés au mode dark/light + teinte de l'accent
- **Tous les textes** (hero, stats, footer, schéma.org, sitemap, OG tags) recalculés
- Les **prestations** filtrées au catalogue du tenant (5 ou 8 ou autres)
- La **FAQ**, les **avis**, l'**équipe**, les **SEO local** propres au tenant

---

## Architecture multi-tenant

```
src/
  tenant.ts                   ← export TENANT (résolu via env TENANT_ID)
  tenants/
    index.ts                  ← registre des tenants
    glieres.ts                ← Auto-École des Glières
    foucher.ts                ← Auto-École Foucher
    [autre].ts                ← Ajoute ici
  lib/
    tenant-types.ts           ← types stricts du Tenant
    palette.ts                ← génère la palette 50-900 depuis 1 hex
    content/                  ← shims qui re-exportent depuis TENANT
      business.ts
      services.ts
      pricing.ts
      reviews.ts
      faq.ts
  components/
    providers/
      theme-tokens.tsx        ← injecte les CSS vars du tenant dans :root
      theme-provider.tsx      ← force le mode dark/light du tenant
    layout/logo.tsx           ← lit TENANT.brand.logo
    home/hero.tsx             ← lit TENANT.copy
    home/marquee-bar.tsx      ← dérive auto les items des services
    home/stats.tsx            ← chiffres du tenant
    seo/schema-org.tsx        ← Schema.org tenant-aware
    seo-local/seo-local-page.tsx ← lit TENANT.nearbyCities
  app/
    layout.tsx                ← injecte ThemeTokens + metadata du tenant
    sitemap.ts                ← URL = TENANT.domain
    permis-[ville]/page.tsx   ← 5 pages SEO local (slug → TENANT.nearbyCities)
    ...
```

## Comment fonctionnent les couleurs

Tu fournis **une seule couleur hex** (`brand.accent`). À l'init du serveur Next, `<ThemeTokens />` :

1. Calcule la palette `brand-50 → brand-900` depuis l'accent (HSL interpolation)
2. Génère les neutres (`background`, `surface`, `foreground`, `border`…) adaptés au mode + à la teinte
3. Les injecte dans `:root` via une balise `<style>` dans `<head>`

Tous les composants utilisent `bg-brand`, `text-brand-500`, `bg-background`, etc. → **rien à changer manuellement**.

## Comment fonctionne le mode dark/light

`TENANT.brand.mode = "dark" | "light"` :
- Pose `data-theme` sur `<html>`
- `next-themes` est en mode `forcedTheme` (pas de switch utilisateur — c'est l'auto-école qui décide)
- Les neutres (background, surface, foreground) sont calculés en conséquence

## Effet doré (logo Foucher)

`brand.logo.goldEffect: true` active :
- Le wordmark en dégradé doré (`text-gold` utility)
- La marquee bar en gradient brand au lieu du noir
- Les chiffres stats en doré

## Tenants actuels

| ID         | Nom                       | Mode   | Accent     | Pages |
|------------|---------------------------|--------|------------|-------|
| `glieres`  | Auto-École des Glières    | light  | `#FF5A36`  | 39    |
| `foucher`  | Auto-École Foucher        | dark   | `#D6A847`  | 36    |

Liste : `npm run tenants`

---

## Ce que le site contient (pour tous les tenants)

- **Accueil** animée : hero + form devis embarqué + 11 sections (marquee, stats, services, why-us, process, code preview, avis, équipe, FAQ, CTA final)
- **Prestations** : index + fiches dynamiques par formation
- **Tarifs** : grille forfaits + simulateur 4 étapes
- **Code en ligne** : landing
- **Avis** : filtrage par formation
- **FAQ** : recherche + catégories
- **Contact** : carte Leaflet (zéro clé API) + formulaire + horaires live
- **L'auto-école** : équipe, valeurs, locaux
- **5 pages SEO local** par commune
- **Pages légales** : mentions, CGV, confidentialité, RI, accessibilité
- **Espace élève** (mockup statique) : login, dashboard, livret REMC, code, documents, factures, profil
- **Chatbot flottant** scripté
- **Bouton flottant mobile** (téléphone + pulse)
- **Sheet global de devis** accessible depuis tous les CTA
- **Sitemap.xml**, **robots.txt**, **Schema.org** `DrivingSchool`, OG tags

---

## Stack

Next.js 16 (App Router) · TypeScript strict · Tailwind v4 + tw-animate-css · Motion · Radix UI · React Hook Form + Zod · Sonner · Lucide · react-leaflet · next-themes · Geist + Bricolage Grotesque.

## Backend (à brancher après validation client)

- Supabase (auth + DB) → espace élève réel
- Resend → emails
- Google Places API → avis live + photos
- Codes Rousseau (ou équivalent) → vraies questions du quiz code
- Claude / OpenAI API → chatbot
