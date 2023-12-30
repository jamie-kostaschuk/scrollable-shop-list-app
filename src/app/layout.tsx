import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Kuramae Shops',
  description: 'A List of shops in Kuramae',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
