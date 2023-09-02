import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AniType - Главная',
  description: 'Огромное количество релизов с озвучкой от любимых студий, просмотр с друзьями, персональные подборки',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, 'bg-zinc-950 h-full')}>
        <Header />
        <main className='h-full min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}
