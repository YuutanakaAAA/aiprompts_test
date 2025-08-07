import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExpressionTable() {
  const smileExpressions = [
    { japanese: '笑顔、スマイル', english: 'smile', japanese2: '笑う', english2: 'laughing', details: ['口を大きく開けない', '歯が見えない程度'] },
    { japanese: 'ほほ笑み', english: 'light smile', japanese2: '指差顔', english2: 'fingersmile', details: ['モナリザのような優しい笑み'] },
    { japanese: 'にやり', english: 'grin', japanese2: 'ハッピー', english2: 'happy', details: ['歯を見せる幅広い笑顔'] },
    { japanese: 'どや顔', english: 'smug', japanese2: '嬉し涙', english2: 'happy tears', details: [] }
  ]

  const evilExpressions = [
    { japanese: '邪悪な笑み', english: 'evil smile', japanese2: '邪悪な笑み', english2: 'evil grin' },
    { japanese: '病み', english: 'crazy', japanese2: '悪意のある笑み', english2: 'smirk' },
    { japanese: '不気味な笑顔', english: 'crazy smile', japanese2: '不気味な笑顔', english2: 'rape face' },
    { japanese: '影のかかった顔', english: 'shaded face', japanese2: '怖い笑顔', english2: 'false smile' },
    { japanese: '影のかかった目', english: 'shading eyes', japanese2: '', english2: '' },
    { japanese: '邪悪な目', english: 'evil eyes', japanese2: '', english2: '' },
    { japanese: '邪悪な笑顔', english: 'evil smile', japanese2: '', english2: '' },
    { japanese: '邪悪な笑み', english: 'evil grin', japanese2: '', english2: '' }
  ]

  return (
    <div className="space-y-6">
      {/* 笑顔の種類 */}
      <Card id="smile-expressions">
        <CardHeader className="bg-green-100 border-l-4 border-green-400">
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-gray-50 px-3 py-1 rounded-full text-sm">笑顔の種類😊</span>
            <span className="bg-gray-50 px-3 py-1 rounded-full text-sm">Danbooru語💫</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {smileExpressions.map((expr, index) => (
              <div key={index} className="border-r border-b p-4 last:border-r-0">
                <div className="space-y-2">
                  <div className="font-medium text-sm">{expr.japanese}</div>
                  <div className="text-blue-600 text-sm">{expr.english}</div>
                  {expr.details.length > 0 && (
                    <ul className="text-xs text-gray-600">
                      {expr.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 邪悪さ */}
      <Card>
        <CardHeader className="bg-green-100 border-l-4 border-green-400">
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-gray-50 px-3 py-1 rounded-full text-sm">邪悪さ😈 😈</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {evilExpressions.map((expr, index) => (
              <div key={index} className="border-r border-b p-4 last:border-r-0">
                <div className="space-y-2">
                  <div className="font-medium text-sm">{expr.japanese}</div>
                  <div className="text-blue-600 text-sm">{expr.english}</div>
                  {expr.japanese2 && (
                    <>
                      <div className="font-medium text-sm">{expr.japanese2}</div>
                      <div className="text-blue-600 text-sm">{expr.english2}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}