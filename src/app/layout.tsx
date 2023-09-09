import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from "@/app/Provider";
import Main from '@/app/components/Main';
import { SidebarWithHeader } from "@/app/components/SideBarWithHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Provider>
          <SidebarWithHeader>
            <Main>
              {children}
            </Main>
          </SidebarWithHeader>
        </Provider>
      </body>
    </html>
  )
}
