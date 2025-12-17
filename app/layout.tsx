import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'modern-normalize/modern-normalize.css';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import { getPageUrl } from '@/utils/getPageUrl';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TravelTrucks - Moving your home',
  description: 'App for finding, filtering and buying campers. Created by @oleks11-rudenko',
  openGraph: {
    title: 'TravelTrucks - Moving your home',
    description: 'App for finding, filtering and buying campers. Created by @oleks11-rudenko',
    url: getPageUrl('/'),
    siteName: 'TravelTrucks',
    type: 'website',
    images: [
      {
        url: '/travel-trucks-og-meta.webp',
        width: 1200,
        height: 630,
        alt: 'TravelTrucks - Moving your home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TravelTrucks - Moving your home',
    description: 'App for finding, filtering and buying campers. Created by @oleks11-rudenko',
    images: [
      {
        url: '/travel-trucks-og-meta.webp',
        width: 1200,
        height: 630,
        alt: 'TravelTrucks - Moving your home',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <div id="datepicker-portal"></div>
        </TanStackProvider>
      </body>
    </html>
  );
}
