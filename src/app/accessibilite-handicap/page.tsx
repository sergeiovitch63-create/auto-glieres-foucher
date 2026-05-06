import { LegalPage } from "@/components/legal/legal-page";
import { BUSINESS } from "@/lib/content/business";

export const metadata = { title: "Accessibilité & accueil des personnes en situation de handicap" };

export default function AccessibilitePage() {
  return (
    <LegalPage eyebrow="Accessibilité" title="Accueil des personnes en situation de handicap" updated="6 mai 2026">
      <h2>Notre engagement</h2>
      <p>Notre auto-école s&apos;engage à accueillir toute personne en situation de handicap et à l&apos;accompagner dans son parcours de formation, en lien avec les partenaires spécialisés du territoire.</p>

      <h2>Référent handicap</h2>
      <p>
        Notre référent handicap est joignable au {BUSINESS.phone} ou par email à <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> pour étudier ta demande en confidentialité.
      </p>

      <h2>Procédure</h2>
      <ul>
        <li>Premier échange téléphonique pour comprendre tes besoins</li>
        <li>Rendez-vous sur place pour évaluer la faisabilité</li>
        <li>Mise en relation avec un partenaire spécialisé si besoin (véhicule adapté, aménagements)</li>
        <li>Adaptation pédagogique et matérielle dans la mesure du possible</li>
      </ul>

      <h2>Locaux</h2>
      <p>Nos locaux sont accessibles aux personnes à mobilité réduite.</p>

      <h2>Partenaires</h2>
      <p>Nous travaillons avec des partenaires spécialisés pour les conduites nécessitant un véhicule aménagé.</p>
    </LegalPage>
  );
}
