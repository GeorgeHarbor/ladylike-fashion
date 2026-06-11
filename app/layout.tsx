import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
});

export const metadata: Metadata = {
  title: "Ladylike Fashion — Couture dress rental, fitted to the centimetre",
  description:
    "Rent gowns from independent ateliers. Enter your measurements and our fit room shows you every dress that will fit — bust, waist and hips, to the centimetre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${splineMono.variable} h-full antialiased`}
    >
      <body className="grain paper-grid min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
