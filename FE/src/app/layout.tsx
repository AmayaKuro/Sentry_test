import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { NextAuthProvider, Theme, AnimateProvider } from "@/assets/providers/framework";
import AlertProvider from '@/assets/providers/alert';

import AlertPopUp from '@/components/alert.component';


const inter = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bard4Free',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Theme>
            <AnimateProvider>
              <AlertProvider>
                {children}
                <AlertPopUp />
              </AlertProvider>
            </AnimateProvider>
          </Theme>
        </NextAuthProvider>
      </body>
    </html>
  )
}