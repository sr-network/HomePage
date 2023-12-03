import * as React from 'react';
import './globals.scss'
import { Inter } from 'next/font/google'
import { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ou\'s Intro',
  description: 'Ou\'s Intro - Introduction of the owner of Restent Ou (gxres042) and SliverRiver (slivermoe).',
  icons: [{ rel: 'icon', url: 'https://library.restent.win/images/icons/favicon.webp' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <div className={inter.className}>{children}</div>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
