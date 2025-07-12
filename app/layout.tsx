import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";
import { Toaster } from "../components/ui/toaster";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aj Fred",
  description: "Frontend Developer",
  icons: {
    icon: "/favicon.ico?v=1",
  },
  openGraph: {
    title: "Fred Aj - Frontend Developer",
    description: "Frontend Developer crafting amazing user interfaces",
    url: "https://ajfred.vercel.app",
    siteName: "Fred Aj Portfolio",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fred Aj - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aj Fred - Frontend Developer",
    description: "Frontend Developer crafting amazing user interfaces",
    creator: "@iamajfred_",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-black text-white`}
      >
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
