import { Search, ShoppingBag, Heart, Sparkles } from "lucide-react"

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-sm rounded-full p-4 mb-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-black">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ShopVerse
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search beauty products..."
              className="bg-pink-50/50 rounded-full px-4 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 border border-pink-100"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-1">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
            <Heart className="w-5 h-5 text-pink-500" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Ryman Alex</span>
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">RA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
