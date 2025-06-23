// import { useState, useEffect } from "react"
// import {
//   Heart,
//   ShoppingBag,
//   Star,
//   Sparkles,
//   Plus,
//   Minus,
//   Check,
//   Share2,
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   Shield,
//   Truck,
//   RotateCcw,
//   Award,
//   Users,
//   ThumbsUp,
//   MessageCircle,
//   Crown,
//   Palette,
//   Droplets,
//   Sun,
//   Scissors,
//   Flower2,
// } from "lucide-react"
// import { Card, CardContent, Chip, Rating, Tooltip, Fade } from "@mui/material"

// export default function ProductDetailPage({ productId = 1 }) {
//   const [product, setProduct] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)
//   const [quantity, setQuantity] = useState(1)
//   const [isWishlisted, setIsWishlisted] = useState(false)
//   const [isAddedToCart, setIsAddedToCart] = useState(false)
//   const [activeTab, setActiveTab] = useState("description")
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//     fetchProduct()
//   }, [productId])

//   const fetchProduct = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch(`https://dummyjson.com/products/${productId}`)
//       if (!response.ok) {
//         throw new Error("Product not found")
//       }
//       const data = await response.json()
//       setProduct(data)
//     } catch (err) {
//       setError(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleAddToCart = () => {
//     setIsAddedToCart(true)
//     setTimeout(() => setIsAddedToCart(false), 3000)
//     console.log(`Added ${quantity} of ${product.title} to cart`)
//   }

//   const handleWishlistToggle = () => {
//     setIsWishlisted(!isWishlisted)
//     console.log(`${isWishlisted ? "Removed from" : "Added to"} wishlist:`, product.title)
//   }

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: product.title,
//         text: product.description,
//         url: window.location.href,
//       })
//     } else {
//       navigator.clipboard.writeText(window.location.href)
//       alert("Product link copied to clipboard!")
//     }
//   }

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price)
//   }

//   const calculateDiscountedPrice = (price, discountPercentage) => {
//     return price - (price * discountPercentage) / 100
//   }

//   const getCategoryIcon = (category) => {
//     const icons = {
//       beauty: Sparkles,
//       fragrances: Flower2,
//       skincare: Droplets,
//       makeup: Palette,
//       suncare: Sun,
//       haircare: Scissors,
//       furniture: Crown,
//     }
//     return icons[category] || Sparkles
//   }

//   const getCategoryColor = (category) => {
//     const colors = {
//       beauty: "from-pink-500 to-purple-600",
//       fragrances: "from-purple-500 to-pink-600",
//       skincare: "from-blue-400 to-cyan-500",
//       makeup: "from-pink-500 to-rose-600",
//       suncare: "from-orange-500 to-yellow-500",
//       haircare: "from-green-500 to-teal-600",
//       furniture: "from-violet-600 to-purple-700",
//     }
//     return colors[category] || "from-pink-500 to-purple-600"
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading product details...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <span className="text-red-500 text-2xl">!</span>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     )
//   }

//   if (!product) return null

//   const isInStock = product.availabilityStatus === "In Stock"
//   const isLowStock = product.availabilityStatus === "Low Stock"
//   const discountedPrice =
//     product.discountPercentage > 0 ? calculateDiscountedPrice(product.price, product.discountPercentage) : product.price
//   const CategoryIcon = getCategoryIcon(product.category)
//   const categoryColor = getCategoryColor(product.category)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50">
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Back Button */}
//         <Fade in={isVisible} timeout={600}>
//           <button
//             onClick={() => window.history.back()}
//             className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors mb-8 group"
//           >
//             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//             <span className="font-medium">Back to Products</span>
//           </button>
//         </Fade>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
//           {/* Product Images */}
//           <Fade in={isVisible} timeout={800}>
//             <div className="space-y-4">
//               {/* Main Image */}
//               <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group">
//                 <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative">
//                   <img
//                     src={product.images?.[selectedImageIndex] || product.thumbnail}
//                     alt={product.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Image Navigation */}
//                   {product.images && product.images.length > 1 && (
//                     <>
//                       <button
//                         onClick={() =>
//                           setSelectedImageIndex(
//                             selectedImageIndex === 0 ? product.images.length - 1 : selectedImageIndex - 1,
//                           )
//                         }
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
//                       >
//                         <ChevronLeft className="w-5 h-5" />
//                       </button>
//                       <button
//                         onClick={() =>
//                           setSelectedImageIndex(
//                             selectedImageIndex === product.images.length - 1 ? 0 : selectedImageIndex + 1,
//                           )
//                         }
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
//                       >
//                         <ChevronRight className="w-5 h-5" />
//                       </button>
//                     </>
//                   )}

