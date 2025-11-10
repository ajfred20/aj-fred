import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Habibi - Fullstack Developer",
  description: "Fullstack Developer crafting amazing user interfaces",
  icons: {
    icon: "/favicon.ico?v=1",
  },
  openGraph: {
    title: "Habibi - Fullstack Developer",
    description: "Fullstack Developer crafting amazing user interfaces",
    url: "https://ajfred.vercel.app",
    siteName: "Habibi Portfolio",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Habibi - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habibi - Fullstack Developer",
    description: "Fullstack Developer crafting amazing user interfaces",
    creator: "@ajwgmi",
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
      <body className={`${manrope.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
