import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Italiana } from "next/font/google";
import SmoothScroll from "../components/ui/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: "400",
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: '--font-italiana',
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shoeb Farooqui",
  description: "Portfolio of Shoeb Farooqui, a full-stack developer and designer.",
  icons: {
    icon: "/icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${italiana.variable}`}>
      <body className="dark">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
