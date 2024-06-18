import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

const lFont = localFont({
  src: "./fonts/0xProtoNerdFontMono-Regular.woff2",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "MiraSayon",
  description: "Welcome to my profile!",
};
const gaid = process.env.GAID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lFont.className}>
        <a href="https://nodejs.org/en" target="_blank">
          <img
            src="/nodejstutleart.png"
            className="turtle"
            width={100}
            height={100}
            alt=""
          />
        </a>
        <a href="https://deno.com" target="_blank">
          <img
            src="/denoland.png"
            className="deno"
            width={100}
            height={100}
            alt=""
          />
        </a>

        {children}
      </body>
      {gaid && <GoogleAnalytics gaId={gaid} />}
    </html>
  );
}
