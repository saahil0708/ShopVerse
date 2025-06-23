import { useState, useEffect, useRef } from "react"
import {
  Search,
  Grid3X3,
  List,
  Star,
  Sparkles,
  Crown,
  TrendingUp,
  Palette,
  Flower2,
  Droplets,
  Sun,
  Scissors,
  Eye,
  ChevronDown,
} from "lucide-react"
import {
  Button,
  Chip,
  TextField,
  InputAdornment,
  Card,
  Fade,
  Menu,
  MenuItem,
  Breadcrumbs,
  Link,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material"

export default function ProductsHeroSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [isVisible, setIsVisible] = useState(false)
  const [categoryAnchor, setCategoryAnchor] = useState(null)
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
      id: "all",
      name: "All Products",
      icon: Sparkles,
      count: 2500,
      color: "from-pink-500 to-purple-600",
    },
    {
      id: "skincare",
      name: "Skincare",
      icon: Droplets,
      count: 850,
      color: "from-blue-400 to-cyan-500",
      trending: true,
    },
    {
      id: "makeup",
      name: "Makeup",
      icon: Palette,
      count: 1200,
      color: "from-pink-500 to-rose-600",
      popular: true,
    },
    {
      id: "fragrance",
      name: "Fragrance",
      icon: Flower2,
      count: 320,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "haircare",
      name: "Hair Care",
      icon: Scissors,
      count: 280,
      color: "from-green-500 to-teal-600",
    },
    {
      id: "suncare",
      name: "Sun Care",
      icon: Sun,
      count: 150,
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: "eyes",
      name: "Eye Makeup",
      icon: Eye,
      count: 420,
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "luxury",
      name: "Luxury",
      icon: Crown,
      count: 180,
      color: "from-violet-600 to-purple-700",
      premium: true,
    },
  ]

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ]

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId)
    setCategoryAnchor(null)
  }

  const handleCategoryClick = (event) => {
    setCategoryAnchor(event.currentTarget)
  }

  return (
    <div className="" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb Navigation */}
        <Fade in={isVisible} timeout={600}>
          <Breadcrumbs className="mb-8" separator="›">
            <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-pink-600 transition-colors">
              Products
            </Link>
            <span className="text-pink-600 font-medium">
              {categories.find((cat) => cat.id === selectedCategory)?.name || "All Products"}
            </span>
          </Breadcrumbs>
        </Fade>

        {/* Hero Header */}
        <Fade in={isVisible} timeout={800}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
              <Chip
                label="Premium Beauty Collection"
                className="!bg-gradient-to-r !from-pink-500 !to-purple-600 !text-white !font-medium"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-6">
              Discover Your Perfect Beauty Match
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our curated collection of premium skincare, makeup, and beauty essentials from trusted brands.
            </p>
          </div>
        </Fade>

        {/* Search and Filter Bar */}
        <Fade in={isVisible} timeout={1000}>
          <Card className="!bg-white/80 !backdrop-blur-sm !shadow-lg !p-6 !rounded-3xl !mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <TextField
                  fullWidth
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for products, brands..."
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search className="w-5 h-5 text-gray-400" />
                      </InputAdornment>
                    ),
                    className: "!bg-white !rounded-2xl",
                  }}
                />
              </div>

              {/* Category Selector */}
              <Button
                onClick={handleCategoryClick}
                endIcon={<ChevronDown className="w-4 h-4" />}
                className="!bg-pink-100 !text-pink-700 !px-6 !py-3 !rounded-2xl !font-medium !whitespace-nowrap"
              >
                {categories.find((cat) => cat.id === selectedCategory)?.name || "All Products"}
              </Button>

              {/* Sort */}
              <FormControl size="small" className="!min-w-[150px]">
                <InputLabel>Sort by</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="Sort by"
                  className="!bg-white !rounded-xl"
                >
                  {sortOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <Button
                  onClick={() => setViewMode("grid")}
                  className={`!min-w-0 !p-2 !rounded-xl !transition-all ${
                    viewMode === "grid" ? "!bg-white !shadow-sm" : "!bg-transparent"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setViewMode("list")}
                  className={`!min-w-0 !p-2 !rounded-xl !transition-all ${
                    viewMode === "list" ? "!bg-white !shadow-sm" : "!bg-transparent"
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </Fade>

        {/* Category Pills */}
        <Fade in={isVisible} timeout={1200}>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => {
                const IconComponent = category.icon
                const isSelected = selectedCategory === category.id

                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`!flex !items-center !gap-2 !px-4 !py-2 !rounded-2xl !transition-all !duration-300 !transform hover:!scale-105 ${
                      isSelected
                        ? `!bg-gradient-to-r ${category.color} !text-white !shadow-lg`
                        : "!bg-white/80 !text-gray-700 hover:!bg-white !shadow-md"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                    <Chip
                      label={category.count}
                      size="small"
                      className={`!text-xs !h-5 ${
                        isSelected ? "!bg-white/20 !text-white" : "!bg-gray-100 !text-gray-600"
                      }`}
                    />
                    {category.trending && <TrendingUp className="w-3 h-3 text-orange-500" />}
                    {category.popular && <Star className="w-3 h-3 text-yellow-500" />}
                    {category.premium && <Crown className="w-3 h-3 text-purple-500" />}
                  </Button>
                )
              })}
            </div>
          </div>
        </Fade>

        {/* Results Summary */}
        <Fade in={isVisible} timeout={1400}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {categories.find((cat) => cat.id === selectedCategory)?.name || "All Products"}
              </h2>
              <p className="text-gray-600">
                Showing {categories.find((cat) => cat.id === selectedCategory)?.count || 2500} products
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* Category Menu */}
      <Menu
        anchorEl={categoryAnchor}
        open={Boolean(categoryAnchor)}
        onClose={() => setCategoryAnchor(null)}
        PaperProps={{
          className: "!bg-white/90 !backdrop-blur-sm !shadow-xl !rounded-2xl !mt-2",
        }}
      >
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <MenuItem
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`!flex !items-center !gap-3 !px-4 !py-3 ${
                selectedCategory === category.id ? "!bg-pink-50" : ""
              }`}
            >
              <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                <IconComponent className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} products</div>
              </div>
              {category.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
              {category.popular && <Star className="w-4 h-4 text-yellow-500" />}
              {category.premium && <Crown className="w-4 h-4 text-purple-500" />}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
