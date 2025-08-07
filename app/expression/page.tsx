"use client"

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Sidebar } from "./components/sidebar"
import { TableOfContents } from "./components/table-of-contents"
import { ExpressionTable } from "./components/expression-table"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge2 } from "./components/ui/badge2";
import EnhancedHeroSection from './components/ui/EnhancedHeroSection'; // 新しいコンポーネントをインポート


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800">
      {/* Header */}
      <header className="w-full bg-green-800 shadow-sm border-b border-green-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            <Link href="/" className="text-white text-2xl font-bold">
              <Badge  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-medium grid place-items-center ">
                AI Prompt
              </Badge>
            </Link>
          </div>
        </div>
      </header>
      
      <EnhancedHeroSection />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* メインコンテンツ */}
            <div className="flex-1 space-y-6">
              {/* タイトル */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge2 className="bg-green-600 hover:bg-green-700">
                    プロンプト（呪文）
                  </Badge2>
                  <span className="text-gray-500 text-sm">📅 2025年2月26日</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  表情・目の形のプロンプト（呪文）一覧【Stable Diffusion】
                </h1>
                
                {/* ヒーロー画像プレースホルダー */}
                <div className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-gray-500">表情・目の形のイメージ画像</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  全ての画像から効果出しやすい呪文や、メイクや美容りなどの目の、顔立ちの設定をこのページにまとめめています。Stable Diffusionと呪文など効率効率アプローブです。
                </p>
              </div>

              {/* 記事のアップデート */}
              <Card>
                <CardHeader className="bg-red-50 border-l-4 border-red-400">
                  <CardTitle className="text-lg text-red-700">
                    📝 記事のアップデート
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 font-mono">2025/02/21</span>
                      <span className="text-sm">表現系の名前一部分け・翻訳改善</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 font-mono">2024/11/26</span>
                      <span className="text-sm">整理・追加・翻訳改善</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 目次 */}
              <TableOfContents />

              {/* メインコンテンツセクション */}
              <div id="expressions-section" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-green-500 pl-4">
                  表情 - 分類別
                </h2>
                
                <ExpressionTable />
              </div>
            </div>

            {/* サイドバー */}
            <Sidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}