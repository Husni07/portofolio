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
        url: "/app/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Husni Mubarrok Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husni Mubarrok",
    description: "LET'S WORK TOGETHER.",
    images: ["/app/icon.jpg"],
  },
  icons: {
    icon: "/app/icon.jpg",
    shortcut: "/app/icon.jpg",
    apple: "/app/icon.jpg",
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
