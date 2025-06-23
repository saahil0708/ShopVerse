// import {
//   Sparkles,
//   ArrowUpRight,
//   Heart,
//   Star,
//   Shield,
//   Truck,
//   Gift,
//   Crown,
//   Flower2,
//   ShoppingBag,
//   Award,
//   Clock,
//   Users,
//   ThumbsUp,
//   Zap,
//   CheckCircle,
//   Gem,
//   Headphones,
//   RefreshCw
// } from "lucide-react";

// import { useState } from "react";

// export default function WhyShopWithUs() {
//   const [hoveredFeature, setHoveredFeature] = useState(null);

//   const features = [
//     {
//       id: 1,
//       title: "Premium Quality",
//       subtitle: "Only the finest products",
//       description: "We curate only the highest quality beauty products from trusted brands worldwide. Every item is carefully selected and tested.",
//       icon: Crown,
//       gradient: "from-purple-500 to-pink-600",
//       bgGradient: "from-purple-50 to-pink-50",
//       stats: "100% Authentic",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Free Shipping",
//       subtitle: "On orders over $50",
//       description: "Enjoy complimentary shipping on all orders above $50. Fast, secure delivery right to your doorstep.",
//       icon: Truck,
//       gradient: "from-emerald-400 to-teal-500",
//       bgGradient: "from-emerald-50 to-teal-50",
//       stats: "2-3 Days Delivery"
//     },
//     {
//       id: 3,
//       title: "Expert Reviews",
//       subtitle: "Trusted recommendations",
//       description: "Our beauty experts test and review every product to help you make informed decisions about your purchases.",
//       icon: Award,
//       gradient: "from-orange-400 to-pink-500",
//       bgGradient: "from-orange-50 to-pink-50",
//       stats: "1000+ Reviews"
//     },
//     {
//       id: 4,
//       title: "24/7 Support",
//       subtitle: "Always here to help",
//       description: "Our dedicated customer service team is available around the clock to assist with any questions or concerns.",
//       icon: Headphones,
//       gradient: "from-blue-400 to-purple-500",
//       bgGradient: "from-blue-50 to-purple-50",
//       stats: "Live Chat Available"
//     },
//     {
//       id: 5,
//       title: "Easy Returns",
//       subtitle: "30-day guarantee",
//       description: "Not satisfied? Return any product within 30 days for a full refund. No questions asked, hassle-free process.",
//       icon: RefreshCw,
//       gradient: "from-rose-400 to-pink-600",
//       bgGradient: "from-rose-50 to-pink-50",
//       stats: "100% Money Back"
//     },
//     {
//       id: 6,
//       title: "Loyalty Rewards",
//       subtitle: "Earn with every purchase",
//       description: "Join our rewards program and earn points with every purchase. Redeem for exclusive discounts and free products.",
//       icon: Gift,
//       gradient: "from-violet-400 to-purple-600",
//       bgGradient: "from-violet-50 to-purple-50",
//       stats: "Up to 15% Back"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah M.",
//       rating: 5,
//       text: "The product quality is outstanding! I've never been disappointed with any purchase.",
//       avatar: "from-pink-400 to-rose-500"
//     },
//     {
//       name: "Emily R.",
//       rating: 5,
//       text: "Fast shipping and amazing customer service. My go-to beauty destination!",
//       avatar: "from-purple-400 to-pink-500"
//     },
//     {
//       name: "Jessica L.",
//       rating: 5,
//       text: "Love the expert recommendations. They really know their products!",
//       avatar: "from-rose-400 to-pink-600"
//     }
//   ];

//   const stats = [
//     { number: "2M+", label: "Happy Customers", icon: Users },
//     { number: "4.9", label: "Average Rating", icon: Star },
//     { number: "500K+", label: "Products Sold", icon: ShoppingBag },
//     { number: "99%", label: "Satisfaction Rate", icon: ThumbsUp }
//   ];

