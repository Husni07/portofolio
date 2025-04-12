import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Pages/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Husni Mubarrok",
  description: "LET'S WORK TOGETHER.",
  openGraph: {
    title: "Husni Mubarrok",
    description: "LET'S WORK TOGETHER.",
    url: "https://mubarrok.my.id",
    siteName: "Husni Mubarrok",
    images: [
      {
        url: "/app/icon.webp",
        width: 1200,
        height: 630,
        alt: "Husni Mubarrok Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husni Mubarrok",
    description: "LET'S WORK TOGETHER.",
    images: ["/app/icon.webp"],
  },
  icons: {
    icon: "/app/icon.webp",
    shortcut: "/app/icon.webp",
    apple: "/app/icon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
