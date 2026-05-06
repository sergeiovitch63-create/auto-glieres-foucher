/**
 * Génère une palette 50→900 à partir d'une seule couleur accent (hex).
 * Utilise HSL pour interpoler la luminosité tout en gardant la teinte.
 */

export type Palette = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

function hexToHsl(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (n: number) => {
    const v = Math.round((n + m) * 255).toString(16);
    return v.length === 1 ? "0" + v : v;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Steps mappent : niveau de palette → (lightness target, saturation multiplier).
 * Calé pour donner des nuances équilibrées sur la majorité des accents.
 */
const STEPS: Record<number, [number, number]> = {
  50:  [96, 0.50],
  100: [90, 0.65],
  200: [80, 0.80],
  300: [70, 0.92],
  400: [58, 1.00],
  500: [48, 1.00],   // = accent ou très proche
  600: [40, 0.95],
  700: [32, 0.90],
  800: [25, 0.82],
  900: [18, 0.75],
};

export function generatePalette(accentHex: string): Palette {
  const [h, s] = hexToHsl(accentHex);
  const result = {} as Palette;
  for (const [step, [lightness, satMult]] of Object.entries(STEPS)) {
    result[Number(step) as keyof Palette] = hslToHex(h, s * satMult, lightness);
  }
  // Le 500 = exactement l'accent fourni (préserve fidélité)
  result[500] = accentHex.startsWith("#") ? accentHex : `#${accentHex}`;
  return result;
}

/**
 * Palette de neutres warm/cold selon mode + tinte de l'accent.
 */
export function neutralPalette(mode: "light" | "dark", accentHex: string) {
  const [h] = hexToHsl(accentHex);
  // Léger glissement chaud/froid selon la teinte de l'accent
  const baseHue = h;
  const tint = (l: number, s: number = 6) => hslToHex(baseHue, s, l);

  if (mode === "dark") {
    return {
      background:    tint(4, 12),
      surface:       tint(7, 10),
      surface2:      tint(10, 8),
      foreground:    tint(96, 8),
      muted:         tint(64, 8),
      muted2:        tint(42, 6),
      border:        tint(14, 8),
      borderStrong:  tint(20, 8),
    };
  }
  return {
    background:    tint(98, 5),
    surface:       "#ffffff",
    surface2:      tint(95, 8),
    foreground:    tint(8, 12),
    muted:         tint(36, 8),
    muted2:        tint(54, 6),
    border:        tint(90, 8),
    borderStrong:  tint(82, 8),
  };
}
