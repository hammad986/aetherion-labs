import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalSchema } from "@/components/seo/SchemaMarkup";
import { companyInfo } from "@/content/company";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aetherionlabs.qzz.io"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aetherion Labs | Custom AI Software & Intelligent Systems",
    template: `%s | Aetherion Labs`,
  },
  description: "Aetherion Labs builds AI-powered software, intelligent automation systems, document intelligence platforms, computer vision applications, and custom web solutions for startups, businesses, and creators.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aetherionlabs.qzz.io",
    title: "Aetherion Labs | Custom AI Software & Intelligent Systems",
    description: "Aetherion Labs builds AI-powered software, intelligent automation systems, document intelligence platforms, computer vision applications, and custom web solutions for startups, businesses, and creators.",
    siteName: "Aetherion Labs",
    images: [
      {
        url: "https://aetherionlabs.qzz.io/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aetherion Labs | Custom AI Software & Intelligent Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion Labs | Custom AI Software & Intelligent Systems",
    description: "Aetherion Labs builds AI-powered software, intelligent automation systems, document intelligence platforms, computer vision applications, and custom web solutions for startups, businesses, and creators.",
    images: ["https://aetherionlabs.qzz.io/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <GlobalSchema />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
