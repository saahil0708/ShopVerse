// import {
//   Sparkles,
//   Instagram,
//   Facebook,
//   Twitter,
//   Youtube,
//   Heart,
//   Star,
//   Palette,
//   Gift,
//   Crown,
//   Flower2,
//   ShoppingBag,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUpRight,
//   Send
// } from "lucide-react";
// import { useState } from "react";

// export default function BeautyFooter() {
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubscribe = () => {
//     if (email) {
//       setIsSubscribed(true);
//       setEmail("");
//       setTimeout(() => setIsSubscribed(false), 3000);
//     }
//   };

//   return (
//     <footer className="max-w-full mx-auto mt-12">
//       <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg relative overflow-hidden">
//         {/* Decorative Background Elements */}
//         <div className="absolute top-4 right-8 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-xl"></div>
//         <div className="absolute bottom-4 left-8 w-24 h-24 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-lg"></div>
        
//         <div className="relative z-10">
//           {/* Newsletter Section */}
//           <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
//             <div className="absolute top-2 right-4">
//               <Sparkles className="w-6 h-6 text-pink-200/50" />
//             </div>
//             <div className="absolute bottom-2 left-4">
//               <Crown className="w-5 h-5 text-purple-200/50" />
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//               <div>
//                 <div className="flex items-center gap-2 mb-3">
//                   <Gift className="w-5 h-5" />
//                   <span className="text-sm font-medium opacity-90">Exclusive Deals</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">Stay Beautiful</h3>
//                 <p className="text-sm opacity-90">Get the latest beauty tips, exclusive offers, and new arrivals delivered to your inbox.</p>
//               </div>
              
//               <div className="space-y-3">
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
//                   />
//                   <button
//                     onClick={handleSubscribe}
//                     className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm"
//                   >
//                     <Send className="w-5 h-5" />
//                   </button>
//                 </div>
//                 {isSubscribed && (
//                   <div className="flex items-center gap-2 text-sm">
//                     <Heart className="w-4 h-4 text-pink-200" />
//                     <span>Thank you for subscribing!</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Main Footer Content */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//             {/* Brand Section */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
//                   <Flower2 className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-gray-800">Radiant Beauty</span>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Discover your natural beauty with our premium skincare and makeup collection. Trusted by millions worldwide.
//               </p>
//               <div className="flex items-center gap-2">
//                 <div className="flex -space-x-1">
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                 </div>
//                 <span className="text-sm text-gray-600">4.9/5 from 2M+ reviews</span>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                 <ShoppingBag className="w-4 h-4 text-pink-500" />
//                 Shop
//               </h4>
//               <ul className="space-y-3">
//                 {['New Arrivals', 'Skincare', 'Makeup', 'Gift Sets', 'Sale'].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm flex items-center gap-2 group">
//                       {item}
//                       <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support */}
//             <div>
//               <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                 <Heart className="w-4 h-4 text-pink-500" />
//                 Support
//               </h4>
//               <ul className="space-y-3">
//                 {['Help Center', 'Beauty Guide', 'Shipping Info', 'Returns', 'Contact Us'].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm flex items-center gap-2 group">
//                       {item}
//                       <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                 <Sparkles className="w-4 h-4 text-pink-500" />
//                 Connect
//               </h4>
//               <div className="space-y-3 mb-4">
//                 <div className="flex items-center gap-3 text-gray-600 text-sm">
//                   <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
//                     <Mail className="w-4 h-4 text-pink-500" />
//                   </div>
//                   <span>hello@radiantbeauty.com</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-600 text-sm">
//                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                     <Phone className="w-4 h-4 text-purple-500" />
//                   </div>
//                   <span>1-800-BEAUTY</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-600 text-sm">
//                   <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
//                     <MapPin className="w-4 h-4 text-rose-500" />
//                   </div>
//                   <span>New York, NY</span>
//                 </div>
//               </div>
              
//               {/* Social Media */}
//               <div>
//                 <p className="text-gray-600 text-sm mb-3">Follow us:</p>
//                 <div className="flex gap-2">
//                   <button className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors group">
//                     <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
//                   </button>
//                   <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors group">
//                     <Facebook className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
//                   </button>
//                   <button className="w-10 h-10 bg-sky-100 hover:bg-sky-200 rounded-full flex items-center justify-center transition-colors group">
//                     <Twitter className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
//                   </button>
//                   <button className="w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors group">
//                     <Youtube className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t border-gray-200 pt-6">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <div className="flex items-center gap-4 text-sm text-gray-600">
//                 <span>© 2025 Radiant Beauty. All rights reserved.</span>
//                 <div className="flex items-center gap-1">
//                   <span>Made with</span>
//                   <Heart className="w-4 h-4 text-pink-500 fill-current" />
//                   <span>for beauty lovers</span>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-6 text-sm">
//                 <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Privacy Policy</a>
//                 <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Terms of Service</a>
//                 <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Cookie Policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client"

import { useState, useEffect, useRef } from "react"
import {
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
  Star,
  Palette,
  Gift,
  Crown,
  Flower2,
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  Award,
  Shield,
  Truck,
  Clock,
  Users,
  CheckCircle,
  TrendingUp,
  Zap,
  Globe,
  CreditCard,
  Headphones,
} from "lucide-react"
import {
  Button,
  Chip,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Tooltip,
  Fade,
  Zoom,
  Snackbar,
  Alert,
  Divider,
  LinearProgress,
} from "@mui/material"

export default function EnhancedBeautyFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    rating: 0,
    countries: 0,
  })
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateStats()
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateStats = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setAnimatedStats({
        customers: Math.floor(2000000 * progress),
        rating: Math.min(4.9 * progress, 4.9),
        countries: Math.floor(50 * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)
  }

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setShowNotification(true)
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")

    setTimeout(() => {
      setIsSubscribed(false)
    }, 4000)
  }

  const shopLinks = [
    { name: "New Arrivals", icon: Sparkles, badge: "Hot" },
    { name: "Skincare", icon: Flower2, badge: null },
    { name: "Makeup", icon: Palette, badge: null },
    { name: "Gift Sets", icon: Gift, badge: "Popular" },
    { name: "Sale", icon: TrendingUp, badge: "50% Off" },
  ]

  const supportLinks = [
    { name: "Help Center", icon: Headphones },
    { name: "Beauty Guide", icon: Award },
    { name: "Shipping Info", icon: Truck },
    { name: "Returns", icon: Shield },
    { name: "Contact Us", icon: Mail },
  ]

  const socialPlatforms = [
    { name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-600", followers: "2.5M" },
    { name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600", followers: "1.8M" },
    { name: "Twitter", icon: Twitter, color: "from-sky-400 to-sky-600", followers: "890K" },
    { name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600", followers: "1.2M" },
  ]

  const trustBadges = [
    { icon: Shield, text: "Secure Shopping", color: "text-green-600" },
    { icon: Award, text: "Award Winning", color: "text-purple-600" },
    { icon: Truck, text: "Free Shipping", color: "text-blue-600" },
    { icon: Clock, text: "24/7 Support", color: "text-orange-600" },
  ]

  return (
    <footer className="max-w-full mx-auto mt-12" ref={containerRef}>
      <div className="bg-white/80 backdrop-blur-sm shadow-lg relative overflow-hidden">
        {/* Enhanced Decorative Background Elements */}
        <div className="absolute top-4 right-8 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-4 left-8 w-24 h-24 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-md animate-pulse"></div>

        <div className="relative z-10 p-8">
          {/* Enhanced Newsletter Section */}
          <Fade in={isVisible} timeout={800}>
            <Card className="!bg-gradient-to-r !from-pink-500 !rounded-xl !to-purple-600 !mb-8 !text-white !relative !overflow-hidden !shadow-2xl">
              <CardContent className="!p-8">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-8 opacity-30">
                  <Sparkles className="w-8 h-8 text-pink-200 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-8 opacity-30">
                  <Crown className="w-6 h-6 text-purple-200 animate-bounce" />
                </div>
                <div className="absolute top-1/2 right-16 opacity-20">
                  <Heart className="w-5 h-5 text-rose-200 animate-pulse delay-100" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Gift className="w-6 h-6 animate-bounce" />
                      <Chip label="Exclusive VIP Access" className="!bg-white/20 !text-white !backdrop-blur-sm" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Beautiful & Informed</h3>
                    <p className="text-white/90 mb-6 text-lg leading-relaxed">
                      Join our exclusive beauty community and get the latest tips, product launches, and special offers
                      delivered to your inbox. Plus, get 20% off your first order!
                    </p>

                    {/* Enhanced Stats */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{(animatedStats.customers / 1000000).toFixed(1)}M+ subscribers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>{animatedStats.countries}+ countries</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <TextField
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        variant="outlined"
                        disabled={isLoading || isSubscribed}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Mail className="w-5 h-5 text-gray-400" />
                            </InputAdornment>
                          ),
                          className: "!bg-white/95 !backdrop-blur-sm !rounded-2xl",
                        }}
                        onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
                      />
                      <Button
                        onClick={handleSubscribe}
                        disabled={isLoading || isSubscribed}
                        className="!bg-white/20 !text-white !backdrop-blur-sm hover:!bg-white/30 !px-6 !py-3 !rounded-2xl !min-w-fit !shadow-lg hover:!shadow-xl !transition-all !duration-300"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : isSubscribed ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                      </Button>
                    </div>

                    {isSubscribed && (
                      <Fade in={isSubscribed}>
                        <div className="flex items-center gap-2 text-white/90">
                          <Heart className="w-5 h-5 text-pink-200 animate-pulse" />
                          <span className="font-medium">
                            Welcome to our beauty family! Check your email for your 20% off code.
                          </span>
                        </div>
                      </Fade>
                    )}

                    {/* Trust indicators */}
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>No spam, ever</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gift className="w-4 h-4" />
                        <span>Exclusive deals</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        <span>Weekly tips</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Fade>

          {/* Enhanced Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Enhanced Brand Section */}
            <Zoom in={isVisible} timeout={1000}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Flower2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    ShopVerse
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Discover your natural beauty with our premium skincare and makeup collection. Trusted by millions of
                  beauty enthusiasts worldwide.
                </p>

                {/* Enhanced Rating Section */}
                <Card className="!bg-gradient-to-r !from-pink-50 !to-purple-50 !p-4 !rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">{animatedStats.rating.toFixed(1)}/5</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    From {(animatedStats.customers / 1000000).toFixed(1)}M+ verified reviews
                  </p>
                  <LinearProgress
                    variant="determinate"
                    value={98}
                    className="!mt-2 !h-2 !rounded-full"
                    sx={{
                      backgroundColor: "rgba(0,0,0,0.1)",
                      "& .MuiLinearProgress-bar": {
                        background: "linear-gradient(to right, #ec4899, #8b5cf6)",
                      },
                    }}
                  />
                </Card>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-2">
                  {trustBadges.map((badge, index) => {
                    const IconComponent = badge.icon
                    return (
                      <Tooltip key={index} title={badge.text}>
                        <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg hover:bg-white/80 transition-colors cursor-pointer">
                          <IconComponent className={`w-4 h-4 ${badge.color}`} />
                          <span className="text-xs font-medium text-gray-700">{badge.text}</span>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
            </Zoom>

            {/* Enhanced Shop Links */}
            <Zoom in={isVisible} timeout={1200}>
              <div>
                <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
                  <ShoppingBag className="w-5 h-5 text-pink-500" />
                  Shop Categories
                </h4>
                <ul className="space-y-4">
                  {shopLinks.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <li key={item.name}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-pink-500 transition-all duration-300 flex items-center gap-3 group p-2 rounded-lg hover:bg-pink-50"
                        >
                          <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors" />
                          <span className="flex-1">{item.name}</span>
                          {item.badge && (
                            <Chip
                              label={item.badge}
                              size="small"
                              className="!bg-pink-100 !text-pink-700 !text-xs !h-5"
                            />
                          )}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Zoom>

            {/* Enhanced Support Links */}
            <Zoom in={isVisible} timeout={1400}>
              <div>
                <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
                  <Heart className="w-5 h-5 text-pink-500" />
                  Customer Care
                </h4>
                <ul className="space-y-4">
                  {supportLinks.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <li key={item.name}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-pink-500 transition-all duration-300 flex items-center gap-3 group p-2 rounded-lg hover:bg-pink-50"
                        >
                          <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors" />
                          <span className="flex-1">{item.name}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Zoom>

            {/* Enhanced Contact & Social */}
            <Zoom in={isVisible} timeout={1600}>
              <div>
                <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  Connect With Us
                </h4>

                {/* Contact Information */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-600 group hover:text-pink-600 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-medium">hello@shopverse.com</p>
                      <p className="text-xs text-gray-500">24/7 support</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600 group hover:text-purple-600 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-medium">1-800-BEAUTY</p>
                      <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600 group hover:text-rose-600 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <p className="font-medium">New York, NY</p>
                      <p className="text-xs text-gray-500">Global headquarters</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Media */}
                <div>
                  <p className="text-gray-600 font-medium mb-4">Follow our beauty journey:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {socialPlatforms.map((platform, index) => {
                      const IconComponent = platform.icon
                      const isHovered = hoveredSocial === index

                      return (
                        <Tooltip key={platform.name} title={`${platform.followers} followers`}>
                          <button
                            className={`p-3 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group relative overflow-hidden`}
                            onMouseEnter={() => setHoveredSocial(index)}
                            onMouseLeave={() => setHoveredSocial(null)}
                          >
                            <IconComponent className="w-5 h-5 text-white relative z-10" />
                            {isHovered && (
                              <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                            )}
                          </button>
                        </Tooltip>
                      )
                    })}
                  </div>

                  {/* Social Stats */}
                  <div className="mt-4 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-pink-500" />
                      <span className="text-sm font-medium text-gray-700">Social Community</span>
                    </div>
                    <p className="text-xs text-gray-600">6.4M+ beauty enthusiasts across all platforms</p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <Divider className="!my-8" />

          {/* Enhanced Bottom Section */}
          <Fade in={isVisible} timeout={1800}>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
                <span className="font-medium">© 2025 ShopVerse. All rights reserved.</span>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" />
                  <span>for beauty lovers worldwide</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
                  Cookie Policy
                </a>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500">Secure payments</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Notification */}
      <Snackbar
        open={showNotification}
        autoHideDuration={4000}
        onClose={() => setShowNotification(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setShowNotification(false)} severity="error" variant="filled">
          Please enter a valid email address
        </Alert>
      </Snackbar>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}
