import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KRUSHANU MOHAPATRA",
  description:
    "Krushanu.com is a owned by Krushanu (Krushanu Mohapatra). Here you can find details, social media links, contact and view work of Krushanu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="pastel">
        <Navbar />
        <main>
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
0