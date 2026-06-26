import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shadhin — Full-Stack Web Apps & Dashboards",
  description:
    "I build full-stack web apps, admin dashboards, and legacy-to-modern migrations. React, Node.js, TypeScript, PostgreSQL. Based in London, UK.",
  openGraph: {
    title: "Shadhin — Full-Stack Web Apps & Dashboards",
    description:
      "Full-stack developer helping businesses modernize operations with React, Node.js, TypeScript, and PostgreSQL.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadhin — Full-Stack Web Apps & Dashboards",
    description:
      "Full-stack developer helping businesses modernize operations with React, Node.js, TypeScript, and PostgreSQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
