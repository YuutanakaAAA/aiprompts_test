'use client'

export function TableOfContents() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    { id: 'expressions-section', title: '表情 - 分類別', subsections: [
      { id: 'smile-expressions', title: 'シンプル・吹き出し😊・顔文字😊😊' },
      { id: 'eye-shapes', title: '目の形・瞳孔🤔' },
      { id: 'special-expressions', title: '血🩸・🖌・色帯類🔥' },
      { id: 'expression-tags', title: '表情タグ検証' },
      { id: 'color-verification', title: '色々検証' },
      { id: 'e621', title: 'e621語' }
    ]}
  ]

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        📋 目次
      </h3>
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="flex items-center text-green-700 hover:text-green-900 font-medium cursor-pointer transition-colors"
            >
              ▼ {section.title}
            </button>
            <div className="ml-4 mt-2 space-y-1">
              {section.subsections.map((subsection) => (
                <button
                  key={subsection.id}
                  onClick={() => scrollToSection(subsection.id)}
                  className="block text-sm text-gray-700 hover:text-green-700 cursor-pointer transition-colors pl-4"
                >
                  └ {subsection.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}