import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Main from '@/app/components/Main';
import Provider from '@/app/components/Provider';
import { Sidebar } from '@/app/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Football Analysis App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <Sidebar>
            <Main>{children}</Main>
          </Sidebar>
        </Provider>
      </body>
    </html>
  );
}
