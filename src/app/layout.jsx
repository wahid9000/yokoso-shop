import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

import Toaster from '@/components/Toaster'
import Providers from '@/providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yokoso Shop',
  description: 'Best Ecommerce Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Providers>
          <div className='flex min-h-screen flex-col justify-between'>
            <div className='bg-black'>
              <Navbar></Navbar>
              <main className='mt-5'>
                {children}
              </main>
            </div>
            <Footer></Footer>
          </div>
        </Providers>
<Toaster></Toaster>
      </body>
    </html>
  );
};
