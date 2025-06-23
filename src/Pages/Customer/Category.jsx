// import {
//   Sparkles,
//   ArrowUpRight,
//   Heart,
//   Star,
//   Palette,
//   Zap,
//   Gift,
//   Crown,
//   Flower2,
//   ShoppingBag,
//   Eye,
//   Droplets,
//   Sun,
//   Scissors,
//   Brush,
//   Gem
// } from "lucide-react";

// import { useState } from "react";

// export default function BeautyCategories() {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   const categories = [
//     {
//       id: 1,
//       title: "Skincare",
//       subtitle: "Glow & Radiance",
//       description: "Serums, moisturizers, cleansers",
//       icon: Droplets,
//       gradient: "from-pink-400 to-rose-500",
//       bgGradient: "from-pink-50 to-rose-50",
//       count: "120+ Products",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Makeup",
//       subtitle: "Color & Drama",
//       description: "Foundations, lipsticks, eyeshadows",
//       icon: Palette,
//       gradient: "from-purple-400 to-pink-500",
//       bgGradient: "from-purple-50 to-pink-50",
//       count: "200+ Products"
//     },
//     {
//       id: 3,
//       title: "Eyes",
//       subtitle: "Captivating Looks",
//       description: "Mascara, eyeliner, brow products",
//       icon: Eye,
//       gradient: "from-indigo-400 to-purple-500",
//       bgGradient: "from-indigo-50 to-purple-50",
//       count: "85+ Products"
//     },
//     {
//       id: 4,
//       title: "Sun Care",
//       subtitle: "Protection & Glow",
//       description: "Sunscreens, bronzers, self-tanners",
//       icon: Sun,
//       gradient: "from-orange-400 to-pink-500",
//       bgGradient: "from-orange-50 to-pink-50",
//       count: "45+ Products"
//     },
//     {
//       id: 5,
//       title: "Hair Care",
//       subtitle: "Lustrous & Healthy",
//       description: "Shampoos, treatments, styling",
//       icon: Scissors,
//       gradient: "from-emerald-400 to-teal-500",
//       bgGradient: "from-emerald-50 to-teal-50",
//       count: "75+ Products"
//     },
//     // {
//     //   id: 6,
//     //   title: "Tools & Brushes",
//     //   subtitle: "Professional Grade",
//     //   description: "Makeup brushes, applicators, tools",
//     //   icon: Brush,
//     //   gradient: "from-rose-400 to-pink-600",
//     //   bgGradient: "from-rose-50 to-pink-50",
//     //   count: "60+ Products"
//     // },
//     {
//       id: 7,
//       title: "Luxury Collection",
//       subtitle: "Premium Beauty",
//       description: "High-end brands, limited editions",
//       icon: Crown,
//       gradient: "from-violet-500 to-purple-600",
//       bgGradient: "from-violet-50 to-purple-50",
//       count: "30+ Products",
//       premium: true
//     },
//     {
//       id: 8,
//       title: "Fragrance",
//       subtitle: "Signature Scents",
//       description: "Perfumes, body mists, candles",
//       icon: Flower2,
//       gradient: "from-pink-500 to-rose-600",
//       bgGradient: "from-pink-50 to-rose-50",
//       count: "40+ Products"
//     },
//     {
//       id: 9,
//       title: "Wellness & Body",
//       subtitle: "Self-Care Essentials",
//       description: "Body lotions, bath products, oils",
//       icon: Sparkles,
//       gradient: "from-cyan-400 to-blue-500",
//       bgGradient: "from-cyan-50 to-blue-50",
//       count: "90+ Products"
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Sparkles className="w-6 h-6 text-pink-500" />
//             <span className="text-gray-600">Discover Your Beauty</span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             Beauty Categories
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our curated collection of premium beauty products across all categories
//           </p>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories.map((category) => {
//             const IconComponent = category.icon;
//             const isHovered = hoveredCategory === category.id;
            
//             return (
//               <div
//                 key={category.id}
//                 className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
//                   category.featured ? 'lg:col-span-2 lg:row-span-1' : ''
//                 } ${category.premium ? 'ring-2 ring-purple-200' : ''}`}
//                 onMouseEnter={() => setHoveredCategory(category.id)}
//                 onMouseLeave={() => setHoveredCategory(null)}
//               >
//                 {/* Premium Badge */}
//                 {category.premium && (
//                   <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                     <Crown className="w-3 h-3" />
//                     Premium
//                   </div>
//                 )}

