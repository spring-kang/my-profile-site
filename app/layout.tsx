import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '강성지 - 백엔드 개발자',
  description:
    '9년차 백엔드 개발자. 네이버, 무신사, 요기요, 넥슨, 신한은행 경험',
  keywords: [
    '백엔드 개발자',
    'Java',
    'Spring Boot',
    'Kotlin',
    '강성지',
    'Backend Developer',
  ],
  authors: [{ name: '강성지' }],
  creator: '강성지',
  openGraph: {
    title: '강성지 - 백엔드 개발자',
    description: '9년차 백엔드 개발자 포트폴리오',
    type: 'website',
    locale: 'ko_KR',
    siteName: '강성지 포트폴리오',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
