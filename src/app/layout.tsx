import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import '@/app/globals.css';
import { TailwindLayout } from './TailwindLayout';

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
      <head>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </head>
      <body className={inter.className}>
        <TailwindLayout>{children}</TailwindLayout>
      </body>
    </html>
  );
}

export default RootLayout;
