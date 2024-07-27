import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

import './styles/globals.css';

import { Toaster } from '@/app/components/ui/toaster';
import ProvidersLoader from '@/Provider/ProviderLoader';
import { ThemeProvider } from '@/Provider/theme-provider';

import Provider from './_trpc/Provider';
export const metadata: Metadata = {
  title: 'Fusion Craft',
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
    <html lang='en' suppressHydrationWarning>
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsPlacement: 'top',
            logoPlacement: 'none',
          },
          variables: {
            colorPrimary: '#355BF5',
            colorText: 'black',
          },
        }}
      >
        <Provider>
          <body className={`${myFont.className} ${poppins.className}`}>
            <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
              <ProvidersLoader>
                {children}
                <Toaster />
              </ProvidersLoader>
            </ThemeProvider>
          </body>
        </Provider>
      </ClerkProvider>
    </html>
  );
}
