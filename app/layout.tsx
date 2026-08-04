import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "RUBIE | The Dog That Ate The Credit Card",
  description: "Discover RUBIE, the ARC community meme coin inspired by the unforgettable ‘my dog ate my credit card’ story.",
  openGraph: { title: "RUBIE — The Dog That Ate The Credit Card", description: "From an unforgettable X conversation to a community-driven meme on ARC.", images: [{ url: "/rubie.png", alt: "Rubie" }] },
  twitter: { card: "summary_large_image", title: "RUBIE — The Dog That Ate The Credit Card", description: "From an unforgettable X conversation to a community-driven meme on ARC.", images: ["/rubie.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth"><body className={`${inter.variable} ${display.variable}`}>{children}</body></html>;
}
