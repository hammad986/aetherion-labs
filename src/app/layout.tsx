import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalSchema } from "@/components/seo/SchemaMarkup";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hammad.dpdns.org"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aetherion Labs | Custom Software, Web & AI Development",
    template: `%s | Aetherion Labs`,
  },
  description: "Aetherion Labs builds custom websites, web applications, AI solutions, automation systems, SaaS products, and custom software for startups, businesses, creators, and project owners. Serving clients across the United States, Canada, and worldwide.",
  keywords: [
    "custom software development",
    "web development studio",
    "custom website development",
    "web application development",
    "AI development",
    "AI chatbot development",
    "business website development",
    "automation development",
    "SaaS development",
    "MVP development",
    "custom AI solutions",
    "software development for small businesses",
    "custom web apps for startups",
    "student project prototypes"
  ],
  authors: [{ name: "Muhammed Hammad S", url: "https://hammad.dpdns.org/about" }],
  creator: "Aetherion Labs",
  publisher: "Aetherion Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hammad.dpdns.org",
    title: "Aetherion Labs | Custom Software, Web & AI Development",
    description: "Aetherion Labs builds custom websites, web applications, AI solutions, automation systems, SaaS products, and custom software for startups, businesses, creators, and project owners. Serving clients across the United States, Canada, and worldwide.",
    siteName: "Aetherion Labs",
    images: [
      {
        url: "https://hammad.dpdns.org/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aetherion Labs — Custom Software & Digital Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion Labs | Custom Software, Web & AI Development",
    description: "Aetherion Labs builds custom websites, web applications, AI solutions, automation systems, SaaS products, and custom software. Serving clients across the United States, Canada, and worldwide.",
    images: ["https://hammad.dpdns.org/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  applicationName: "Aetherion Labs",
  appleWebApp: {
    capable: true,
    title: "Aetherion Labs",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "theme-color": "#10b981",
    "msapplication-TileColor": "#10b981",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#10b981" />
        <GlobalSchema />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900 selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