//   return (
//     <div className="min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <Sparkles className="w-6 h-6 text-pink-500" />
//             <span className="text-gray-600 font-medium">The Beauty Difference</span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Why Shop With Us?
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Discover why millions of beauty enthusiasts choose us for their skincare and makeup needs. 
//             We're committed to delivering exceptional products and unmatched service.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => {
//             const IconComponent = stat.icon;
//             return (
//               <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
//                 <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <IconComponent className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
//                 <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {features.map((feature) => {
//             const IconComponent = feature.icon;
//             const isHovered = hoveredFeature === feature.id;
            
//             return (
//               <div
//                 key={feature.id}
//                 className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
//                   feature.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-pink-200' : ''
//                 }`}
//                 onMouseEnter={() => setHoveredFeature(feature.id)}
//                 onMouseLeave={() => setHoveredFeature(null)}
//               >
//                 {/* Featured Badge */}
//                 {feature.featured && (
//                   <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                     <Star className="w-3 h-3 fill-current" />
//                     Most Popular
//                   </div>
//                 )}

//                 {/* Icon Section */}
//                 <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   <IconComponent className="w-10 h-10 text-white" />
//                 </div>

//                 {/* Content */}
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-1">
//                       {feature.title}
//                     </h3>
//                     <p className="text-pink-600 font-medium text-lg">
//                       {feature.subtitle}
//                     </p>
//                   </div>

//                   <p className="text-gray-600 leading-relaxed">
//                     {feature.description}
//                   </p>

//                   <div className="flex items-center justify-between pt-4">
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-4 h-4 text-green-500" />
//                       <span className="text-sm text-gray-700 font-medium">
//                         {feature.stats}
//                       </span>
//                     </div>
                    
//                     <ArrowUpRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
//                       isHovered ? 'rotate-45 scale-110 text-pink-500' : ''
//                     }`} />
//                   </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                
//                 {/* Floating Icons */}
//                 <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
//                   <Sparkles className="w-4 h-4 text-pink-400" />
//                 </div>
//                 <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
//                   <Heart className="w-3 h-3 text-rose-400" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Testimonials Section */}
//         <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Heart className="w-5 h-5 text-pink-500" />
//               <span className="text-gray-600 font-medium">Customer Love</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               What Our Customers Say
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Don't just take our word for it. Here's what real customers have to say about their experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
                
//                 <p className="text-gray-700 mb-6 italic">
//                   "{testimonial.text}"
//                 </p>
                
//                 <div className="flex items-center gap-3">
//                   <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.avatar} rounded-full flex items-center justify-center`}>
//                     <span className="text-white font-semibold text-sm">
//                       {testimonial.name.charAt(0)}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                     <p className="text-gray-500 text-sm">Verified Customer</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA Section */}
//         <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
//           <div className="relative z-10">
//             <div className="flex items-center justify-center gap-2 mb-6">
//               <Gem className="w-8 h-8" />
//               <span className="font-semibold text-xl">Ready to Experience the Difference?</span>
//             </div>
            
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               Start Your Beauty Journey Today
//             </h2>
            
//             <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
//               Join millions of satisfied customers and discover why we're the trusted choice for premium beauty products.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-3 group">
//                 <ShoppingBag className="w-5 h-5" />
//                 Shop Now
//                 <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
//               </button>
              
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-3">
//                 <Users className="w-5 h-5" />
//                 Join Rewards Program
//               </button>
//             </div>
//           </div>

//           {/* Background Decorations */}
//           <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full"></div>
//           <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
//           <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/20 rounded-full"></div>
//           <div className="absolute top-16 right-20 w-6 h-6 bg-white/15 rounded-full"></div>
//           <Sparkles className="absolute top-12 right-16 w-10 h-10 text-white/30" />
//           <Crown className="absolute bottom-16 left-24 w-8 h-8 text-white/30" />
//           <Flower2 className="absolute top-1/3 left-12 w-6 h-6 text-white/25" />
//           <Zap className="absolute bottom-1/3 right-12 w-7 h-7 text-white/25" />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react"
import {
  Sparkles,
  ArrowUpRight,
  Heart,
  Star,
  Shield,
  Truck,
  Gift,
  Crown,
  Flower2,
  ShoppingBag,
  Award,
  Clock,
  Users,
  ThumbsUp,
  Zap,
  CheckCircle,
  Gem,
  Headphones,
  RefreshCw,
  TrendingUp,
  MessageCircle,
} from "lucide-react"
import {
  Tooltip,
  Fade,
  Zoom,
  Chip,
  LinearProgress,
  Card,
  CardContent,
  Avatar,
  Rating,
  Fab,
  Snackbar,
  Alert,
} from "@mui/material"

