import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Will Bank',
  description: 'A New Bank for a New World',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
