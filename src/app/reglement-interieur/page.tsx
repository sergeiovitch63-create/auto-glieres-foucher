import { LegalPage } from "@/components/legal/legal-page";

export const metadata = { title: "Règlement intérieur" };

export default function RIPage() {
  return (
    <LegalPage eyebrow="Règlement intérieur" title="Règlement intérieur" updated="6 mai 2026">
      <h2>Ponctualité</h2>
      <p>L'élève s'engage à arriver à l'heure prévue. Tout retard de plus de 15 minutes peut entraîner l'annulation de la leçon, qui sera due.</p>
      <h2>Annulation d'une leçon</h2>
      <p>Toute annulation doit intervenir au moins 48h avant la leçon. À défaut, la leçon sera facturée.</p>
      <h2>Tenue & comportement</h2>
      <p>Tenue correcte exigée, chaussures fermées et adaptées à la conduite. Tout comportement irrespectueux envers les moniteurs ou autres élèves entraînera l'exclusion immédiate.</p>
      <h2>Sécurité</h2>
      <p>Il est interdit de consommer de l'alcool ou des stupéfiants avant ou pendant une leçon. Le port de la ceinture est obligatoire.</p>
      <h2>Téléphone</h2>
      <p>Le téléphone doit être en mode silencieux pendant les leçons. Aucun usage personnel n'est toléré au volant.</p>
    </LegalPage>
  );
}
