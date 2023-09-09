import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from "@/app/components/Provider";
import Main from '@/app/components/Main';
import { SidebarWithHeader } from "@/app/components/SideBarWithHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Football Analysis App',
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
