import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "Segun Aniyi | Official Website",
  description: "Official website for Segun Aniyi - Afrobeats RnB Afropop",
  image: "/assets/segun-love-is-overrated.png",
  url: "https://www.segunaniyi.com",
};

export const metadata: Metadata = {
  title: "Segun Aniyi | Official",
  description:
    "Official website for Segun Aniyi Music - Afrobeats, RnB, Afropop, Artist from Lagos, Nigeria. Based in Edinburgh, UK.",
  metadataBase: new URL("https://www.segunaniyi.com"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    locale: "en-GB",
    siteName: meta.title,
    type: "website",
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.segunaniyi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
