import { TENANT } from "@/tenant";
import { generatePalette, neutralPalette } from "@/lib/palette";

/**
 * Injecte les tokens CSS du tenant actif dans :root.
 * - Génère brand-50 → brand-900 depuis TENANT.brand.accent
 * - Génère les neutres (background, foreground, surface, etc.) selon mode + teinte
 * - Force le mode dark/light via attribut sur <html>
 */
export function ThemeTokens() {
  const palette = generatePalette(TENANT.brand.accent);
  const neutrals = neutralPalette(TENANT.brand.mode, TENANT.brand.accent);
  const accentRgb = hexToRgb(TENANT.brand.accent);

  const css = `
:root {
  --brand-50:  ${palette[50]};
  --brand-100: ${palette[100]};
  --brand-200: ${palette[200]};
  --brand-300: ${palette[300]};
  --brand-400: ${palette[400]};
  --brand-500: ${palette[500]};
  --brand-600: ${palette[600]};
  --brand-700: ${palette[700]};
  --brand-800: ${palette[800]};
  --brand-900: ${palette[900]};
  --brand-rgb: ${accentRgb};

  --background:    ${neutrals.background};
  --surface:       ${neutrals.surface};
  --surface-2:     ${neutrals.surface2};
  --foreground:    ${neutrals.foreground};
  --muted:         ${neutrals.muted};
  --muted-2:       ${neutrals.muted2};
  --border:        ${neutrals.border};
  --border-strong: ${neutrals.borderStrong};
}
`;
  return <style id="tenant-tokens" dangerouslySetInnerHTML={{ __html: css }} />;
}

function hexToRgb(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}