//                   {/* Badges */}
//                   <div className="absolute top-4 left-4 flex flex-col gap-2">
//                     {product.discountPercentage > 0 && (
//                       <Chip
//                         label={`${Math.round(product.discountPercentage)}% OFF`}
//                         size="small"
//                         className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold shadow-lg animate-pulse"
//                       />
//                     )}
//                     {isLowStock && (
//                       <Chip
//                         label="LOW STOCK"
//                         size="small"
//                         className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg"
//                       />
//                     )}
//                     {product.rating >= 4.5 && (
//                       <Chip
//                         label="TOP RATED"
//                         size="small"
//                         icon={<Star className="w-3 h-3" />}
//                         className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg"
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Thumbnail Images */}
//               {product.images && product.images.length > 1 && (
//                 <div className="flex gap-3 overflow-x-auto pb-2">
//                   {product.images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedImageIndex(index)}
//                       className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                         selectedImageIndex === index
//                           ? "border-pink-500 shadow-lg scale-105"
//                           : "border-gray-200 hover:border-pink-300"
//                       }`}
//                     >
//                       <img
//                         src={image || "/placeholder.svg"}
//                         alt={`${product.title} ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </Fade>

//           {/* Product Information */}
//           <Fade in={isVisible} timeout={1000}>
//             <div className="space-y-6">
//               {/* Category & Brand */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div
//                     className={`w-10 h-10 bg-gradient-to-r ${categoryColor} rounded-xl flex items-center justify-center`}
//                   >
//                     <CategoryIcon className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <Chip
//                       label={product.category}
//                       size="small"
//                       className="bg-pink-100 text-pink-700 font-medium capitalize mb-1"
//                     />
//                     <p className="text-sm text-gray-600 font-medium">{product.brand}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <Tooltip title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}>
//                     <button
//                       onClick={handleWishlistToggle}
//                       className={`p-3 rounded-xl transition-all duration-300 ${
//                         isWishlisted
//                           ? "bg-red-50 text-red-500 scale-110"
//                           : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500"
//                       }`}
//                     >
//                       <Heart className={`w-6 h-6 ${isWishlisted ? "fill-current" : ""}`} />
//                     </button>
//                   </Tooltip>
//                   <Tooltip title="Share product">
//                     <button
//                       onClick={handleShare}
//                       className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
//                     >
//                       <Share2 className="w-6 h-6" />
//                     </button>
//                   </Tooltip>
//                 </div>
//               </div>

//               {/* Product Title */}
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{product.title}</h1>

//               {/* Rating & Reviews */}
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <Rating value={product.rating} readOnly precision={0.1} />
//                   <span className="text-lg font-semibold text-gray-900">{product.rating.toFixed(1)}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <Users className="w-4 h-4" />
//                   <span className="text-sm">
//                     {product.reviews?.length || 0} review{(product.reviews?.length || 0) !== 1 ? "s" : ""}
//                   </span>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="flex items-center gap-3">
//                 <span className="text-4xl font-bold text-gray-900">{formatPrice(discountedPrice)}</span>
//                 {product.discountPercentage > 0 && (
//                   <>
//                     <span className="text-2xl text-gray-500 line-through">{formatPrice(product.price)}</span>
//                     <Chip
//                       label={`Save ${Math.round(product.discountPercentage)}%`}
//                       className="bg-green-100 text-green-800 font-bold"
//                     />
//                   </>
//                 )}
//               </div>

//               {/* Description */}
//               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

//               {/* Stock Status */}
//               <div className="flex items-center gap-2">
//                 {isInStock ? (
//                   <>
//                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-green-600 font-semibold">In Stock ({product.stock} available)</span>
//                   </>
//                 ) : isLowStock ? (
//                   <>
//                     <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
//                     <span className="text-orange-600 font-semibold">Low Stock ({product.stock} left)</span>
//                   </>
//                 ) : (
//                   <>
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <span className="text-red-600 font-semibold">Out of Stock</span>
//                   </>
//                 )}
//               </div>

