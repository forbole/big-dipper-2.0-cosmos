/* eslint-disable */
import type { Custom, PaletteOptions, Palette } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Custom {
    general: {
      background: string;
      surfaceOne: string;
      surfaceTwo: string;
      icon: string;
    };
    fonts: {
      fontOne: string;
      fontTwo: string;
      fontThree: string;
      fontFour: string;
      fontFive: string;
      highlight: string;
    };
    primaryData: {
      one: string;
      two: string;
      three: string;
      four: string;
    };
    tags: {
      zero: string;
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
      six: string;
      seven: string;
      eight: string;
      nine: string;
      ten: string;
      eleven: string;
      twelve: string;
      thirteen: string;
      fourteen: string;
      fifteen: string;
      sixteen: string;
      seventeen: string;
      eighteen: string;
      nineteen: string;
      twenty: string;
    };
    charts: {
      zero: string;
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
    };
    condition: {
      zero: string;
      one: string;
      two: string;
      three: string;
    };
    tokenomics: {
      zero: string;
      one: string;
      two: string;
      three: string;
    };
    results: {
      pass: string;
      fail: string;
    };
    wallet: {
      background: string;
      backgroundTwo: string;
      surfaceOne: string;
      surfaceTwo: string;
      surfaceThree: string;
      surfaceFour: string;
      surfaceFive: string;
      divider: string;
      textPrimary: string;
      textSecondary: string;
      active: string;
      inactive: string;
    };
  }

  interface PaletteOptions {
    custom?: Custom;
  }
  interface Palette {
    custom: Custom;
  }
}
