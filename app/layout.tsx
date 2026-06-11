import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-spline-mono",
});

export const metadata: Metadata = {
  title: "Ladylike Fashion — Couture haljine za iznajmljivanje, po meri do centimetra",
  description:
    "Iznajmi haljinu nezavisnih ateljea. Unesi svoje mere i probna soba ti pokazuje svaku haljinu koja ti staje — grudi, struk i bokovi, do centimetra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr-Latn"
      className={`${fraunces.variable} ${hanken.variable} ${splineMono.variable} h-full antialiased`}
    >
      <body className="grain paper-grid min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
