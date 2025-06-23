// import { useState, useEffect } from "react";
// import {
//   Heart,
//   ShoppingBag,
//   Eye,
//   Sparkles,
//   Star,
//   Plus,
//   Minus,
//   Check,
//   ExternalLink,
// } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   Chip,
//   Tooltip,
//   Rating,
//   IconButton,
//   Fade,
// } from "@mui/material";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// // Product Card Component
// function ProductCard({ product }) {
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [isAddedToCart, setIsAddedToCart] = useState(false);

//   const navigate = useNavigate();

//   if (!product) return null;

//   const handleAddToCart = () => {
//     setIsAddedToCart(true);
//     setTimeout(() => setIsAddedToCart(false), 2000);
//     console.log(`Added ${quantity} of ${product.title} to cart`);
//   };

//   const handleWishlistToggle = () => {
//     setIsWishlisted(!isWishlisted);
//     console.log(
//       `${isWishlisted ? "Removed from" : "Added to"} wishlist:`,
//       product.title
//     );
//   };

//   const handleQuickView = () => {
//     console.log("Quick view for product:", product.id);
//   };

//   const handleViewDetails = () => {
//     console.log("View details for product:", product.id);
//     // navigate(`/products/${product.id}`);
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price);
//   };

//   const calculateDiscountedPrice = (price, discountPercentage) => {
//     return price - (price * discountPercentage) / 100;
//   };

//   const isInStock = product.stock > 0;
//   const isLowStock = product.stock > 0 && product.stock <= 10;
//   const discountedPrice =
//     product.discountPercentage > 0
//       ? calculateDiscountedPrice(product.price, product.discountPercentage)
//       : product.price;
//   const reviewCount = product.reviews?.length || 0;

//   return (
//     <Card
//       className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform !rounded-2xl overflow-hidden group relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Product Image Section */}
//       <div className="relative overflow-hidden">
//         {/* Badges */}
//         <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
//           {product.discountPercentage > 0 && (
//             <Chip
//               label={`${Math.round(product.discountPercentage)}% OFF`}
//               size="small"
//               className="bg-gradient-to-r from-red-500 to-pink-600 !text-white font-bold shadow-lg"
//             />
//           )}
//           {isLowStock && (
//             <Chip
//               label="LOW STOCK"
//               size="small"
//               className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg"
//             />
//           )}
//           {product.rating >= 4.5 && (
//             <Chip
//               label="TOP RATED"
//               size="small"
//               icon={<Star className="w-3 h-3" />}
//               className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg"
//             />
//           )}
//         </div>

//         {/* Action Buttons */}
//         <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
//           <Tooltip
//             title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//           >
//             <IconButton
//               onClick={handleWishlistToggle}
//               className={`bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 ${
//                 isWishlisted
//                   ? "!text-red-500 !bg-red-50 scale-110"
//                   : "text-gray-600 hover:text-red-500 hover:bg-red-50"
//               }`}
//             >
//               <Heart
//                 className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
//               />
//             </IconButton>
//           </Tooltip>

//           <Fade in={isHovered}>
//             <Tooltip title="Quick view">
//               <IconButton
//                 onClick={handleQuickView}
//                 className="bg-white/90 backdrop-blur-sm shadow-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
//               >
//                 <Eye className="w-5 h-5" />
//               </IconButton>
//             </Tooltip>
//           </Fade>
//         </div>

//         {/* Product Image */}
//         <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
//           <img
//             src={product.thumbnail || "/placeholder-product.jpg"}
//             alt={product.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />

//           {/* Overlay on hover */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
//               isHovered ? "opacity-100" : "opacity-0"
//             }`}
//           />

//           {/* Quick Add Button */}
//           <Fade in={isHovered}>
//             <div className="absolute bottom-4 left-4 right-4">
//               <button
//                 onClick={handleAddToCart}
//                 disabled={!isInStock || isAddedToCart}
//                 className={`w-full py-3 px-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
//                   isAddedToCart
//                     ? "bg-green-500 text-white"
//                     : isInStock
//                     ? "bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white hover:shadow-xl"
//                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 }`}
//               >
//                 {isAddedToCart ? (
//                   <>
//                     <Check className="w-5 h-5" />
//                     Added!
//                   </>
//                 ) : isInStock ? (
//                   <>
//                     <ShoppingBag className="w-5 h-5" />
//                     Quick Add
//                   </>
//                 ) : (
//                   "Out of Stock"
//                 )}
//               </button>
//             </div>
//           </Fade>
//         </div>
//       </div>

