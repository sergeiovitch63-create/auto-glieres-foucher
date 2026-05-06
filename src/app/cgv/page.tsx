import { LegalPage } from "@/components/legal/legal-page";

export const metadata = { title: "Conditions générales de vente" };

export default function CGVPage() {
  return (
    <LegalPage eyebrow="CGV" title="Conditions générales de vente" updated="6 mai 2026">
      <h2>1. Objet</h2>
      <p>Les présentes conditions régissent la vente des prestations de l'auto-école : formation à la conduite, préparation au code, inscription aux examens.</p>
      <h2>2. Inscription</h2>
      <p>L'inscription est validée à la signature du contrat de formation et au versement d'un acompte. Un dossier ANTS est ouvert pour chaque élève.</p>
      <h2>3. Tarifs</h2>
      <p>Les tarifs en vigueur sont ceux affichés sur le site et en agence au jour de la signature. Tout devis est valable 30 jours.</p>
      <h2>4. Paiement</h2>
      <p>Paiement comptant, en plusieurs fois sans frais (3x ou 4x), via CPF ou via le permis à 1€ par jour selon éligibilité.</p>
      <h2>5. Annulation et rétractation</h2>
      <p>Conformément au Code de la consommation, l'élève dispose d'un délai de 14 jours pour se rétracter. Au-delà, les heures non consommées peuvent être remboursées au prorata.</p>
      <h2>6. Réclamation</h2>
      <p>Toute réclamation doit être adressée par écrit. En cas de litige, le médiateur de la consommation peut être saisi.</p>
    </LegalPage>
  );
}
