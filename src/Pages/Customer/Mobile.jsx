// import {
//   Sparkles,
//   ArrowUpRight,
//   Heart,
//   Star,
//   Smartphone,
//   Download,
//   Gift,
//   Crown,
//   Flower2,
//   ShoppingBag,
//   Bell,
//   Camera,
//   Users,
//   Zap,
//   CheckCircle,
//   Gem,
//   Play,
//   Apple,
//   Shield,
//   Clock,
//   Palette
// } from "lucide-react";

// import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
// import Rating from '@mui/material/Rating';
// import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import { useState } from "react";

// export default function MobileAppPromotion() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [hoveredButton, setHoveredButton] = useState(null);

//   const appFeatures = [
//     {
//       id: 0,
//       title: "AR Try-On",
//       subtitle: "Virtual Makeup Testing",
//       description: "Try on lipsticks, eyeshadows, and foundations virtually using advanced AR technology. See how products look before you buy.",
//       icon: Camera,
//       gradient: "from-pink-500 to-purple-600",
//       image: "📱"
//     },
//     {
//       id: 1,
//       title: "Personalized Recommendations",
//       subtitle: "AI-Powered Suggestions",
//       description: "Get product recommendations tailored to your skin tone, preferences, and beauty goals using our smart AI algorithm.",
//       icon: Sparkles,
//       gradient: "from-purple-500 to-pink-600",
//       image: "🎨"
//     },
//     {
//       id: 2,
//       title: "Exclusive App Deals",
//       subtitle: "Members-Only Offers",
//       description: "Access special discounts, early product launches, and app-exclusive bundles available only to mobile users.",
//       icon: Gift,
//       gradient: "from-rose-500 to-pink-600",
//       image: "🎁"
//     },
//     {
//       id: 3,
//       title: "Beauty Scanner",
//       subtitle: "Ingredient Analysis",
//       description: "Scan any beauty product to get detailed ingredient analysis, reviews, and find similar products in our catalog.",
//       icon: Zap,
//       gradient: "from-orange-500 to-pink-500",
//       image: "🔍"
//     }
//   ];

//   const appBenefits = [
//     { icon: Bell, title: "Push Notifications", description: "Never miss a sale or restock" },
//     { icon: Crown, title: "VIP Access", description: "Early access to new collections" },
//     { icon: ShoppingBag, title: "Quick Checkout", description: "One-tap purchasing experience" },
//     { icon: Users, title: "Beauty Community", description: "Connect with fellow beauty lovers" },
//     { icon: Star, title: "Review & Rate", description: "Share your product experiences" },
//     { icon: Shield, title: "Secure Shopping", description: "Protected payments & data" }
//   ];

//   const reviews = [
//     { name: "Sarah K.", rating: 5, text: "The AR try-on feature is incredible! Saved me from so many wrong purchases.", avatar: "S" },
//     { name: "Emma L.", rating: 5, text: "Love the personalized recommendations. The app knows my style better than I do!", avatar: "E" },
//     { name: "Olivia M.", rating: 5, text: "App-exclusive deals are amazing. I save so much money shopping through the app.", avatar: "O" }
//   ];

//   return (
//     <div className="min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <Chip 
//             icon={<Sparkles className="w-4 h-4" />} 
//             label="Download Our App" 
//             variant="outlined"
//             className="!border-pink-300 !text-pink-600 !mb-6"
//           />
          
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Beauty in Your Pocket
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
//             Experience the future of beauty shopping with our award-winning mobile app. 
//             Get exclusive features, personalized recommendations, and unbeatable deals.
//           </p>

//           {/* App Store Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
//             <Button
//               variant="contained"
//               size="large"
//               startIcon={<Apple className="w-5 h-5" />}
//               endIcon={<Download className="w-4 h-4" />}
//               onMouseEnter={() => setHoveredButton('ios')}
//               onMouseLeave={() => setHoveredButton(null)}
//               className={`!bg-black !font-[Outfit] !text-white !px-8 !py-4 !rounded-2xl !font-semibold !text-lg !transition-all !duration-300 ${
//                 hoveredButton === 'ios' ? '!transform !scale-105 !shadow-xl' : ''
//               }`}
//             >
//               App Store
//             </Button>
            