//       {/* Product Details */}
//       <CardContent className="p-6">
//         {/* Category & Brand */}
//         <div className="flex items-center justify-between mb-3">
//           <Chip
//             label={product.category}
//             size="small"
//             className="bg-pink-100 text-pink-700 font-medium capitalize"
//           />
//           <span className="text-sm text-gray-500 font-medium">
//             {product.brand}
//           </span>
//         </div>

//         {/* Product Title */}
//         <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-pink-600 transition-colors mb-3">
//           {product.title}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//           {product.description}
//         </p>

//         {/* Rating */}
//         <div className="flex items-center gap-2 mb-4">
//           <Rating
//             value={product.rating}
//             readOnly
//             precision={0.1}
//             size="small"
//           />
//           <span className="text-sm font-medium text-gray-900">
//             {product.rating.toFixed(1)}
//           </span>
//           {reviewCount > 0 && (
//             <span className="text-sm text-gray-500">
//               ({reviewCount} reviews)
//             </span>
//           )}
//         </div>

//         {/* Price */}
//         <div className="flex items-center gap-2 mb-6">
//           <span className="text-2xl font-bold text-gray-900">
//             {formatPrice(discountedPrice)}
//           </span>
//           {product.discountPercentage > 0 && (
//             <>
//               <span className="text-lg text-gray-500 line-through">
//                 {formatPrice(product.price)}
//               </span>
//               <Chip
//                 label={`Save ${Math.round(product.discountPercentage)}%`}
//                 size="small"
//                 className="bg-green-100 text-green-800 font-bold"
//               />
//             </>
//           )}
//         </div>

//         {/* Quantity Selector */}
//         <div className="flex items-center justify-center bg-gray-50 rounded-xl p-1 mb-4 w-fit mx-auto">
//           <button
//             onClick={() => setQuantity(Math.max(1, quantity - 1))}
//             className="p-2 hover:bg-white rounded-lg transition-colors"
//             disabled={quantity <= 1}
//           >
//             <Minus className="w-4 h-4" />
//           </button>
//           <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
//             {quantity}
//           </span>
//           <button
//             onClick={() => setQuantity(quantity + 1)}
//             className="p-2 hover:bg-white rounded-lg transition-colors"
//             disabled={quantity >= product.stock}
//           >
//             <Plus className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Action Buttons */}
//         <div className="space-y-3">
//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             disabled={!isInStock || isAddedToCart}
//             className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
//               isAddedToCart
//                 ? "bg-green-500 text-white shadow-lg"
//                 : isInStock
//                 ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105"
//                 : "bg-gray-200 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             {isAddedToCart ? (
//               <>
//                 <Check className="w-5 h-5" />
//                 Added to Cart!
//               </>
//             ) : isInStock ? (
//               <>
//                 <ShoppingBag className="w-5 h-5" />
//                 Add to Cart
//               </>
//             ) : (
//               "Out of Stock"
//             )}
//           </button>

//           <Link
//             to={`/products/${product.id}`}
//             target="_blank"
//             className="w-full py-3 px-4 rounded-xl font-semibold border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
//           >
//             <ExternalLink className="w-5 h-5" />
//             View Details
//           </Link>
//         </div>

//         {/* Stock Status */}
//         <div className="flex items-center justify-center mt-4 text-sm">
//           {isInStock ? (
//             isLowStock ? (
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
//                 <span className="text-orange-600 font-medium">
//                   Low Stock ({product.stock} left)
//                 </span>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-green-600 font-medium">
//                   In Stock ({product.stock} available)
//                 </span>
//               </div>
//             )
//           ) : (
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//               <span className="text-red-600 font-medium">Out of Stock</span>
//             </div>
//           )}
//         </div>
//       </CardContent>

//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500"></div>

//       {/* Floating Sparkles */}
//       <div
//         className={`absolute top-8 right-8 transition-opacity duration-300 ${
//           isHovered ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
//       </div>
//       <div
//         className={`absolute bottom-8 left-8 transition-opacity duration-500 ${
//           isHovered ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <Sparkles className="w-3 h-3 text-purple-400 animate-pulse delay-100" />
//       </div>
//     </Card>
//   );
// }

// // Main Product Cards Showcase Component
// export default function ProductCards() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "https://dummyjson.com/products?limit=12"
//         );
//         setProducts(response.data.products);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg
//               className="w-6 h-6 text-red-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <p className="text-red-500 mb-2">Error loading products</p>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Calculate stats
//   const totalProducts = products.length;
//   const discountedProducts = products.filter(
//     (product) => product.discountPercentage > 0
//   ).length;
//   const topRatedProducts = products.filter(
//     (product) => product.rating >= 4.0
//   ).length;
//   const inStockProducts = products.filter(
//     (product) => product.stock > 0
//   ).length;

