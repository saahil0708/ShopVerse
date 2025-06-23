// import React, { useState } from 'react';
// import {
//   Sparkles,
//   ArrowUpRight,
//   Crown,
//   Gift,
//   Heart,
//   Star,
//   Flower2,
//   ShoppingBag,
//   Mail,
//   Check
// } from "lucide-react";

// export default function BeautyCTA() {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       setIsSubscribed(true);
//       setTimeout(() => {
//         setIsSubscribed(false);
//         setEmail('');
//       }, 3000);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       {/* Main CTA Section */}
//       <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-rose-600 rounded-3xl overflow-hidden shadow-2xl">
//         {/* Background decorations */}
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute top-8 left-8 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
//           <div className="absolute top-16 right-12 w-3 h-3 bg-pink-300/30 rounded-full animate-bounce"></div>
//           <div className="absolute bottom-12 left-16 w-5 h-5 bg-purple-300/20 rounded-full"></div>
//           <Sparkles className="absolute top-12 right-8 w-6 h-6 text-white/30 animate-pulse" />
//           <Crown className="absolute bottom-8 right-16 w-7 h-7 text-yellow-300/40" />
//           <Flower2 className="absolute top-1/2 left-8 w-8 h-8 text-pink-300/20 transform -translate-y-1/2" />
//         </div>

//         <div className="relative z-10 p-8 md:p-12 text-center">
//           {/* Header */}
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <div className="flex items-center gap-1">
//               <Star className="w-5 h-5 text-yellow-300 fill-current" />
//               <Star className="w-5 h-5 text-yellow-300 fill-current" />
//               <Star className="w-5 h-5 text-yellow-300 fill-current" />
//               <Star className="w-5 h-5 text-yellow-300 fill-current" />
//               <Star className="w-5 h-5 text-yellow-300 fill-current" />
//             </div>
//             <span className="text-white/90 text-sm font-medium ml-2">Trusted by 2M+ customers</span>
//           </div>

//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Unlock Your
//             <br />
//             <span className="bg-gradient-to-r from-yellow-300 to-pink-200 bg-clip-text text-transparent">
//               Natural Glow
//             </span>
//           </h2>

//           <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
//             Join thousands of beauty enthusiasts and discover premium skincare & makeup 
//             that enhances your natural radiance. Get exclusive access to new collections.
//           </p>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Gift className="w-6 h-6 text-pink-300" />
//                 <span className="text-2xl font-bold text-white">30%</span>
//               </div>
//               <p className="text-white/80 text-sm">First Order Discount</p>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Heart className="w-6 h-6 text-red-300" />
//                 <span className="text-2xl font-bold text-white">250+</span>
//               </div>
//               <p className="text-white/80 text-sm">Premium Products</p>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Sparkles className="w-6 h-6 text-yellow-300" />
//                 <span className="text-2xl font-bold text-white">4.9</span>
//               </div>
//               <p className="text-white/80 text-sm">Customer Rating</p>
//             </div>
//           </div>

//           {/* Email Subscription */}
//           <div className="max-w-md mx-auto mb-8">
//             <div className="flex gap-3">
//               <div className="flex-1 relative">
//                 <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email address"
//                   className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
//                 />
//               </div>
//               <button
//                 onClick={handleSubscribe}
//                 className="px-6 py-4 bg-white text-pink-600 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
//                 disabled={isSubscribed}
//               >
//                 {isSubscribed ? (
//                   <>
//                     <Check className="w-5 h-5" />
//                     Subscribed!
//                   </>
//                 ) : (
//                   <>
//                     Subscribe
//                     <ArrowUpRight className="w-5 h-5" />
//                   </>
//                 )}
//               </button>
//             </div>
//             <p className="text-white/70 text-sm mt-3">
//               Get exclusive beauty tips, new arrivals, and special offers
//             </p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button
//               className="group bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <ShoppingBag className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
//               Shop Collection
//               <div className="bg-pink-600 rounded-full p-1 transition-transform duration-300 group-hover:rotate-45">
//                 <ArrowUpRight className="w-4 h-4 text-white" />
//               </div>
//             </button>

//             <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3">
//               <Crown className="w-6 h-6" />
//               Explore Premium
//             </button>
//           </div>

