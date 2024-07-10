import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

import './styles/globals.css';

import StoreProvider from '@/app/storeProvider';
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Home Fatamorgana',
};

const myFont = localFont({
  src: '../../public/fonts/head-now.woff2',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StoreProvider>
        <body className={`${myFont.className} ${poppins.className}`}>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