//               {/* Quantity Selector */}
//               <div className="flex items-center gap-4">
//                 <span className="text-gray-700 font-medium">Quantity:</span>
//                 <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="p-3 hover:bg-gray-200 transition-colors"
//                     disabled={quantity <= 1}
//                   >
//                     <Minus className="w-5 h-5" />
//                   </button>
//                   <span className="px-6 py-3 font-semibold text-lg bg-white">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="p-3 hover:bg-gray-200 transition-colors"
//                     disabled={quantity >= product.stock}
//                   >
//                     <Plus className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="space-y-4">
//                 <button
//                   onClick={handleAddToCart}
//                   disabled={!isInStock || isAddedToCart}
//                   className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
//                     isAddedToCart
//                       ? "bg-green-500 text-white shadow-lg"
//                       : isInStock
//                         ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105"
//                         : "bg-gray-200 text-gray-500 cursor-not-allowed"
//                   }`}
//                 >
//                   {isAddedToCart ? (
//                     <>
//                       <Check className="w-6 h-6" />
//                       Added to Cart!
//                     </>
//                   ) : isInStock ? (
//                     <>
//                       <ShoppingBag className="w-6 h-6" />
//                       Add to Cart
//                     </>
//                   ) : (
//                     "Out of Stock"
//                   )}
//                 </button>

//                 {/* Trust Badges */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                   <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
//                     <Shield className="w-5 h-5 text-green-600" />
//                     <span className="text-sm font-medium text-gray-700">Secure</span>
//                   </div>
//                   <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
//                     <Truck className="w-5 h-5 text-blue-600" />
//                     <span className="text-sm font-medium text-gray-700">Free Ship</span>
//                   </div>
//                   <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
//                     <RotateCcw className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-gray-700">Returns</span>
//                   </div>
//                   <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
//                     <Award className="w-5 h-5 text-orange-600" />
//                     <span className="text-sm font-medium text-gray-700">Quality</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Fade>
//         </div>

//         {/* Product Details Tabs */}
//         <Fade in={isVisible} timeout={1200}>
//           <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
//             <div className="border-b border-gray-200">
//               <div className="flex overflow-x-auto">
//                 {["description", "reviews", "specifications"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-4 font-semibold capitalize whitespace-nowrap transition-all duration-300 ${
//                       activeTab === tab
//                         ? "text-pink-600 border-b-2 border-pink-600 bg-pink-50"
//                         : "text-gray-600 hover:text-pink-600 hover:bg-pink-25"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <CardContent className="p-8">
//               {activeTab === "description" && (
//                 <div className="space-y-6">
//                   <h3 className="text-2xl font-bold text-gray-900">Product Description</h3>
//                   <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-3">Product Details</h4>
//                       <ul className="space-y-2 text-gray-700">
//                         <li className="flex justify-between">
//                           <span>Brand:</span>
//                           <span className="font-medium">{product.brand}</span>
//                         </li>
//                         <li className="flex justify-between">
//                           <span>Category:</span>
//                           <span className="font-medium capitalize">{product.category}</span>
//                         </li>
//                         <li className="flex justify-between">
//                           <span>SKU:</span>
//                           <span className="font-medium">{product.sku || `SKU-${product.id}`}</span>
//                         </li>
//                         <li className="flex justify-between">
//                           <span>Weight:</span>
//                           <span className="font-medium">{product.weight || "N/A"}</span>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
//                       <ul className="space-y-2 text-gray-700">
//                         <li className="flex items-center gap-2">
//                           <Check className="w-4 h-4 text-green-500" />
//                           <span>Premium Quality</span>
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <Check className="w-4 h-4 text-green-500" />
//                           <span>Cruelty-Free</span>
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <Check className="w-4 h-4 text-green-500" />
//                           <span>Dermatologist Tested</span>
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <Check className="w-4 h-4 text-green-500" />
//                           <span>Long-Lasting Formula</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "reviews" && (
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
//                     <div className="flex items-center gap-2">
//                       <Rating value={product.rating} readOnly />
//                       <span className="font-semibold">{product.rating.toFixed(1)}</span>
//                     </div>
//                   </div>

