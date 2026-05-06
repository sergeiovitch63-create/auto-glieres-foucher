import type { NextConfig } from "next";

const TENANT_ID = process.env.TENANT_ID ?? "glieres";

// Map TENANT_ID → URL Vercel du projet (pour que les assets CSS/JS/images
// se chargent depuis le bon domaine quand le site est servi via le router).
const ASSET_PREFIX_MAP: Record<string, string> = {
  glieres: "https://glieres.vercel.app",
  foucher: "https://foucher.vercel.app",
  leman: "https://leman-pi.vercel.app",
};

const isProd = process.env.NODE_ENV === "production";
const assetPrefix = isProd ? ASSET_PREFIX_MAP[TENANT_ID] : undefined;

const nextConfig: NextConfig = {
  // Inline TENANT_ID into the client bundle at build time so server + client
  // render the same tenant (no hydration flash).
  env: {
    TENANT_ID,
  },
  // Sert les assets statiques depuis le domaine du tenant pour que le routing
  // par /[tenant]/... fonctionne aussi pour le CSS, JS, images, etc.
  ...(assetPrefix ? { assetPrefix } : {}),
};

export default nextConfig;
