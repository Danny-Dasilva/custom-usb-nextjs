import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://customusbsource.com'),
  title: {
    default: "Custom USB Source - Premium Custom USB Drives & Promotional Products",
    template: "%s | Custom USB Source"
  },
  description: "Leading supplier of custom USB drives, flash drives, and promotional tech products. High-quality branding solutions for businesses since 2003.",
  keywords: "custom USB drives, promotional flash drives, branded USB, corporate gifts, tech promotional products, bulk USB drives, personalized flash drives",
  authors: [{ name: "Custom USB Source" }],
  creator: "Custom USB Source",
  publisher: "Custom USB Source",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Custom USB Source - Premium Custom USB Drives",
    description: "Leading supplier of custom USB drives and promotional tech products. Free samples, fast delivery, and competitive pricing.",
    url: "https://customusbsource.com",
    siteName: "Custom USB Source",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom USB Source - Premium USB Drives"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom USB Source - Premium Custom USB Drives",
    description: "Leading supplier of custom USB drives and promotional tech products.",
    images: ["/images/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