//           {/* Trust indicators */}
//           <div className="flex items-center justify-center gap-8 mt-8 text-white/70 text-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//               <span>Free Shipping</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
//               <span>30-Day Returns</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
//               <span>Premium Quality</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Secondary CTA Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//         {/* Limited Time Offer */}
//         <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
//           <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
//           <div className="relative z-10">
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium">Limited Time</span>
//             </div>
//             <h3 className="text-2xl font-bold mb-2">Flash Sale</h3>
//             <p className="text-white/90 mb-4">Up to 50% off on selected items</p>
//             <button className="bg-white text-orange-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
//               Shop Sale
//             </button>
//           </div>
//         </div>

//         {/* VIP Membership */}
//         <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
//           <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full transform -translate-x-8 translate-y-8"></div>
//           <div className="relative z-10">
//             <div className="flex items-center gap-2 mb-3">
//               <Crown className="w-5 h-5 text-yellow-300" />
//               <span className="text-sm font-medium">VIP Program</span>
//             </div>
//             <h3 className="text-2xl font-bold mb-2">Join Elite</h3>
//             <p className="text-white/90 mb-4">Exclusive perks & early access</p>
//             <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react"
import {
  Sparkles,
  ArrowUpRight,
  Crown,
  Gift,
  Heart,
  Star,
  Flower2,
  ShoppingBag,
  Mail,
  Check,
  Users,
  Award,
  Zap,
  Shield,
} from "lucide-react"
import { Snackbar, Alert, Chip, Tooltip, Fade, Zoom, CircularProgress } from "@mui/material"

