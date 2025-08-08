import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import MobileNav from '@/component/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <MobileNav />
          <Footer />
        </div>
      </body>
    </html>
  )
}