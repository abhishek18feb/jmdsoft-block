import type { Metadata } from "next";
import Image from "next/image";
import LogoImage from './logo.jpg'
import Link from 'next/link'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aapingenious Blog",
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
              <header className="bg-gray-800 text-white text-center p-4">
          <div>

          </div>
          <Image
            src={LogoImage}
            width={500}
            height={500}
            className="mx-auto"
            alt="Picture of the author"
          />

          <h1 className="text-3xl mt-2">Appingenious Blog</h1>
          <nav className="mt-4">
            <Link href="/" className="text-white hover:underline mx-2">Home</Link>
            
            <Link href="/about" className="text-white hover:underline mx-2">
              About
            </Link>
            <Link href="/contact" className="text-white hover:underline mx-2">
              Contact
            </Link>
          </nav>
        </header>
        {children}
        {/* <div className="footer">
          <h2>Footer</h2>
        </div> */}
      </body>
    </html>
  );
}