export default function EnhancedBeautyCTA() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    discount: 0,
    products: 0,
    rating: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  // Animated counter effect
  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedStats((prev) => ({
          discount: prev.discount < 30 ? prev.discount + 1 : 30,
          products: prev.products < 250 ? prev.products + 8 : 250,
          rating: prev.rating < 4.9 ? Math.min(prev.rating + 0.1, 4.9) : 4.9,
        }))
      }, 50)

      setTimeout(() => clearInterval(interval), 2000)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setShowNotification(true)
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubscribed(true)

    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 4000)
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Main CTA Section */}
      <Fade in={isVisible} timeout={1000}>
        <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-rose-600 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
          {/* Enhanced Background decorations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-8 left-8 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-12 w-3 h-3 bg-pink-300/30 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-12 left-16 w-5 h-5 bg-purple-300/20 rounded-full animate-pulse delay-200"></div>
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-300/40 rounded-full animate-ping"></div>
            <Sparkles className="absolute top-12 right-8 w-6 h-6 text-white/30 animate-pulse" />
            <Crown className="absolute bottom-8 right-16 w-7 h-7 text-yellow-300/40 animate-bounce delay-300" />
            <Flower2 className="absolute top-1/2 left-8 w-8 h-8 text-pink-300/20 transform -translate-y-1/2 animate-spin-slow" />

            {/* Floating gradient orbs */}
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-full blur-xl animate-float-delayed"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 text-center">
            {/* Enhanced Header with badges */}
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <Chip
                icon={<Award className="w-4 h-4 !text-white" />}
                label="Editor's Choice 2024"
                className="bg-white/20 !text-white border-white/30"
                variant="outlined"
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-300 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
                <span className="text-white/90 text-sm font-medium ml-2">Trusted by 2M+ customers</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="inline-block animate-fade-in-up">Unlock Your</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-200 bg-clip-text text-transparent inline-block animate-fade-in-up delay-200">
                Natural Glow
              </span>
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Join thousands of beauty enthusiasts and discover premium skincare & makeup that enhances your natural
              radiance. Get exclusive access to new collections.
            </p>

            {/* Enhanced Stats with animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Zoom in={isVisible} timeout={800}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Gift className="w-8 h-8 text-pink-300 animate-bounce" />
                    <span className="text-3xl font-bold text-white">{animatedStats.discount}%</span>
                  </div>
                  <p className="text-white/80 font-medium">First Order Discount</p>
                  <p className="text-white/60 text-sm mt-1">Limited time offer</p>
                </div>
              </Zoom>

              <Zoom in={isVisible} timeout={1000}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Heart className="w-8 h-8 text-red-300 animate-pulse" />
                    <span className="text-3xl font-bold text-white">{Math.round(animatedStats.products)}+</span>
                  </div>
                  <p className="text-white/80 font-medium">Premium Products</p>
                  <p className="text-white/60 text-sm mt-1">Curated collection</p>
                </div>
              </Zoom>

              <Zoom in={isVisible} timeout={1200}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-spin-slow" />
                    <span className="text-3xl font-bold text-white">{animatedStats.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-white/80 font-medium">Customer Rating</p>
                  <p className="text-white/60 text-sm mt-1">Based on 50k+ reviews</p>
                </div>
              </Zoom>
            </div>

            {/* Enhanced Email Subscription */}
            <div className="max-w-lg mx-auto mb-8">
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="flex-1 relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all duration-300 transform focus:scale-105"
                    disabled={isLoading}
                  />
                </div>
                <Tooltip title={!email ? "Please enter your email" : "Subscribe to our newsletter"}>
                  <button
                    type="submit"
                    className="px-6 py-4 bg-white text-pink-600 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubscribed || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <CircularProgress size={20} className="text-pink-600" />
                        Subscribing...
                      </>
                    ) : isSubscribed ? (
                      <>
                        <Check className="w-5 h-5 animate-bounce" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                      </>
                    )}
                  </button>
                </Tooltip>
              </form>
              <p className="text-white/70 text-sm mt-3 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Get exclusive beauty tips, new arrivals, and special offers
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Tooltip title="Browse our premium beauty collection">
                <button
                  className="group bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg hover:shadow-xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ShoppingBag
                    className={`w-6 h-6 transition-all duration-300 ${isHovered ? "rotate-12 scale-110" : ""}`}
                  />
                  Shop Collection
                  <div className="bg-pink-600 rounded-full p-1 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </Tooltip>

              <Tooltip title="Discover our premium membership benefits">
                <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3">
                  <Crown className="w-6 h-6 group-hover:animate-bounce" />
                  Explore Premium
                  <Zap className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Tooltip>
            </div>

            {/* Enhanced Trust indicators */}
            <div className="flex items-center justify-center gap-8 text-white/70 text-sm flex-wrap">
              <Tooltip title="Free shipping on orders over $50">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Free Shipping</span>
                </div>
              </Tooltip>
              <Tooltip title="30-day hassle-free returns">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <span>30-Day Returns</span>
                </div>
              </Tooltip>
              <Tooltip title="Premium quality guaranteed">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                  <span>Premium Quality</span>
                </div>
              </Tooltip>
              <Tooltip title="24/7 customer support">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                  <span>24/7 Support</span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </Fade>

      {/* Enhanced Secondary CTA Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Limited Time Offer */}
        <Zoom in={isVisible} timeout={1400}>
          <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                <Chip label="Limited Time" size="small" className="bg-white/20 !text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">Flash Sale</h3>
              <p className="text-white/90 mb-4">Up to 50% off on selected items</p>
              <button className="bg-white text-orange-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Shop Sale
              </button>
            </div>
          </div>
        </Zoom>

        {/* VIP Membership */}
        <Zoom in={isVisible} timeout={1600}>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full transform -translate-x-8 translate-y-8 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-yellow-300 animate-bounce" />
                <Chip label="VIP Program" size="small" className="bg-white/20 !text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">Join Elite</h3>
              <p className="text-white/90 mb-4">Exclusive perks & early access</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Learn More
              </button>
            </div>
          </div>
        </Zoom>

        {/* Beauty Quiz */}
        <Zoom in={isVisible} timeout={1800}>
          <div className="bg-gradient-to-br from-rose-500 to-purple-500 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group md:col-span-2 lg:col-span-1">
            <div className="absolute top-1/2 right-0 w-16 h-16 bg-white/10 rounded-full transform translate-x-8 -translate-y-1/2 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-pink-300 animate-spin-slow" />
                <Chip label="Personalized" size="small" className="bg-white/20 !text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">Beauty Quiz</h3>
              <p className="text-white/90 mb-4">Find your perfect match</p>
              <button className="bg-white text-rose-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Take Quiz
              </button>
            </div>
          </div>
        </Zoom>
      </div>

      {/* Notification Snackbar */}
      <Snackbar
        open={showNotification}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseNotification} severity="error" variant="filled">
          Please enter a valid email address
        </Alert>
      </Snackbar>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  )
}
