import { LegalPage } from "@/components/legal/legal-page";
import { BUSINESS } from "@/lib/content/business";

export const metadata = { title: "Politique de confidentialité" };

export default function ConfidentialitePage() {
  return (
    <LegalPage eyebrow="Confidentialité" title="Politique de confidentialité" updated="6 mai 2026">
      <h2>Quelles données on collecte</h2>
      <p>Quand tu remplis un formulaire (devis, contact, inscription), on collecte :</p>
      <ul>
        <li>Nom, prénom</li>
        <li>Email, téléphone</li>
        <li>Formation souhaitée et message éventuel</li>
      </ul>
      <p>Quand tu navigues sur le site, on collecte des données techniques anonymisées (pages vues, navigateur, source) via une solution analytics RGPD-friendly. Aucun cookie publicitaire.</p>

      <h2>À quoi ça sert</h2>
      <ul>
        <li>Te recontacter pour ton devis ou ta demande</li>
        <li>Gérer ton dossier élève si tu t'inscris</li>
        <li>Améliorer le site et nos prestations</li>
      </ul>

      <h2>Combien de temps on garde tes données</h2>
      <p>3 ans à compter du dernier contact, puis effacement automatique. Les données comptables sont conservées 10 ans (obligation légale).</p>

      <h2>Tes droits</h2>
      <p>Tu peux demander à tout moment :</p>
      <ul>
        <li>L'accès à tes données</li>
        <li>Leur rectification ou leur effacement</li>
        <li>La portabilité (récupération sous format lisible)</li>
        <li>L'opposition au traitement</li>
      </ul>
      <p>
        Pour exercer ces droits : <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. Tu peux aussi déposer une réclamation auprès de la CNIL (www.cnil.fr).
      </p>
    </LegalPage>
  );
}
