import type { Metadata } from "next";
import { Lora, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Special Gift For You 🤎",
  description: "A special digital bouquet of love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${cormorantGaramond.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-[#1A110E] text-[#F5E6DA] flex flex-col">{children}</body>
    </html>
  );
}