//             <Button
//               variant="contained" 
//               size="large"
//               startIcon={<Play className="w-5 h-5" />}
//               endIcon={<Download className="w-4 h-4" />}
//               onMouseEnter={() => setHoveredButton('android')}
//               onMouseLeave={() => setHoveredButton(null)}
//               className={`!bg-green-600 !font-[Outfit] !text-white !px-8 !py-4 !rounded-2xl !font-semibold !text-lg !transition-all !duration-300 ${
//                 hoveredButton === 'android' ? '!transform !scale-105 !shadow-xl' : ''
//               }`}
//             >
//               Google Play
//             </Button>
//           </div>

//           {/* User Stats */}
//           <div className="flex items-center justify-center gap-6 text-center">
//             <div>
//               <div className="text-2xl font-bold text-gray-900">4.8</div>
//               <Rating value={4.8} readOnly precision={0.1} size="small" />
//               <div className="text-sm text-gray-600">App Rating</div>
//             </div>
//             <div className="w-px h-12 bg-gray-300"></div>
//             <div>
//               <div className="text-2xl font-bold text-gray-900">500K+</div>
//               <div className="text-sm text-gray-600">Downloads</div>
//             </div>
//             <div className="w-px h-12 bg-gray-300"></div>
//             <div>
//               <AvatarGroup max={3} className="justify-center">
//                 <Avatar className="!bg-pink-400 !w-8 !h-8">S</Avatar>
//                 <Avatar className="!bg-purple-400 !w-8 !h-8">E</Avatar>
//                 <Avatar className="!bg-rose-400 !w-8 !h-8">O</Avatar>
//               </AvatarGroup>
//               <div className="text-sm text-gray-600">Happy Users</div>
//             </div>
//           </div>
//         </div>

//         {/* Main Features Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
//           {/* Phone Mockups */}
//           <div className="relative">
//             <div className="flex justify-center gap-4">
//               {/* Main Phone */}
//               <div className="relative">
//                 <div className="w-64 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
//                   <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
//                     {/* Phone Screen Content */}
//                     <div className={`w-full h-full bg-gradient-to-br ${appFeatures[activeFeature].gradient} flex flex-col items-center justify-center text-white relative`}>
//                       <div className="text-6xl mb-4">{appFeatures[activeFeature].image}</div>
//                       <h3 className="text-xl font-bold mb-2">{appFeatures[activeFeature].title}</h3>
//                       <p className="text-sm text-center px-4 opacity-90">{appFeatures[activeFeature].subtitle}</p>
                      
//                       {/* Floating UI Elements */}
//                       <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
//                         <Sparkles className="w-4 h-4" />
//                       </div>
//                       <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
//                         <Heart className="w-4 h-4" />
//                       </div>
//                       <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
//                         <Star className="w-4 h-4" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Floating Badges */}
//                 <Badge 
//                   badgeContent="NEW" 
//                   color="secondary"
//                   className="absolute -top-2 -right-2 !z-10"
//                 >
//                   <div className="w-8 h-8"></div>
//                 </Badge>
//               </div>

//               {/* Secondary Phone */}
//               <div className="w-48 h-72 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl p-2 shadow-xl mt-12">
//                 <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <ShoppingBag className="w-8 h-8 mx-auto mb-2" />
//                     <p className="text-sm font-medium">Quick Shop</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-200 rounded-full opacity-60"></div>
//             <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-200 rounded-full opacity-60"></div>
//           </div>

//           {/* Features List */}
//           <div className="space-y-6">
//             <div className="mb-8">
//               <Chip 
//                 icon={<Smartphone className="w-4 h-4" />} 
//                 label="App Features" 
//                 variant="filled"
//                 className="!bg-pink-100 !text-pink-700 !mb-4"
//               />
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Powerful Features at Your Fingertips
//               </h2>
//               <p className="text-gray-600 text-lg">
//                 Our mobile app brings cutting-edge technology to enhance your beauty shopping experience.
//               </p>
//             </div>

