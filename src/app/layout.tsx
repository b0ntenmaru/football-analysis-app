import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
