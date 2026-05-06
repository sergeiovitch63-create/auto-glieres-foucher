import { LegalPage } from "@/components/legal/legal-page";
import { BUSINESS } from "@/lib/content/business";

export const metadata = { title: "Mentions légales" };

export default function MentionsPage() {
  return (
    <LegalPage title="Mentions légales" updated="6 mai 2026">
      <h2>Éditeur du site</h2>
      <p>
        <strong>{BUSINESS.name}</strong><br />
        {BUSINESS.address}<br />
        Téléphone : {BUSINESS.phone}<br />
        Email : {BUSINESS.email}
      </p>
      <p>
        SIRET : 000 000 000 00000 — Code APE 8553Z<br />
        N° d'agrément préfectoral : E 17 074 0001 0<br />
        Directeur de la publication : la direction
      </p>
      <h2>Hébergement</h2>
      <p>
        Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, USA — vercel.com
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu de ce site (textes, images, vidéos, code) est la propriété exclusive de {BUSINESS.name}, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
      </p>
      <h2>Crédits</h2>
      <p>Site conçu et développé en 2026.</p>
    </LegalPage>
  );
}
