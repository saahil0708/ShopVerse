import {
  Sparkles,
  ArrowUpRight,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Heart,
  Star,
  Palette,
  Zap,
  Gift,
  Crown,
  Flower2,
  ShoppingBag,
} from "lucide-react";

import Button from '@mui/material/Button';
import { useState } from "react";

export default function Landing() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* Hero Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-6 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-gray-600 text-sm">Beauty is Timeless</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Radiant Beauty
                  <br />
                  Collection.
                </h1>

                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-light text-gray-300">01</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Natural Glow</h3>
                  <p className="text-gray-600 text-sm">
                    Discover your natural beauty with our
                    <br />
                    premium skincare and makeup collection!
                  </p>
                </div>

                <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} variant="contained" className={`!bg-pink-300 !font-[Outfit] !hover:bg-pink-400 !text-black !px-6 !py-3 !rounded-full !font-medium !flex !items-center !gap-2 !transition-colors`}>
                  Shop Collection
                  <div className="bg-black rounded-full p-1">
                    <ArrowUpRight className={`w-4 h-4 text-white ${isHovered ? 'rotate-45 transition-transform duration-300' : ''}`} />
                  </div>
                </Button>

                <div className="mt-8">
                  <p className="text-gray-600 text-sm mb-3">Follow us on:</p>
                  <div className="flex gap-3">  
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Instagram className="w-4 h-4 text-pink-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Facebook className="w-4 h-4 text-blue-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Twitter className="w-4 h-4 text-sky-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Youtube className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <Flower2 className="w-16 h-16 text-pink-500" />
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-8 w-3 h-3 bg-pink-300 rounded-full"></div>
                  <div className="absolute bottom-8 left-4 w-4 h-4 bg-purple-300 rounded-full"></div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-rose-300 rounded-full"></div>
                  <Sparkles className="absolute top-6 left-6 w-5 h-5 text-pink-400" />
                  <Crown className="absolute bottom-6 right-6 w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Products */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Featured Products</h3>
                  <p className="text-gray-600 text-sm">250+ premium items</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-pink-500" />
                </button>
              </div>

              <div className="flex gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-xl flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-4 text-white relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-pink-300 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-purple-300 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-rose-300 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="text-sm">4.9 reviews</span>
                </div>
              </div>
            </div>

            {/* New Arrivals */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 text-sm font-medium">Trending</span>
              </div>

              <h3 className="font-semibold text-lg mb-4">
                New Arrivals
                <br />
                Just Launched
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl p-4 text-white relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <button className="p-1 hover:bg-white/20 rounded-full transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm opacity-90">Limited Edition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Popular Shades */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-4">Popular Shades</h3>
            <div className="flex gap-3 flex-wrap">
              <div className="w-8 h-8 bg-pink-400 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-md"></div>
              <div className="w-8 h-8 bg-rose-500 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-md"></div>
              <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-md"></div>
              <div className="w-8 h-8 bg-orange-400 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-md"></div>
              <div className="w-8 h-8 bg-red-400 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-md"></div>
            </div>
          </div>

          {/* Skincare Essentials */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">Skincare</h3>
                <p className="text-gray-600">Essentials</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Daily Routine</p>
            </div>
          </div>

          {/* Makeup Collection */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl mb-4 flex items-center justify-center">
              <div className="w-20 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <Palette className="w-8 h-6 text-purple-500" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Luxury Makeup</h3>
              <p className="text-gray-600">Collection</p>
              <p className="text-sm text-gray-500">Professional grade</p>
            </div>
          </div>

          {/* Special Offers */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5" />
              <span className="font-medium">Special Offer</span>
            </div>
            <h3 className="text-xl font-bold mb-2">30% Off</h3>
            <p className="text-sm opacity-90 mb-4">On your first purchase</p>
            <button className="bg-white text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
