'use client'

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-end mb-8">
          <Button 
            variant="secondary" 
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            AI Prompt
          </Button>
        </div>
        
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute left-8 top-8 w-16 h-16 border-2 border-white/30 rounded"></div>
          <div className="absolute right-16 bottom-4 w-12 h-12 border-2 border-white/30 rounded"></div>
          
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              AI Illust<br />
              Prompt Library
            </h1>
            <p className="text-xl opacity-90">
              Stable Diffusion用の高品質なプロンプト集
            </p>
            
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}