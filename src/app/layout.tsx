import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const viewport: Viewport = {
  themeColor: "#E4572E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "JOINZY — Real-World Community Network & Microsponsorship Marketplace",
  description:
    "Join communities. Discover events. Create your own. Get the people and businesses around you to make things happen. An EM300.co company launching in Morocco and France.",
  keywords: [
    "Joinzy",
    "community network",
    "event discovery",
    "microsponsorship",
    "community sponsorship",
    "Morocco communities",
    "Casablanca meetups",
    "Paris tech clubs",
    "EM300",
  ],
  authors: [{ name: "EM300.co" }],
  creator: "JOINZY",
  publisher: "EM300.co",
  metadataBase: new URL("https://joinzy.vercel.app"),
  openGraph: {
    title: "JOINZY — Find your people. Make things happen.",
    description:
      "The infrastructure and marketplace for real-world communities. Discover local groups, attend verified events, and unlock local business sponsorships.",
    url: "https://joinzy.vercel.app",
    siteName: "JOINZY",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOINZY — Real-World Community Network & Marketplace",
    description:
      "Join communities. Discover events. Create your own. Get local businesses to back your events.",
    creator: "@joinzyapp",
  },
  icons: {
    icon: "/Joinzylogo.png",
    shortcut: "/Joinzylogo.png",
    apple: "/Joinzylogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-[#EDE6D9] text-[#1F1F1D] antialiased selection:bg-[#E4572E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