//                 {/* Featured Badge */}
//                 {category.featured && (
//                   <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                     <Star className="w-3 h-3 fill-current" />
//                     Featured
//                   </div>
//                 )}

//                 {/* Icon Section */}
//                 <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <IconComponent className="w-10 h-10 text-white" />
//                 </div>

//                 {/* Content */}
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-1">
//                       {category.title}
//                     </h3>
//                     <p className="text-pink-600 font-medium">
//                       {category.subtitle}
//                     </p>
//                   </div>

//                   <p className="text-gray-600 leading-relaxed">
//                     {category.description}
//                   </p>

//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-500 font-medium">
//                       {category.count}
//                     </span>
                    
//                     <button className={`flex items-center gap-2 bg-gradient-to-r ${category.gradient} text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 ${
//                       isHovered ? 'px-6' : ''
//                     }`}>
//                       Shop Now
//                       <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
//                         isHovered ? 'rotate-45 scale-110' : ''
//                       }`} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                
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

//         {/* Bottom CTA Section */}
//         {/* <div className="mt-16 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
//           <div className="relative z-10">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Gift className="w-6 h-6" />
//               <span className="font-medium">Special Launch Offer</span>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Get 25% Off Your First Order
//             </h2>
            
//             <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
//               Join thousands of beauty enthusiasts and discover your perfect products today
//             </p>
            
//             <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-3 mx-auto group">
//               <ShoppingBag className="w-5 h-5" />
//               Start Shopping
//               <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
//             </button>
//           </div>

//           Background Decorations
//           <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full"></div>
//           <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full"></div>
//           <div className="absolute top-1/2 left-16 w-6 h-6 bg-white/20 rounded-full"></div>
//           <Sparkles className="absolute top-12 right-16 w-8 h-8 text-white/30" />
//           <Crown className="absolute bottom-12 left-20 w-6 h-6 text-white/30" />
//         </div> */}
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
  Palette,
  Crown,
  Flower2,
  Eye,
  Droplets,
  Sun,
  Scissors,
  Brush,
  TrendingUp,
  Filter,
  Search,
  Grid3X3,
  List,
} from "lucide-react"
import {
  Chip,
  Tooltip,
  Fade,
  Zoom,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Fab,
} from "@mui/material"

