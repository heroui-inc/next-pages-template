import type { AppProps } from "next/app";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