//                   {product.reviews && product.reviews.length > 0 ? (
//                     <div className="space-y-4">
//                       {product.reviews.map((review, index) => (
//                         <Card key={index} className="bg-gray-50 border-0">
//                           <CardContent className="p-6">
//                             <div className="flex items-start justify-between mb-3">
//                               <div>
//                                 <h4 className="font-semibold text-gray-900">{review.reviewerName}</h4>
//                                 <Rating value={review.rating} readOnly size="small" />
//                               </div>
//                               <div className="flex items-center gap-1 text-gray-500 text-sm">
//                                 <ThumbsUp className="w-4 h-4" />
//                                 <span>Verified Purchase</span>
//                               </div>
//                             </div>
//                             <p className="text-gray-700">{review.comment}</p>
//                           </CardContent>
//                         </Card>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-8">
//                       <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                       <h4 className="text-xl font-semibold text-gray-600 mb-2">No Reviews Yet</h4>
//                       <p className="text-gray-500">Be the first to review this product!</p>
//                     </div>
//                   )}
//                 </div>
//               )}

//               {activeTab === "specifications" && (
//                 <div className="space-y-6">
//                   <h3 className="text-2xl font-bold text-gray-900">Specifications</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-4">General Information</h4>
//                       <div className="space-y-3">
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Product ID:</span>
//                           <span className="font-medium">{product.id}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Brand:</span>
//                           <span className="font-medium">{product.brand}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Category:</span>
//                           <span className="font-medium capitalize">{product.category}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Availability:</span>
//                           <span className="font-medium">{product.availabilityStatus}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-4">Product Details</h4>
//                       <div className="space-y-3">
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Weight:</span>
//                           <span className="font-medium">{product.weight || "N/A"}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Dimensions:</span>
//                           <span className="font-medium">
//                             {product.dimensions
//                               ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`
//                               : "N/A"}
//                           </span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Warranty:</span>
//                           <span className="font-medium">{product.warrantyInformation || "1 Year"}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-gray-200">
//                           <span className="text-gray-600">Shipping:</span>
//                           <span className="font-medium">{product.shippingInformation || "Free Shipping"}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </Fade>
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from "react";
import axios from "axios";
import {
  Heart,
  ShoppingBag,
  Star,
  Sparkles,
  Plus,
  Minus,
  Check,
  Share2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Shield,
  Truck,
  RotateCcw,
  Award,
  Users,
  ThumbsUp,
  MessageCircle,
  Crown,
  Palette,
  Droplets,
  Sun,
  Scissors,
  Flower2,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Chip, Rating, Tooltip, Fade } from "@mui/material";

