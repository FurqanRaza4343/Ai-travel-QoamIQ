import type { Metadata } from "next";
import { Playfair_Display, Outfit, Syne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "RoamIQ — Smart AI Travel Planner",
  description: "Discover the world smarter. RoamIQ builds your perfect trip with AI-powered itineraries, curated stays, and real-time insights.",
  openGraph: {
    title: "RoamIQ — Smart AI Travel Planner",
    description: "Discover the world smarter. RoamIQ builds your perfect trip with AI-powered itineraries, curated stays, and real-time insights.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${playfair.variable} ${outfit.variable} ${syne.variable} font-sans bg-bg text-text min-h-screen flex flex-col grid-bg noise`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="orb orb-emerald top-[-5%] left-[-10%]" />
          <div className="orb orb-amber top-[45%] right-[-8%]" />
          <div className="orb orb-indigo bottom-[-15%] left-[25%]" />
        </div>
        {children}
      </body>
    </html>
  );
}
