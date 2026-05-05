import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UrbanClone | Quality Home Services, On Demand",
  description: "Book expert home cleaning, AC repair, beauty services, and more. Quality assured services at your doorstep. Experienced, hand-picked Professionals to serve you.",
  keywords: ["home services", "AC repair", "cleaning services", "beauty services", "Urban Company clone"],
  openGraph: {
    title: "UrbanClone | Quality Home Services, On Demand",
    description: "Expert services at your doorstep.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-inter">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

