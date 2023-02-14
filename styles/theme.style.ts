import { ThemeOptions } from "@mui/material";
import { bodyFonts, buttonFonts, headingFonts } from "./fonts.style";

export const BLUE = {
  900: "#345297",
  800: "#4070b7",
  700: "#4780c9",
  600: "#5093dc",
  500: "#57a1ea",
  400: "#67aeed",
  300: "#7dbdf0",
  200: "#9fd0f5",
  100: "#c2e1f9",
  50: "#c2e1f9",
};

export const GREEN = {
  900: "#2d5e5e",
  800: "#368287",
  700: "#3b969e",
  600: "#40abb7",
  500: "#44bbc9",
  400: "#4dc5d0",
  300: "#62cfd8",
  200: "#8adee3",
  100: "#b6ebee",
  50: "#e1f7f8",
};

export const PURPLE = {
  900: "#112796",
  800: "#2f32a5",
  700: "#3d38ae",
  600: "#4c40b7",
  500: "#5645bd",
  400: "#715fc7",
  300: "#8b7bd1",
  200: "#ada1de",
  100: "#cdc6eb",
  50: "#ece8f7",
};

export const COLORS = {
  MAIN: BLUE[800],
  SECONDARY: PURPLE[600],
  TERTIARY: GREEN[700],
  LIGHT_BACKGROUND: "#efefef",
  LIGHT_PAPER: "#f4f4f5",
  DARK_BACKGROUND: "#1b1e31",
  DARK_PAPER: "#1f2237",
  DARK_TEXT: "#29333b",
};

export const THEME: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.MAIN,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    background: {
      default: COLORS.DARK_BACKGROUND,
      paper: COLORS.DARK_PAPER,
    },
  },
  typography: {
    ...bodyFonts,
    button: buttonFonts,
    h1: headingFonts,
    h2: headingFonts,
    h3: headingFonts,
    h4: headingFonts,
    h5: headingFonts,
    h6: headingFonts,
  },
  shape: {
    borderRadius: 16,
  },
};
