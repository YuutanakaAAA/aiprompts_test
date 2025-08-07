import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Illust Prompt Library - Stable Diffusion用プロンプト集',
  description: 'Stable Diffusion用の高品質なプロンプト集。表情・目の形・ポーズなど、AI画像生成に役立つ呪文を豊富に収録。',
  icons: {
  icon: '/favicon.ico?v=2', // ← これがポイント！
}

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}