import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-white shadow-md">
          <div className="container mx-auto p-4 flex justify-between">
            <Link href="/" className="text-2xl font-bold">
              Blog App
            </Link>
            <div className="space-x-4">
              <Link href="/add" className="text-gray-700 hover:text-blue-500">
                Add Blog
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
