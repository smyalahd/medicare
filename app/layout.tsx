
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MediCare | Your Health, Our Priority",
    template: "%s | MediCare",
  },
  description:
    "Discover healthcare made simple with MediCare. Find experienced doctors, explore medical services, and book appointments with ease.",
  keywords: [
    "MediCare",
    "healthcare",
    "doctors",
    "medical appointments",
    "health services",
    "online healthcare",
  ],
  openGraph: {
    title: "MediCare | Your Health, Our Priority",
    description:
      "Discover healthcare made simple. Find doctors, explore services, and book your appointment with MediCare.",
    siteName: "MediCare",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
