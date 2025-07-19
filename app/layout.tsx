import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'
import Background3D from './components/Background3D'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ubed Pathan - Java & MERN Stack Developer",
  description: 'Java Full-Stack and MERN Stack Developer. Specialized in building scalable web applications, RESTful APIs, and modern user interfaces.',
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative min-h-screen">
            <Background3D />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
