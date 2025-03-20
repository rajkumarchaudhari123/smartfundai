import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartFund AI - Fast & Secure Loans",
  description: "Get instant AI-powered loans with low interest rates and minimal paperwork. Apply now for hassle-free financial assistance!",
  keywords: "SmartFund AI, instant loans, low-interest loans, AI finance, loan approval",
  openGraph: {
    title: "SmartFund AI - Fast & Secure Loans",
    description: "AI-powered loans with quick approval and low interest. Apply now!",
    url: "https://yourwebsite.com",
    siteName: "SmartFund AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartFund AI - Instant Loans",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartFund AI - Get Loans Instantly",
    description: "Hassle-free AI-powered loans with instant approval. Check eligibility now!",
    images: ["/twitter-card.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen`}
    >
      <Navbar />
      <main className="flex-grow pt-[50px]"> {/* Navbar ke neeche space ke liye */}
        {children}
      </main>
      <Footer />
    </body>
  </html>
  
  );
}
