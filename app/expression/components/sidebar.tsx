import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Sidebar() {
  const rankings = [
    { title: "ポーズ・体の柔軟なプロンプト（呪文）一覧", rank: 1 },
    { title: "服装のプロンプト（呪文）一覧", rank: 2 },
    { title: "表情・目の形のプロンプト（呪文）一覧", rank: 3 },
    { title: "カメラ・構図のプロンプト（呪文）一覧", rank: 4 },
    { title: "背景・雰囲・場所のプロンプト（呪文）一覧", rank: 5 },
    { title: "制作・行動のプロンプト（呪文）一覧", rank: 6 }
  ]

  const menuItems = [
    { name: "プロンプト（呪文）", count: 10 },
    { name: "Automatic1111", count: 3 },
    { name: "ComfyUI", count: 12 },
    { name: "Stable Diffusion共通", count: 1 }
  ]

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* ランキング */}
      <Card>
        <CardHeader className="bg-slate-600 text-white py-3">
          <CardTitle className="text-lg">ランキング 24時間集計</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {rankings.map((item) => (
            <div
              key={item.rank}
              className="flex items-center space-x-3 p-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
            >
              <div className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded ${
                item.rank <= 3 ? 'bg-orange-400 text-white' : 'bg-gray-400 text-white'
              }`}>
                {item.rank}
              </div>
              <div className="flex-1">
                <p className="text-sm line-clamp-2">{item.title}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* メニュー */}
      <Card>
        <CardHeader className="bg-slate-600 text-white py-3">
          <CardTitle className="text-lg">メニュー</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {menuItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-2 hover:text-green-600 cursor-pointer">
              <span className="text-sm">{item.name}</span>
              <Badge variant="secondary" className="text-xs">
                {item.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 広告スペース */}
      <Card>
        <CardContent className="p-8">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center">
            <p className="text-gray-500 text-sm">広告スペース</p>
          </div>
        </CardContent>
      </Card>

      {/* Adobe Creative Cloud 広告風 */}
      <Card>
        <CardContent className="p-0">
          <div className="bg-gray-100 p-6 text-center">
            <div className="bg-gray-200 w-20 h-16 mx-auto mb-4 rounded flex items-center justify-center">
              <span className="text-gray-500 text-xs">Adobe</span>
            </div>
            <div className="text-gray-600">
              <p className="font-bold mb-2">グループでの制作に最適なプラン</p>
              <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
              <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}