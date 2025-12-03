import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://girijesh.dev"),
  title: "Girijesh S - Software Engineer | Web • Blockchain • ML",
  alternates: {
    canonical: "https://girijesh.dev"
  },
  description: "Girijesh S - Software Engineer specializing in Web Development, Blockchain, and Machine Learning. Building clean, practical web systems and ML-backed tools.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/images/placeholder-profile.png", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  keywords: [
    "Girijesh S",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Blockchain Developer",
    "Machine Learning",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Tamil Nadu",
    "Portfolio",
    "GitHub",
    "Tech Projects"
  ],
  authors: [
    { name: "Girijesh S", url: "https://girijesh.dev" }
  ],
  category: "Technology",
  openGraph: {
    title: "Girijesh S - Software Engineer | Web • Blockchain • ML",
    description: "Girijesh S - Software Engineer specializing in Web Development, Blockchain, and Machine Learning. Building clean, practical web systems and ML-backed tools.",
    url: "https://girijesh.dev",
    siteName: "Girijesh S Portfolio",
    images: [
      {
        url: "https://girijesh.dev/assets/images/placeholder-profile.png",
        width: 1200,
        height: 630,
        alt: "Girijesh S - Software Engineer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "process.env.GOOGLE_SITE_VERIFICATION",
    other: {
      me: ["girijesh.dev"]
    }
  },
  other: {
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <main className="bg-black w-screen h-screen overflow-x-hidden">
            <Navbar />
            <Navigation />
            {children}
            <Footer />
          </main>
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}