export default function EnhancedWhyShopWithUs() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    rating: 0,
    products: 0,
    satisfaction: 0,
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
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
        products: Math.floor(500000 * progress),
        satisfaction: Math.floor(99 * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      id: 1,
      title: "Premium Quality",
      subtitle: "Only the finest products",
      description:
        "We curate only the highest quality beauty products from trusted brands worldwide. Every item is carefully selected and tested by our experts.",
      icon: Crown,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      stats: "100% Authentic",
      featured: true,
      benefits: ["Cruelty-free certified", "Dermatologist tested", "Premium ingredients"],
      satisfaction: 98,
    },
    {
      id: 2,
      title: "Free Shipping",
      subtitle: "On orders over $50",
      description:
        "Enjoy complimentary shipping on all orders above $50. Fast, secure delivery right to your doorstep with tracking included.",
      icon: Truck,
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      stats: "2-3 Days Delivery",
      benefits: ["Express shipping available", "Eco-friendly packaging", "Real-time tracking"],
      satisfaction: 96,
    },
    {
      id: 3,
      title: "Expert Reviews",
      subtitle: "Trusted recommendations",
      description:
        "Our beauty experts and certified professionals test and review every product to help you make informed decisions.",
      icon: Award,
      gradient: "from-orange-400 to-pink-500",
      bgGradient: "from-orange-50 to-pink-50",
      stats: "1000+ Reviews",
      benefits: ["Professional testing", "Honest feedback", "Video tutorials"],
      satisfaction: 94,
    },
    {
      id: 4,
      title: "24/7 Support",
      subtitle: "Always here to help",
      description:
        "Our dedicated customer service team is available around the clock to assist with any questions, concerns, or beauty advice.",
      icon: Headphones,
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      stats: "Live Chat Available",
      benefits: ["Instant responses", "Beauty consultations", "Multi-language support"],
      satisfaction: 97,
    },
    {
      id: 5,
      title: "Easy Returns",
      subtitle: "30-day guarantee",
      description:
        "Not satisfied? Return any product within 30 days for a full refund. No questions asked, completely hassle-free process.",
      icon: RefreshCw,
      gradient: "from-rose-400 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      stats: "100% Money Back",
      benefits: ["Free return shipping", "Instant refunds", "No restocking fees"],
      satisfaction: 99,
    },
    {
      id: 6,
      title: "Loyalty Rewards",
      subtitle: "Earn with every purchase",
      description:
        "Join our exclusive rewards program and earn points with every purchase. Redeem for discounts, free products, and VIP perks.",
      icon: Gift,
      gradient: "from-violet-400 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      stats: "Up to 15% Back",
      benefits: ["Birthday rewards", "Early access", "Exclusive events"],
      satisfaction: 95,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Beauty Enthusiast",
      rating: 5,
      text: "The product quality is absolutely outstanding! I've never been disappointed with any purchase. The expert recommendations are spot-on.",
      avatar: "from-pink-400 to-rose-500",
      verified: true,
      date: "2 days ago",
    },
    {
      name: "Emily Rodriguez",
      role: "Skincare Specialist",
      rating: 5,
      text: "Fast shipping and amazing customer service. The 24/7 support really helped me choose the perfect products for my skin type.",
      avatar: "from-purple-400 to-pink-500",
      verified: true,
      date: "1 week ago",
    },
    {
      name: "Jessica Chen",
      role: "Makeup Artist",
      rating: 5,
      text: "Love the expert recommendations and authentic products. The loyalty program rewards are fantastic - I've saved so much money!",
      avatar: "from-rose-400 to-pink-600",
      verified: true,
      date: "3 days ago",
    },
    {
      name: "Amanda Thompson",
      role: "Content Creator",
      rating: 5,
      text: "The return policy gave me confidence to try new products. Everything arrived perfectly packaged and exactly as described.",
      avatar: "from-indigo-400 to-purple-500",
      verified: true,
      date: "5 days ago",
    },
  ]

  const stats = [
    {
      number: animatedStats.customers,
      displayNumber: `${(animatedStats.customers / 1000000).toFixed(1)}M+`,
      label: "Happy Customers",
      icon: Users,
      color: "from-pink-500 to-rose-600",
    },
    {
      number: animatedStats.rating,
      displayNumber: animatedStats.rating.toFixed(1),
      label: "Average Rating",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
    },
    {
      number: animatedStats.products,
      displayNumber: `${(animatedStats.products / 1000).toFixed(0)}K+`,
      label: "Products Sold",
      icon: ShoppingBag,
      color: "from-purple-500 to-pink-600",
    },
    {
      number: animatedStats.satisfaction,
      displayNumber: `${animatedStats.satisfaction}%`,
      label: "Satisfaction Rate",
      icon: ThumbsUp,
      color: "from-green-400 to-emerald-500",
    },
  ]

  const handleFeatureClick = (featureId) => {
    setShowNotification(true)
    // Here you could navigate to a detailed page or show more info
  }

  return (
    <div className="min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Enhanced Header */}
        <Fade in={isVisible} timeout={1000}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
              <Chip
                label="The Beauty Difference"
                className="bg-gradient-to-r from-pink-500 to-purple-600 !text-white font-medium"
              />
              <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Why Shop With Us?
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Discover why millions of beauty enthusiasts choose us for their skincare and makeup needs. We're committed
              to delivering exceptional products and unmatched service that transforms your beauty routine.
            </p>
          </div>
        </Fade>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Zoom in={isVisible} timeout={1000 + index * 200} key={index}>
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105">
                  <CardContent className="text-center p-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.displayNumber}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    {/* <div className="mt-2">
                      <LinearProgress
                        variant="determinate"
                        value={stat.number > 1000000 ? 100 : (stat.number / 1000000) * 100}
                        className="h-1 rounded-full"
                        sx={{
                          backgroundColor: "rgba(0,0,0,0.1)",
                          "& .MuiLinearProgress-bar": {
                            background: `linear-gradient(to right, ${stat.color.replace("from-", "").replace("to-", ", ")})`,
                          },
                        }}
                      />
                    </div> */}
                  </CardContent>
                </Card>
              </Zoom>
            )
          })}
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const isHovered = hoveredFeature === feature.id

            return (
              <Zoom in={isVisible} timeout={1200 + index * 150} key={feature.id}>
                <div
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:rotate-1 ${
                    feature.featured ? "md:col-span-2 lg:col-span-1 ring-2 ring-pink-200 hover:ring-pink-400" : ""
                  }`}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {feature.featured && (
                      <Chip
                        icon={<Star className="w-3 h-3 fill-current !text-white" />}
                        label="Most Popular"
                        size="small"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 !text-white animate-pulse"
                      />
                    )}
                    <Chip
                      label={`${feature.satisfaction}% Satisfaction`}
                      size="small"
                      className="bg-green-100 text-green-800"
                    />
                  </div>

                  {/* Enhanced Icon Section */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg ${
                      isHovered ? "animate-pulse" : ""
                    }`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Enhanced Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-pink-600 font-medium text-lg">{feature.subtitle}</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                    {/* Benefits List */}
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700 font-medium">{feature.stats}</span>
                        </div>
                      </div>

                      <Tooltip title="Learn more about this feature">
                        <ArrowUpRight
                          className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                            isHovered ? "rotate-45 scale-110 text-pink-500" : ""
                          }`}
                        />
                      </Tooltip>
                    </div>

                    {/* Satisfaction Progress */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Customer Satisfaction</span>
                        <span>{feature.satisfaction}%</span>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={feature.satisfaction}
                        className="h-2 rounded-full"
                        sx={{
                          backgroundColor: "rgba(0,0,0,0.1)",
                          "& .MuiLinearProgress-bar": {
                            background: `linear-gradient(to right, ${feature.gradient.replace("from-", "").replace("to-", ", ")})`,
                            borderRadius: "4px",
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10`}
                  ></div>

                  {/* Animated Floating Icons */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-40 transition-all duration-500 animate-float">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-40 transition-all duration-700 animate-float-delayed">
                    <Heart className="w-3 h-3 text-rose-400" />
                  </div>
                  <div className="absolute top-1/2 right-6 opacity-0 group-hover:opacity-30 transition-all duration-600 animate-bounce">
                    <Star className="w-3 h-3 text-yellow-400" />
                  </div>
                </div>
              </Zoom>
            )
          })}
        </div>

        {/* Enhanced Testimonials Section */}
        <Fade in={isVisible} timeout={1500}>
          <Card className="bg-white/60 backdrop-blur-sm shadow-lg mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
                  <Chip label="Customer Love" className="bg-pink-100 text-pink-800" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Don't just take our word for it. Here's what real customers have to say about their experience with
                  our products and service.
                </p>
              </div>

              {/* Featured Testimonial */}
              <div className="max-w-4xl mx-auto mb-8">
                <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Rating value={testimonials[currentTestimonial].rating} readOnly className="text-yellow-300" />
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <Avatar className={`w-12 h-12 bg-gradient-to-br ${testimonials[currentTestimonial].avatar}`}>
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </Avatar>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                          {testimonials[currentTestimonial].verified && (
                            <CheckCircle className="w-4 h-4 text-green-300" />
                          )}
                        </div>
                        <p className="text-white/80 text-sm">{testimonials[currentTestimonial].role}</p>
                        <p className="text-white/60 text-xs">{testimonials[currentTestimonial].date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <Card
                    key={index}
                    className={`bg-white/80 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      index === currentTestimonial ? "ring-2 ring-pink-400" : ""
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        <Rating value={testimonial.rating} readOnly size="small" />
                      </div>

                      <p className="text-gray-700 mb-6 italic text-sm">"{testimonial.text}"</p>

                      <div className="flex items-center gap-3">
                        <Avatar className={`w-10 h-10 bg-gradient-to-br ${testimonial.avatar}`}>
                          {testimonial.name.charAt(0)}
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                            {testimonial.verified && <CheckCircle className="w-3 h-3 text-green-500" />}
                          </div>
                          <p className="text-gray-500 text-xs">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-pink-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </Fade>

        {/* Enhanced Bottom CTA Section */}
        <Fade in={isVisible} timeout={2000}>
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Gem className="w-8 h-8 animate-bounce" />
                <span className="font-semibold text-xl">Ready to Experience the Difference?</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Beauty Journey Today</h2>

              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join millions of satisfied customers and discover why we're the trusted choice for premium beauty
                products that transform your routine.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Tooltip title="Browse our premium collection">
                  <button className="group bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Shop Now
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </Tooltip>

                <Tooltip title="Earn rewards with every purchase">
                  <button className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-3 transform hover:scale-105">
                    <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Join Rewards Program
                  </button>
                </Tooltip>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 text-white/80 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure Shopping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>

            {/* Enhanced Background Decorations */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-20 w-6 h-6 bg-white/15 rounded-full animate-bounce"></div>
            <Sparkles className="absolute top-12 right-16 w-10 h-10 text-white/30 animate-pulse" />
            <Crown className="absolute bottom-16 left-24 w-8 h-8 text-white/30 animate-bounce delay-100" />
            <Flower2 className="absolute top-1/3 left-12 w-6 h-6 text-white/25 animate-spin-slow" />
            <Zap className="absolute bottom-1/3 right-12 w-7 h-7 text-white/25 animate-pulse delay-200" />
          </div>
        </Fade>

        {/* Floating Chat Button */}
        <Tooltip title="Chat with our beauty experts">
          <Fab
            className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-600 !text-white hover:shadow-xl"
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
          Thanks for your interest! Our beauty experts are here to help you find the perfect products.
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
