import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'معلم لياسة وترميم محترف في اليمن | 780332004',
  description: 'أفضل خدمات اللياسة والمقاولات والترميم، تربيع وتأكيس محترف بأعلى جودة ودقة.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
