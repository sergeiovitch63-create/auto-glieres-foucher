import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline TENANT_ID into the client bundle at build time
  // so server + client render the same tenant (no hydration flash).
  env: {
    TENANT_ID: process.env.TENANT_ID ?? "glieres",
  },
};

export default nextConfig;
