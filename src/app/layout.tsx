'use client';

import Footer from '@/components/Footer';
import '../styles/globals.css';
import MobileHeader from '@/components/Header/MobileHeader';

export const metadata = {
  title: 'Crestbase',
  description: 'Crestbase Site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Crestbase</title>
        <meta
          name='description'
          content='Crestbase is an online real estate investment company that offers a range of pricing plans to suit your needs and budget.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
