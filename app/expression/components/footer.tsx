export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="hover:text-green-200 transition-colors">
            プライバシーポリシー
          </a>
          <span className="text-green-300">|</span>
          <a href="#" className="hover:text-green-200 transition-colors">
            お問い合わせ
          </a>
        </div>
        <div className="text-center text-green-200">
          <p>© 2025 AI Illust Prompt Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}