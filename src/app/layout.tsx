import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import '@/app/globals.css';
import { TailwindLayoutStack } from '@/app/TailwindLayoutStack';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FOOTBALL Junkie',
  description: 'This site made for football junkies.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ja' className='h-full bg-gray-100'>
      <head>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </head>
      <body className={`${inter.className} h-full`}>
        <TailwindLayoutStack>{children}</TailwindLayoutStack>
      </body>
    </html>
  );
}

export default RootLayout;
