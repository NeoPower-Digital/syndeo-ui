import {
  Catamaran,
  Inter,
  Josefin_Sans,
  Nunito,
  Roboto_Mono,
} from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const catamaran = Catamaran({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const bodyFonts = {
  fontFamily: nunito.style.fontFamily,
};

export const headingFonts = {
  fontFamily: nunito.style.fontFamily,
};

export const buttonFonts = {
  fontFamily: nunito.style.fontFamily,
};

export const currencyFonts = {
  fontFamily: robotoMono.style.fontFamily,
};