//   return (
//     <div className="min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           {/* <div className="flex items-center justify-center gap-2 mb-4">
//             <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
//             <Chip
//               label="Premium Product Collection"
//               className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium"
//             />
//           </div> */}

//           {/* <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-4">
//             Product Cards Showcase
//           </h1>
//           <p className="text-gray-600 mb-8 text-lg">
//             Beautiful product cards with {totalProducts} real products from our API
//           </p> */}

//           {/* Stats */}
//           {/* <div className="flex justify-center gap-8 text-sm text-gray-600 mb-8 flex-wrap">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//               <span className="font-semibold text-pink-600">{totalProducts}</span> Total Products
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               <span className="font-semibold text-green-600">{discountedProducts}</span> On Sale
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//               <span className="font-semibold text-yellow-600">{topRatedProducts}</span> Top Rated
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//               <span className="font-semibold text-blue-600">{inStockProducts}</span> In Stock
//             </div>
//           </div> */}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={{
//                 ...product,
//                 availabilityStatus:
//                   product.stock > 0 ? "In Stock" : "Out of Stock",
//                 reviews: product.reviews || [],
//               }}
//             />
//           ))}
//         </div>

//         {/* Additional Info Section */}
//         <div className="mt-16 text-center">
//           <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               Product Card Features
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
//               <div className="flex items-center gap-3">
//                 <Heart className="w-5 h-5 text-pink-500" />
//                 <span>Interactive wishlist functionality</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <ShoppingBag className="w-5 h-5 text-purple-500" />
//                 <span>Smooth add to cart experience</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Eye className="w-5 h-5 text-blue-500" />
//                 <span>Quick view product details</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <ExternalLink className="w-5 h-5 text-green-500" />
//                 <span>Detailed product information</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Star className="w-5 h-5 text-yellow-500" />
//                 <span>Dynamic rating display</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Check className="w-5 h-5 text-green-500" />
//                 <span>Real-time stock status</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export { ProductCard };

import { useState, useEffect } from "react"
import { Heart, ShoppingBag, Eye, Sparkles, Star, Plus, Minus, Check, ExternalLink } from "lucide-react"
import { Card, CardContent, Chip, Tooltip, Rating, IconButton, Fade } from "@mui/material"
import axios from "axios"
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