//             {appFeatures.map((feature, index) => {
//               const IconComponent = feature.icon;
//               const isActive = activeFeature === index;
              
//               return (
//                 <div
//                   key={feature.id}
//                   className={`p-6 !font-[Outfit] rounded-2xl cursor-pointer transition-all duration-300 ${
//                     isActive 
//                       ? 'bg-white shadow-lg ring-2 ring-pink-200' 
//                       : 'bg-white/60 hover:bg-white/80'
//                   }`}
//                   onClick={() => setActiveFeature(index)}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={`w-12 h-12 !font-[Outfit] bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center ${
//                       isActive ? 'scale-110' : ''
//                     } transition-transform duration-300`}>
//                       <IconComponent className="w-6 h-6 text-white" />
//                     </div>
                    
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
//                       <p className="text-pink-600 font-medium text-sm mb-2">{feature.subtitle}</p>
//                       <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                     </div>
                    
//                     {isActive && (
//                       <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* App Benefits Grid */}
//         <div className="mb-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               More Reasons to Love Our App
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Discover additional benefits that make our mobile app the ultimate beauty companion.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {appBenefits.map((benefit, index) => {
//               const IconComponent = benefit.icon;
//               return (
//                 <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
//                   <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600 text-sm">{benefit.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Reviews Section */}
//         {/* <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
//           <div className="text-center mb-12">
//             <Chip 
//               icon={<Star className="w-4 h-4" />} 
//               label="User Reviews" 
//               variant="outlined"
//               className="!border-yellow-300 !text-yellow-700 !mb-4"
//             />
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               What App Users Say
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Real feedback from beauty enthusiasts who love using our mobile app.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {reviews.map((review, index) => (
//               <div key={index} className="bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
//                 <Rating value={review.rating} readOnly size="small" className="mb-4" />
                
//                 <p className="text-gray-700 mb-6 italic leading-relaxed">
//                   "{review.text}"
//                 </p>
                
//                 <div className="flex items-center gap-3">
//                   <Avatar className="!bg-gradient-to-br !from-pink-400 !to-purple-500 !text-white !font-semibold">
//                     {review.avatar}
//                   </Avatar>
//                   <div>
//                     <p className="font-semibold text-gray-900">{review.name}</p>
//                     <Chip label="Verified User" size="small" variant="outlined" className="!text-xs !h-5" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Final CTA Section */}
//         <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
//           <div className="relative z-10">
//             <div className="flex items-center justify-center gap-2 mb-6">
//               <Smartphone className="w-8 h-8" />
//               <span className="font-semibold text-xl">Ready to Transform Your Beauty Routine?</span>
//             </div>
            
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               Download Now & Get 20% Off
//             </h2>
            
//             <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
//               Join half a million beauty lovers and unlock exclusive app features, personalized recommendations, and members-only deals.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<Apple className="w-5 h-5" />}
//                 className="!bg-white !font-[Outfit] !text-gray-900 !px-8 !py-4 !rounded-2xl !font-semibold !text-lg !hover:bg-gray-100"
//               >
//                 Download for iOS
//               </Button>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 startIcon={<Play className="w-5 h-5" />}
//                 className="!border-white !font-[Outfit] !text-white !px-8 !py-4 !rounded-2xl !font-semibold !text-lg !hover:bg-white/10"
//               >
//                 Download for Android
//               </Button>
//             </div>

//             <div className="flex items-center justify-center gap-4 text-sm opacity-80">
//               <div className="flex items-center gap-1">
//                 <Clock className="w-4 h-4" />
//                 <span>2-minute setup</span>
//               </div>
//               <div className="w-px h-4 bg-white/40"></div>
//               <div className="flex items-center gap-1">
//                 <Shield className="w-4 h-4" />
//                 <span>Secure & private</span>
//               </div>
//               <div className="w-px h-4 bg-white/40"></div>
//               <div className="flex items-center gap-1">
//                 <Gift className="w-4 h-4" />
//                 <span>First-time bonus</span>
//               </div>
//             </div>
//           </div>

//           {/* Background Decorations */}
//           <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full"></div>
//           <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
//           <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/20 rounded-full"></div>
//           <Sparkles className="absolute top-12 right-16 w-10 h-10 text-white/30" />
//           <Smartphone className="absolute bottom-16 left-24 w-8 h-8 text-white/30" />
//           <Flower2 className="absolute top-1/3 left-12 w-6 h-6 text-white/25" />
//           <Palette className="absolute bottom-1/3 right-12 w-7 h-7 text-white/25" />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react"
import {
  Sparkles,
  Heart,
  Star,
  Smartphone,
  Download,
  Gift,
  Crown,
  Flower2,
  ShoppingBag,
  Bell,
  Camera,
  Users,
  CheckCircle,
  Play,
  Apple,
  Shield,
  Clock,
  Palette,
  TrendingUp,
  Award,
  MessageCircle,
  Scan,
  Wand2,
} from "lucide-react"
import {
  Button,
  Chip,
  Rating,
  Badge,
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
  Tooltip,
  Fade,
  Zoom,
  LinearProgress,
  Fab,
  Snackbar,
  Alert,
} from "@mui/material"

export default function EnhancedMobileAppPromotion() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [hoveredButton, setHoveredButton] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [downloadCount, setDownloadCount] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [phoneAnimation, setPhoneAnimation] = useState("idle")
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateDownloadCount()
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % appFeatures.length)
      setPhoneAnimation("transition")
      setTimeout(() => setPhoneAnimation("idle"), 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const animateDownloadCount = () => {
    const target = 500000
    const duration = 2000
    const steps = 60
    const stepValue = target / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      setDownloadCount(Math.floor(current))
      if (current >= target) {
        setDownloadCount(target)
        clearInterval(timer)
      }
    }, duration / steps)
  }

  const appFeatures = [
    {
      id: 0,
      title: "AR Try-On",
      subtitle: "Virtual Makeup Testing",
      description:
        "Try on lipsticks, eyeshadows, and foundations virtually using advanced AR technology. See how products look before you buy with 95% accuracy.",
      icon: Camera,
      gradient: "from-pink-500 to-purple-600",
      image: "📱",
      stats: "95% Accuracy",
      benefits: ["Real-time preview", "Multiple angles", "Save & share looks"],
    },
    {
      id: 1,
      title: "AI Recommendations",
      subtitle: "Personalized Suggestions",
      description:
        "Get product recommendations tailored to your skin tone, preferences, and beauty goals using our smart AI algorithm trained on millions of beauty profiles.",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-600",
      image: "🎨",
      stats: "98% Match Rate",
      benefits: ["Skin tone analysis", "Preference learning", "Goal tracking"],
    },
    {
      id: 2,
      title: "Exclusive Deals",
      subtitle: "App-Only Offers",
      description:
        "Access special discounts, early product launches, and app-exclusive bundles available only to mobile users. Save up to 40% on premium products.",
      icon: Gift,
      gradient: "from-rose-500 to-pink-600",
      image: "🎁",
      stats: "Up to 40% Off",
      benefits: ["Flash sales", "Early access", "Bundle deals"],
    },
    {
      id: 3,
      title: "Beauty Scanner",
      subtitle: "Ingredient Analysis",
      description:
        "Scan any beauty product to get detailed ingredient analysis, reviews, and find similar products in our catalog. Make informed beauty choices.",
      icon: Scan,
      gradient: "from-orange-500 to-pink-500",
      image: "🔍",
      stats: "10M+ Products",
      benefits: ["Ingredient safety", "Allergy alerts", "Price comparison"],
    },
  ]

  const appBenefits = [
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Personalized alerts for restocks, sales, and new arrivals",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Crown,
      title: "VIP Access",
      description: "Early access to new collections and limited editions",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: ShoppingBag,
      title: "One-Tap Checkout",
      description: "Lightning-fast purchasing with saved preferences",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Beauty Community",
      description: "Connect with fellow beauty lovers and share tips",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Star,
      title: "Review & Rate",
      description: "Share experiences and help others make better choices",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Bank-level security for payments and personal data",
      color: "from-indigo-500 to-purple-600",
    },
  ]

  const reviews = [
    {
      name: "Sarah K.",
      role: "Beauty Influencer",
      rating: 5,
      text: "The AR try-on feature is incredible! Saved me from so many wrong purchases. It's like having a virtual makeup artist.",
      avatar: "S",
      verified: true,
      likes: 234,
    },
    {
      name: "Emma L.",
      role: "Skincare Enthusiast",
      rating: 5,
      text: "Love the personalized recommendations. The app knows my style better than I do! The AI is surprisingly accurate.",
      avatar: "E",
      verified: true,
      likes: 189,
    },
    {
      name: "Olivia M.",
      role: "Makeup Artist",
      rating: 5,
      text: "App-exclusive deals are amazing. I save so much money shopping through the app. The scanner feature is a game-changer!",
      avatar: "O",
      verified: true,
      likes: 156,
    },
  ]

  const handleDownload = (platform) => {
    setShowNotification(true)
    // Here you would typically redirect to the app store
    console.log(`Downloading for ${platform}`)
  }

  return (
    <div className="min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Enhanced Header */}
        <Fade in={isVisible} timeout={1000}>
          <div className="text-center mb-16">
            <Chip
              icon={<Sparkles className="w-4 h-4 animate-pulse" />}
              label="Download Our Award-Winning App"
              variant="outlined"
              className="!border-pink-300 !text-pink-600 !mb-6 !font-medium"
            />

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Beauty in Your Pocket
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up delay-200">
              Experience the future of beauty shopping with our award-winning mobile app. Get exclusive features,
              AI-powered recommendations, and unbeatable deals that transform your beauty routine.
            </p>

            {/* Enhanced App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Tooltip title="Download for iPhone and iPad">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Apple className="w-5 h-5" />}
                  endIcon={<Download className="w-4 h-4" />}
                  onMouseEnter={() => setHoveredButton("ios")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handleDownload("iOS")}
                  className={`!bg-black !text-white !px-8 !py-4 !rounded-2xl !font-semibold !text-lg !transition-all !duration-300 !shadow-lg ${
                    hoveredButton === "ios" ? "!transform !scale-105 !shadow-xl !bg-gray-800" : ""
                  }`}
                >
                  App Store
                </Button>
              </Tooltip>

              <Tooltip title="Download for Android devices">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Play className="w-5 h-5" />}
                  endIcon={<Download className="w-4 h-4" />}
                  onMouseEnter={() => setHoveredButton("android")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handleDownload("Android")}
                  className={`!bg-green-600 !text-white !px-8 !py-4 !rounded-2xl !font-semibold !text-lg !transition-all !duration-300 !shadow-lg ${
                    hoveredButton === "android" ? "!transform !scale-105 !shadow-xl !bg-green-700" : ""
                  }`}
                >
                  Google Play
                </Button>
              </Tooltip>
            </div>

            {/* Enhanced User Stats */}
            <div className="flex items-center justify-center gap-8 text-center flex-wrap">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg p-4 rounded-2xl">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <Rating value={4.8} readOnly precision={0.1} size="small" />
                <div className="text-sm text-gray-600">App Rating</div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-lg p-4 rounded-2xl">
                <div className="text-2xl font-bold text-gray-900">{(downloadCount / 1000).toFixed(0)}K+</div>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  className="!h-1 !rounded-full !mt-1"
                  sx={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                />
                <div className="text-sm text-gray-600">Downloads</div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-lg p-4 rounded-2xl">
                <AvatarGroup max={3} className="justify-center mb-1">
                  <Avatar className="!bg-pink-400 !w-8 !h-8">S</Avatar>
                  <Avatar className="!bg-purple-400 !w-8 !h-8">E</Avatar>
                  <Avatar className="!bg-rose-400 !w-8 !h-8">O</Avatar>
                </AvatarGroup>
                <div className="text-sm text-gray-600">Happy Users</div>
              </Card>
            </div>
          </div>
        </Fade>

        {/* Enhanced Main Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Enhanced Phone Mockups */}
          <Zoom in={isVisible} timeout={1200}>
            <div className="relative">
              <div className="flex justify-center gap-4">
                {/* Main Phone */}
                <div className="relative">
                  <div
                    className={`w-64 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl transition-all duration-500 ${
                      phoneAnimation === "transition" ? "scale-105 rotate-2" : ""
                    }`}
                  >
                    <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
                      {/* Enhanced Phone Screen Content */}
                      <div
                        className={`w-full h-full bg-gradient-to-br ${appFeatures[activeFeature].gradient} flex flex-col items-center justify-center text-white relative transition-all duration-500`}
                      >
                        <div className="text-6xl mb-4 animate-bounce">{appFeatures[activeFeature].image}</div>
                        <h3 className="text-xl font-bold mb-2">{appFeatures[activeFeature].title}</h3>
                        <p className="text-sm text-center px-4 opacity-90 mb-2">
                          {appFeatures[activeFeature].subtitle}
                        </p>
                        <Chip
                          label={appFeatures[activeFeature].stats}
                          size="small"
                          className="!bg-white/20 !text-white !backdrop-blur-sm"
                        />

                        {/* Enhanced Floating UI Elements */}
                        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse delay-100">
                          <Heart className="w-4 h-4" />
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse delay-200">
                          <Star className="w-4 h-4" />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse delay-300">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Floating Badges */}
                  <Badge badgeContent="NEW" color="secondary" className="absolute -top-2 -right-2 !z-10">
                    <div className="w-8 h-8"></div>
                  </Badge>

                  <Tooltip title="Award-winning app">
                    <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-2 shadow-lg animate-bounce">
                      <Award className="w-4 h-4 text-yellow-800" />
                    </div>
                  </Tooltip>
                </div>

                {/* Enhanced Secondary Phone */}
                <div className="w-48 h-72 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl p-2 shadow-xl mt-12 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <ShoppingBag className="w-8 h-8 mx-auto mb-2 animate-bounce" />
                      <p className="text-sm font-medium">Quick Shop</p>
                      <Chip label="1-Tap Buy" size="small" className="!bg-white/20 !text-white !mt-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-200 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-200 rounded-full opacity-60 animate-float-delayed"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-rose-200 rounded-full opacity-40 animate-pulse"></div>
            </div>
          </Zoom>

          {/* Enhanced Features List */}
          <div className="space-y-6">
            <div className="mb-8">
              <Chip
                icon={<Smartphone className="w-4 h-4" />}
                label="Revolutionary App Features"
                variant="filled"
                className="!bg-pink-100 !text-pink-700 !mb-4"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features at Your Fingertips
              </h2>
              <p className="text-gray-600 text-lg">
                Our mobile app brings cutting-edge technology to enhance your beauty shopping experience with AI-powered
                features.
              </p>
            </div>

            {appFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              const isActive = activeFeature === index

              return (
                <Card
                  key={feature.id}
                  className={`!p-6 !rounded-2xl !cursor-pointer !transition-all !duration-300 !transform ${
                    isActive
                      ? "!bg-white !shadow-lg !ring-2 !ring-pink-200 !scale-105"
                      : "!bg-white/60 hover:!bg-white/80 hover:!scale-102"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center ${
                        isActive ? "scale-110 animate-pulse" : ""
                      } transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                        {isActive && <CheckCircle className="w-5 h-5 text-green-500 animate-bounce" />}
                      </div>
                      <p className="text-pink-600 font-medium text-sm mb-2">{feature.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>

                      {/* Feature Benefits */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <Chip
                            key={benefitIndex}
                            label={benefit}
                            size="small"
                            variant="outlined"
                            className="!text-xs !h-6"
                          />
                        ))}
                      </div>

                      <Chip label={feature.stats} size="small" className="!bg-green-100 !text-green-800 !font-medium" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Enhanced App Benefits Grid */}
        <Fade in={isVisible} timeout={1500}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Reasons to Love Our App</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover additional benefits that make our mobile app the ultimate beauty companion for modern beauty
                enthusiasts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Zoom in={isVisible} timeout={1600 + index * 100} key={index}>
                    <Card className="!bg-white/80 !backdrop-blur-sm !shadow-lg hover:!shadow-xl !rounded-xl !transition-all !duration-300 !group !transform">
                      <CardContent className="!p-6">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </Zoom>
                )
              })}
            </div>
          </div>
        </Fade>

        {/* Enhanced Reviews Section */}
        <Fade in={isVisible} timeout={1800}>
          <Card className="!bg-white/60 !rounded-xl !backdrop-blur-sm !shadow-lg !mb-16">
            <CardContent className="!p-8 md:!p-12">
              <div className="text-center mb-12">
                <Chip
                  icon={<Star className="w-4 h-4" />}
                  label="User Reviews"
                  variant="outlined"
                  className="!border-yellow-300 !text-yellow-700 !mb-4"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What App Users Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Real feedback from beauty enthusiasts who love using our mobile app and have transformed their beauty
                  routines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <Card
                    key={index}
                    className="!bg-white/80 !shadow-md hover:!shadow-lg !transition-all !duration-300 !transform hover:!scale-105"
                  >
                    <CardContent className="!p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Rating value={review.rating} readOnly size="small" />
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Heart className="w-4 h-4" />
                          <span>{review.likes}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 italic leading-relaxed">"{review.text}"</p>

                      <div className="flex items-center gap-3">
                        <Avatar className="!bg-gradient-to-br !from-pink-400 !to-purple-500 !text-white !font-semibold">
                          {review.avatar}
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-gray-900">{review.name}</p>
                            {review.verified && (
                              <Tooltip title="Verified user">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              </Tooltip>
                            )}
                          </div>
                          <p className="text-gray-500 text-sm">{review.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </Fade>

        {/* Enhanced Final CTA Section */}
        <Fade in={isVisible} timeout={2000}>
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Smartphone className="w-8 h-8 animate-bounce" />
                <span className="font-semibold text-xl">Ready to Transform Your Beauty Routine?</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">Download Now & Get 20% Off</h2>

              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join half a million beauty lovers and unlock exclusive app features, AI-powered recommendations, and
                members-only deals that will revolutionize your beauty journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Apple className="w-5 h-5" />}
                  onClick={() => handleDownload("iOS")}
                  className="!bg-white !text-gray-900 !px-8 !py-4 !rounded-2xl !font-semibold !text-lg hover:!bg-gray-100 !shadow-lg hover:!shadow-xl !transform hover:!scale-105 !transition-all !duration-300"
                >
                  Download for iOS
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Play className="w-5 h-5" />}
                  onClick={() => handleDownload("Android")}
                  className="!border-white !text-white !px-8 !py-4 !rounded-2xl !font-semibold !text-lg hover:!bg-white/10 !transform hover:!scale-105 !transition-all !duration-300"
                >
                  Download for Android
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm opacity-80 flex-wrap">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>2-minute setup</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Secure & private</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gift className="w-4 h-4" />
                  <span>First-time bonus</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wand2 className="w-4 h-4" />
                  <span>AI-powered</span>
                </div>
              </div>
            </div>

            {/* Enhanced Background Decorations */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            <Sparkles className="absolute top-12 right-16 w-10 h-10 text-white/30 animate-pulse" />
            <Smartphone className="absolute bottom-16 left-24 w-8 h-8 text-white/30 animate-bounce delay-100" />
            <Flower2 className="absolute top-1/3 left-12 w-6 h-6 text-white/25 animate-spin-slow" />
            <Palette className="absolute bottom-1/3 right-12 w-7 h-7 text-white/25 animate-pulse delay-200" />
          </div>
        </Fade>

        {/* Floating Chat Button */}
        <Tooltip title="Chat with our app specialists">
          <Fab
            className="!fixed !bottom-6 !right-6 !bg-gradient-to-r !from-pink-500 !to-purple-600 !text-white hover:!shadow-xl !transform hover:!scale-110 !transition-all !duration-300"
            onClick={() => setShowNotification(true)}
          >
            <MessageCircle className="w-6 h-6" />
          </Fab>
        </Tooltip>
      </div>

      {/* Notification */}
      <Snackbar
        open={showNotification}
        autoHideDuration={4000}
        onClose={() => setShowNotification(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={() => setShowNotification(false)} severity="success" variant="filled">
          Thanks for your interest! Download our app to unlock exclusive beauty features and deals.
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
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  )
}