export default function EnhancedBeautyCategories() {
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filterAnchor, setFilterAnchor] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [favorites, setFavorites] = useState(new Set())
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [
    {
      id: 1,
      title: "Skincare",
      subtitle: "Glow & Radiance",
      description: "Serums, moisturizers, cleansers for healthy skin",
      icon: Droplets,
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      count: "120+ Products",
      featured: true,
      trending: true,
      discount: "Up to 30% off",
      tags: ["Anti-aging", "Hydrating", "Natural"],
      type: "skincare",
    },
    {
      id: 2,
      title: "Makeup",
      subtitle: "Color & Drama",
      description: "Foundations, lipsticks, eyeshadows for every look",
      icon: Palette,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      count: "200+ Products",
      trending: true,
      discount: "New arrivals",
      tags: ["Long-lasting", "Cruelty-free", "Vegan"],
      type: "makeup",
    },
    {
      id: 3,
      title: "Eyes",
      subtitle: "Captivating Looks",
      description: "Mascara, eyeliner, brow products for stunning eyes",
      icon: Eye,
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      count: "85+ Products",
      tags: ["Waterproof", "Volumizing", "Precision"],
      type: "makeup",
    },
    {
      id: 4,
      title: "Sun Care",
      subtitle: "Protection & Glow",
      description: "Sunscreens, bronzers, self-tanners for safe beauty",
      icon: Sun,
      gradient: "from-orange-400 to-pink-500",
      bgGradient: "from-orange-50 to-pink-50",
      count: "45+ Products",
      tags: ["SPF 50+", "Reef-safe", "Non-greasy"],
      type: "skincare",
    },
    {
      id: 5,
      title: "Hair Care",
      subtitle: "Lustrous & Healthy",
      description: "Shampoos, treatments, styling for gorgeous hair",
      icon: Scissors,
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      count: "75+ Products",
      tags: ["Sulfate-free", "Color-safe", "Repair"],
      type: "haircare",
    },
    {
      id: 6,
      title: "Tools & Brushes",
      subtitle: "Professional Grade",
      description: "Makeup brushes, applicators, tools for flawless application",
      icon: Brush,
      gradient: "from-rose-400 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      count: "60+ Products",
      tags: ["Synthetic", "Professional", "Easy-clean"],
      type: "tools",
    },
    {
      id: 7,
      title: "Luxury Collection",
      subtitle: "Premium Beauty",
      description: "High-end brands, limited editions for ultimate luxury",
      icon: Crown,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      count: "30+ Products",
      premium: true,
      tags: ["Limited Edition", "Luxury", "Exclusive"],
      type: "luxury",
    },
    {
      id: 8,
      title: "Fragrance",
      subtitle: "Signature Scents",
      description: "Perfumes, body mists, candles for your signature style",
      icon: Flower2,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      count: "40+ Products",
      tags: ["Long-lasting", "Floral", "Fresh"],
      type: "fragrance",
    },
    // {
    //   id: 9,
    //   title: "Wellness & Body",
    //   subtitle: "Self-Care Essentials",
    //   description: "Body lotions, bath products, oils for total wellness",
    //   icon: Sparkles,
    //   gradient: "from-cyan-400 to-blue-500",
    //   bgGradient: "from-cyan-50 to-blue-50",
    //   count: "90+ Products",
    //   tags: ["Organic", "Aromatherapy", "Moisturizing"],
    //   type: "wellness",
    // },
  ]

  const filterOptions = [
    { value: "all", label: "All Categories", count: categories.length },
    { value: "skincare", label: "Skincare", count: categories.filter((c) => c.type === "skincare").length },
    { value: "makeup", label: "Makeup", count: categories.filter((c) => c.type === "makeup").length },
    { value: "luxury", label: "Luxury", count: categories.filter((c) => c.type === "luxury").length },
    { value: "trending", label: "Trending", count: categories.filter((c) => c.trending).length },
  ]

  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter =
      selectedFilter === "all" ||
      category.type === selectedFilter ||
      (selectedFilter === "trending" && category.trending)
    return matchesSearch && matchesFilter
  })

  const toggleFavorite = (categoryId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(categoryId)) {
        newFavorites.delete(categoryId)
      } else {
        newFavorites.add(categoryId)
      }
      return newFavorites
    })
  }

  const handleFilterClick = (event) => {
    setFilterAnchor(event.currentTarget)
  }

  const handleFilterClose = () => {
    setFilterAnchor(null)
  }

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter)
    handleFilterClose()
  }

  return (
    <div className="min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Enhanced Header */}
        <Fade in={isVisible} timeout={800}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
              <Chip
                label="Discover Your Beauty"
                className="bg-gradient-to-r from-pink-500 to-purple-600 !text-white font-medium"
              />
              <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Beauty Categories
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Explore our curated collection of premium beauty products across all categories
            </p>

            {/* Enhanced Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <TextField
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Categories..."
                  variant="outlined"
                  className="flex-1 max-w-md !font-[Outfit]"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search className="w-5 h-5 text-gray-400" />
                      </InputAdornment>
                    ),
                    className: "bg-white/80 backdrop-blur-sm !rounded-full !font-[Outfit]",
                  }}
                />

                <div className="flex gap-2">
                  <Tooltip title="Filter categories">
                    <IconButton onClick={handleFilterClick} className="bg-white/80 backdrop-blur-sm hover:bg-white">
                      <Badge badgeContent={selectedFilter !== "all" ? 1 : 0} color="primary">
                        <Filter className="w-5 h-5" />
                      </Badge>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title={viewMode === "grid" ? "Switch to list view" : "Switch to grid view"}>
                    <IconButton
                      onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                      className="bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      {viewMode === "grid" ? <List className="w-5 h-5" /> : <Grid3X3 className="w-5 h-5" />}
                    </IconButton>
                  </Tooltip>
                </div>
              </div>

              {/* Filter Chips */}
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {filterOptions.map((option) => (
                  <Chip
                    key={option.value}
                    label={`${option.label} (${option.count})`}
                    onClick={() => setSelectedFilter(option.value)}
                    variant={selectedFilter === option.value ? "filled" : "outlined"}
                    className={`transition-all duration-300 ${
                      selectedFilter === option.value
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 !text-white"
                        : "hover:bg-pink-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Fade>

        {/* Enhanced Categories Grid */}
        <div
          className={`grid gap-8 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {filteredCategories.map((category, index) => {
            const IconComponent = category.icon
            const isHovered = hoveredCategory === category.id
            const isFavorite = favorites.has(category.id)

            return (
              <Zoom in={isVisible} timeout={1000 + index * 100} key={category.id}>
                <div
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:rotate-1 ${
                    category.featured ? "lg:col-span-2 lg:row-span-1" : ""
                  } ${category.premium ? "ring-2 ring-purple-200 hover:ring-purple-400" : ""} ${
                    viewMode === "list" ? "flex items-center gap-6 p-6" : ""
                  }`}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {category.premium && (
                      <Chip
                        icon={<Crown className="w-3 h-3 !text-white fill-current" />}
                        label="Premium"
                        size="small"
                        className="bg-gradient-to-r from-violet-500 to-purple-600 !text-white animate-pulse"
                      />
                    )}
                    {category.featured && (
                      <Chip
                        icon={<Star className="w-3 h-3 fill-current !text-white" />}
                        label="Featured"
                        size="small"
                        className="bg-gradient-to-r from-pink-500 to-rose-600 !text-white"
                      />
                    )}
                    {category.trending && (
                      <Chip
                        icon={<TrendingUp className="w-3 h-3 !text-white fill-current" />}
                        label="Trending"
                        size="small"
                        className="bg-gradient-to-r from-orange-500 to-pink-500 !text-white animate-bounce"
                      />
                    )}
                  </div>

                  {/* Favorite Button */}
                  <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(category.id)
                      }}
                      className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                    >
                      <Heart
                        className={`w-5 h-5 transition-all duration-300 ${
                          isFavorite ? "text-red-500 fill-current scale-110" : "text-gray-400 hover:text-red-400"
                        }`}
                      />
                    </IconButton>
                  </Tooltip>

                  {/* Enhanced Icon Section */}
                  <div className={`${viewMode === "list" ? "flex-shrink-0" : ""}`}>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg ${
                        isHovered ? "animate-pulse" : ""
                      }`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className={`space-y-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-pink-600 font-medium">{category.subtitle}</p>
                      {category.discount && (
                        <Chip label={category.discount} size="small" className="mt-2 bg-green-100 text-green-800" />
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed">{category.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {category.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          variant="outlined"
                          className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>

                    <div className={`flex items-center ${viewMode === "list" ? "justify-between" : "justify-between"}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 font-medium">{category.count}</span>
                        {category.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                      </div>

                      <button
                        className={`flex items-center gap-2 bg-gradient-to-r ${category.gradient} text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                          isHovered ? "px-6 shadow-xl" : ""
                        }`}
                      >
                        Shop Now
                        <ArrowUpRight
                          className={`w-4 h-4 transition-all duration-300 ${isHovered ? "rotate-45 scale-110" : ""}`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10`}
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

        {/* No Results State */}
        {filteredCategories.length === 0 && (
          <Fade in={true} timeout={500}>
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No categories found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedFilter("all")
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          </Fade>
        )}

        {/* Filter Menu */}
        <Menu
          anchorEl={filterAnchor}
          open={Boolean(filterAnchor)}
          onClose={handleFilterClose}
          PaperProps={{
            className: "bg-white/90 backdrop-blur-sm",
          }}
        >
          {filterOptions.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => handleFilterSelect(option.value)}
              className={selectedFilter === option.value ? "bg-pink-50" : ""}
            >
              <div className="flex items-center justify-between w-full">
                <span>{option.label}</span>
                <Chip label={option.count} size="small" />
              </div>
            </MenuItem>
          ))}
        </Menu>

        {/* Floating Action Button for Favorites */}
        {favorites.size > 0 && (
          <Fab
            className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-xl"
            onClick={() => console.log("View favorites:", Array.from(favorites))}
          >
            <Badge badgeContent={favorites.size} color="error">
              <Heart className="w-6 h-6" />
            </Badge>
          </Fab>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-5deg); }
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
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  )
}
