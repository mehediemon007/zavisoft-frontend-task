import type { Metadata } from "next";
import { Rubik, Open_Sans, Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsLetter from "@/components/common/NewsLetter";
import ScrollTop from "@/components/common/ScrollTop";

import AppProviders from "./providers";

const rubik = Rubik({
    display: 'swap',
    variable: "--font-rubik",
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
});

const openSans = Open_Sans({
    display: 'swap',
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: ['400', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Kick Store",
    description: "Kick a large platform for versetile shopping",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body
                className={`${rubik.variable} ${openSans.variable} ${inter.variable} antialiased`}
            >
                <AppProviders>
                    <Header/>
                    <main className="pt-21 sm:pt-24 lg:pt-32">
                        {children}
                    </main>
                    <NewsLetter/>
                    <Footer/>
                </AppProviders>
                <ScrollTop/>
            </body>
        </html>
    );
}