// Product Card Component
function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const { addToCart, cart } = useCart()

  if (!product) return null

  const handleAddToCart = () => {
    console.log("🛒 Add to cart clicked for:", product.title)
    console.log("🛒 Product data:", product)
    console.log("🛒 Quantity:", quantity)

    // Add product to cart using context
    addToCart(product, quantity)

    // Show success feedback
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)

    console.log("🛒 Cart after adding:", cart)
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
    console.log(`${isWishlisted ? "Removed from" : "Added to"} wishlist:`, product.title)
  }

  const handleQuickView = () => {
    console.log("Quick view for product:", product.id)
  }

  const handleViewDetails = () => {
    console.log("View details for product:", product.id)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  const calculateDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage) / 100
  }

  const isInStock = product.stock > 0
  const isLowStock = product.stock > 0 && product.stock <= 10
  const discountedPrice =
    product.discountPercentage > 0 ? calculateDiscountedPrice(product.price, product.discountPercentage) : product.price
  const reviewCount = product.reviews?.length || 0

  return (
    <Card
      className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform !rounded-2xl overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Section */}
      <div className="relative overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
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

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <Tooltip title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}>
            <IconButton
              onClick={handleWishlistToggle}
              className={`bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 ${
                isWishlisted ? "!text-red-500 !bg-red-50 scale-110" : "text-gray-600 hover:text-red-500 hover:bg-red-50"
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
            </IconButton>
          </Tooltip>

          <Fade in={isHovered}>
            <Tooltip title="Quick view">
              <IconButton
                onClick={handleQuickView}
                className="bg-white/90 backdrop-blur-sm shadow-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
              </IconButton>
            </Tooltip>
          </Fade>
        </div>

        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
          <img
            src={product.thumbnail || "/placeholder.svg?height=300&width=300"}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Quick Add Button */}
          <Fade in={isHovered}>
            <div className="absolute bottom-4 left-4 right-4">
              <button
                onClick={handleAddToCart}
                disabled={!isInStock || isAddedToCart}
                className={`w-full py-3 px-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isAddedToCart
                    ? "bg-green-500 text-white"
                    : isInStock
                      ? "bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isAddedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added!
                  </>
                ) : isInStock ? (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Quick Add
                  </>
                ) : (
                  "Out of Stock"
                )}
              </button>
            </div>
          </Fade>
        </div>
      </div>

      {/* Product Details */}
      <CardContent className="p-6">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-3">
          <Chip label={product.category} size="small" className="bg-pink-100 text-pink-700 font-medium capitalize" />
          <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
        </div>

        {/* Product Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-pink-600 transition-colors mb-3">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <Rating value={product.rating} readOnly precision={0.1} size="small" />
          <span className="text-sm font-medium text-gray-900">{product.rating.toFixed(1)}</span>
          {reviewCount > 0 && <span className="text-sm text-gray-500">({reviewCount} reviews)</span>}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold text-gray-900">{formatPrice(discountedPrice)}</span>
          {product.discountPercentage > 0 && (
            <>
              <span className="text-lg text-gray-500 line-through">{formatPrice(product.price)}</span>
              <Chip
                label={`Save ${Math.round(product.discountPercentage)}%`}
                size="small"
                className="bg-green-100 text-green-800 font-bold"
              />
            </>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-1 mb-4 w-fit mx-auto">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 hover:bg-white rounded-lg transition-colors"
            disabled={quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 hover:bg-white rounded-lg transition-colors"
            disabled={quantity >= product.stock}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!isInStock || isAddedToCart}
            className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              isAddedToCart
                ? "bg-green-500 text-white shadow-lg"
                : isInStock
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isAddedToCart ? (
              <>
                <Check className="w-5 h-5" />
                Added to Cart!
              </>
            ) : isInStock ? (
              <>
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </>
            ) : (
              "Out of Stock"
            )}
          </button>

          {/* View Details Button */}
          <Link to={`/products/:${product.id}`} target="blank"
            onClick={handleViewDetails}
            className="w-full py-3 px-4 rounded-xl font-semibold border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Details
          </Link>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-center mt-4 text-sm">
          {isInStock ? (
            isLowStock ? (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-600 font-medium">Low Stock ({product.stock} left)</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium">In Stock ({product.stock} available)</span>
              </div>
            )
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-red-600 font-medium">Out of Stock</span>
            </div>
          )}
        </div>
      </CardContent>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500"></div>

      {/* Floating Sparkles */}
      <div
        className={`absolute top-8 right-8 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
      </div>
      <div
        className={`absolute bottom-8 left-8 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Sparkles className="w-3 h-3 text-purple-400 animate-pulse delay-100" />
      </div>
    </Card>
  )
}

// Main Product Cards Showcase Component
export default function ProductCards() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { cart } = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=12")
        setProducts(response.data.products)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Debug: Log cart changes
  useEffect(() => {
    console.log("🛒 Cart updated in ProductCards:", cart)
  }, [cart])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-red-500 mb-2">Error loading products</p>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Calculate stats
  const totalProducts = products.length
  const discountedProducts = products.filter((product) => product.discountPercentage > 0).length
  const topRatedProducts = products.filter((product) => product.rating >= 4.0).length
  const inStockProducts = products.filter((product) => product.stock > 0).length

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Debug Panel - Remove this in production */}
        {/* <div className="mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">🛒 Cart Status</h3>
            <p className="text-blue-700">
              Items in cart: <strong>{cart.totalQuantity}</strong> | Total: <strong>${cart.total.toFixed(2)}</strong> |
              Products: <strong>{cart.totalProducts}</strong>
            </p>
          </div>
        </div> */}

        <div className="text-center mb-12">
          {/* <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
            <Chip
              label="Premium Product Collection"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Product Cards Showcase
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Beautiful product cards with {totalProducts} real products from our API
          </p> */}

          {/* Stats */}
          {/* <div className="flex justify-center gap-8 text-sm text-gray-600 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="font-semibold text-pink-600">{totalProducts}</span> Total Products
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-semibold text-green-600">{discountedProducts}</span> On Sale
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="font-semibold text-yellow-600">{topRatedProducts}</span> Top Rated
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-semibold text-blue-600">{inStockProducts}</span> In Stock
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                availabilityStatus: product.stock > 0 ? "In Stock" : "Out of Stock",
                reviews: product.reviews || [],
              }}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Card Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-500" />
                <span>Interactive wishlist functionality</span>
              </div>
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-purple-500" />
                <span>Smooth add to cart experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-blue-500" />
                <span>Quick view product details</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-green-500" />
                <span>Detailed product information</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Dynamic rating display</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Real-time stock status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductCard }
