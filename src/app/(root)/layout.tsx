import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import { Header } from '@/components/shared/header'

export const metadata: Metadata = {
  title: 'Next Pizza | Главная',
  description: 'Generated by create next app'
}

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: ReactNode
  modal: ReactNode
}>) {
  return (
    <main className='min-h-screen'>
      <Suspense>
        <Header />
      </Suspense>
      {children}
      {modal}
    </main>
  )
}
