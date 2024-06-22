import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyPulse | your rental and apartments partner",
  description: "Find your dream rental apartments or home",
  keywords: "apartments rentals, rentals, "

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          { children }
        </main>
        </body>
    </html>
  );
}