export default function ProductDetailPage({ productId = 1 }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [isVisible, setIsVisible] = useState(false);

  const { productID } = useParams();

  useEffect(() => {
    setIsVisible(true);
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      setProduct(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3000);
    console.log(`Added ${quantity} of ${product.title} to cart`);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    console.log(`${isWishlisted ? "Removed from" : "Added to"} wishlist:`, product.title);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const calculateDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage) / 100;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      beauty: Sparkles,
      fragrances: Flower2,
      skincare: Droplets,
      makeup: Palette,
      suncare: Sun,
      haircare: Scissors,
      furniture: Crown,
    };
    return icons[category] || Sparkles;
  };

  const getCategoryColor = (category) => {
    const colors = {
      beauty: "from-pink-500 to-purple-600",
      fragrances: "from-purple-500 to-pink-600",
      skincare: "from-blue-400 to-cyan-500",
      makeup: "from-pink-500 to-rose-600",
      suncare: "from-orange-500 to-yellow-500",
      haircare: "from-green-500 to-teal-600",
      furniture: "from-violet-600 to-purple-700",
    };
    return colors[category] || "from-pink-500 to-purple-600";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">!</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!product) return null;

  const isInStock = product.stock > 0;
  const isLowStock = product.stock > 0 && product.stock <= 10;
  const discountedPrice =
    product.discountPercentage > 0 ? calculateDiscountedPrice(product.price, product.discountPercentage) : product.price;
  const CategoryIcon = getCategoryIcon(product.category);
  const categoryColor = getCategoryColor(product.category);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        {/* <Fade in={isVisible} timeout={600}>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Products</span>
          </button>
        </Fade> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <Fade in={isVisible} timeout={800}>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group">
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative">
                  <img
                    src={product.images?.[selectedImageIndex] || product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Image Navigation */}
                  {product.images && product.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setSelectedImageIndex(
                            selectedImageIndex === 0 ? product.images.length - 1 : selectedImageIndex - 1
                          )
                        }
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setSelectedImageIndex(
                            selectedImageIndex === product.images.length - 1 ? 0 : selectedImageIndex + 1
                          )
                        }
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.discountPercentage > 0 && (
                      <Chip
                        label={`${Math.round(product.discountPercentage)}% OFF`}
                        size="small"
                        className="bg-gradient-to-r from-red-500 to-pink-600 !text-white font-bold shadow-lg"
                      />
                    )}
                    {isLowStock && (
                      <Chip
                        label="LOW STOCK"
                        size="small"
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg"
                      />
                    )}
                    {product.rating >= 4.5 && (
                      <Chip
                        label="TOP RATED"
                        size="small"
                        icon={<Star className="w-3 h-3" />}
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImageIndex === index
                          ? "border-pink-500 shadow-lg scale-105"
                          : "border-gray-200 hover:border-pink-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Fade>

          {/* Product Information */}
          <Fade in={isVisible} timeout={1000}>
            <div className="space-y-6">
              {/* Category & Brand */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${categoryColor} rounded-xl flex items-center justify-center`}
                  >
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <Chip
                      label={product.category}
                      size="small"
                      className="bg-pink-100 text-pink-700 font-medium capitalize mb-1"
                    />
                    <p className="text-sm text-gray-600 font-medium">{product.brand}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Tooltip title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}>
                    <button
                      onClick={handleWishlistToggle}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isWishlisted
                          ? "bg-red-50 text-red-500 scale-110"
                          : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`w-6 h-6 ${isWishlisted ? "fill-current" : ""}`} />
                    </button>
                  </Tooltip>
                  <Tooltip title="Share product">
                    <button
                      onClick={handleShare}
                      className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
                    >
                      <Share2 className="w-6 h-6" />
                    </button>
                  </Tooltip>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{product.title}</h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Rating value={product.rating} readOnly precision={0.1} />
                  <span className="text-lg font-semibold text-gray-900">{product.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">
                    {product.reviews?.length || 0} review{(product.reviews?.length || 0) !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-gray-900">{formatPrice(discountedPrice)}</span>
                {product.discountPercentage > 0 && (
                  <>
                    <span className="text-2xl text-gray-500 line-through">{formatPrice(product.price)}</span>
                    <Chip
                      label={`Save ${Math.round(product.discountPercentage)}%`}
                      className="bg-green-100 text-green-800 font-bold"
                    />
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {isInStock ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-semibold">In Stock ({product.stock} available)</span>
                  </>
                ) : isLowStock ? (
                  <>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-orange-600 font-semibold">Low Stock ({product.stock} left)</span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-semibold">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-200 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-lg bg-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-200 transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!isInStock || isAddedToCart}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isAddedToCart
                      ? "bg-green-500 text-white shadow-lg"
                      : isInStock
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-6 h-6" />
                      Added to Cart!
                    </>
                  ) : isInStock ? (
                    <>
                      <ShoppingBag className="w-6 h-6" />
                      Add to Cart
                    </>
                  ) : (
                    "Out of Stock"
                  )}
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Secure</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Free Ship</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
                    <RotateCcw className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Returns</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Product Details Tabs */}
        <Fade in={isVisible} timeout={1200}>
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                {["description", "reviews", "specifications"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-semibold capitalize whitespace-nowrap transition-all duration-300 ${
                      activeTab === tab
                        ? "text-pink-600 border-b-2 border-pink-600 bg-pink-50"
                        : "text-gray-600 hover:text-pink-600 hover:bg-pink-25"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <CardContent className="p-8">
              {activeTab === "description" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Product Description</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Product Details</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>Brand:</span>
                          <span className="font-medium">{product.brand}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Category:</span>
                          <span className="font-medium capitalize">{product.category}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>SKU:</span>
                          <span className="font-medium">{`SKU-${product.id}`}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Weight:</span>
                          <span className="font-medium">N/A</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Premium Quality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Cruelty-Free</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Dermatologist Tested</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Long-Lasting Formula</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center gap-2">
                      <Rating value={product.rating} readOnly />
                      <span className="font-semibold">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="text-center py-8">
                    <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">No Reviews Yet</h4>
                    <p className="text-gray-500">Be the first to review this product!</p>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">General Information</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Product ID:</span>
                          <span className="font-medium">{product.id}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Brand:</span>
                          <span className="font-medium">{product.brand}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Category:</span>
                          <span className="font-medium capitalize">{product.category}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Availability:</span>
                          <span className="font-medium">{isInStock ? "In Stock" : "Out of Stock"}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Product Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Weight:</span>
                          <span className="font-medium">N/A</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="font-medium">N/A</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Warranty:</span>
                          <span className="font-medium">1 Year</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Shipping:</span>
                          <span className="font-medium">Free Shipping</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </Fade>
      </div>
    </div>
  );
}