import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { BRAND_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: "Tirumala Furniture | 100% Solid Teak Wood Luxury Interiors",
    template: "%s | Tirumala Furniture",
  },
  description:
    "South India's premier destination for 100% Solid Burma Teak wood living room sofas, king storage beds, Italian marble dining tables, and executive office interiors. 10-Year Warranty. Siddipet Flagship Showroom.",
  keywords: [
    "Tirumala Furniture",
    "Solid Teak Wood Furniture Siddipet",
    "Teak Sofa Set Telangana",
    "Italian Marble Dining Table",
    "Teak Storage Bed",
    "Custom Wardrobes Siddipet",
    "Luxury Furniture Showroom",
  ],
  authors: [{ name: BRAND_INFO.name }],
  openGraph: {
    title: "Tirumala Furniture | Master Crafted Teak & Luxury Interiors",
    description: "Experience 100% Solid Teak Wood craftsmanship, custom dimensions, and white-glove delivery.",
    url: "https://www.tirumalafurniture.com",
    siteName: "Tirumala Furniture",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tirumala Furniture Showroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirumala Furniture | Luxury Teak Interiors",
    description: "Handcrafted 100% Solid Teak Wood furniture with 10-Year Warranty.",
    images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#FAFAF8] text-[#111827] antialiased flex flex-col min-h-screen"
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
