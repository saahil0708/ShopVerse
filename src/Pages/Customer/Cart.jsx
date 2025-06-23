import { useState, useEffect } from "react"
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Heart,
  ArrowLeft,
  Gift,
  Truck,
  Shield,
  CreditCard,
  Tag,
  Percent,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Sparkles,
  Crown,
  Package,
  MapPin,
  Edit3,
} from "lucide-react"
import { Card, CardContent, Chip, Rating, Tooltip, Fade, LinearProgress } from "@mui/material"

export default function CartPage({ cartId = 1 }) {
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [updatingItems, setUpdatingItems] = useState(new Set())

  useEffect(() => {
    setIsVisible(true)
    fetchCart()
  }, [cartId])

  const fetchCart = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/carts/${cartId}`)
      if (!response.ok) {
        throw new Error("Cart not found")
      }
      const data = await response.json()
      setCart(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return

    setUpdatingItems((prev) => new Set(prev).add(productId))

    // Simulate API call delay
    setTimeout(() => {
      setCart((prevCart) => ({
        ...prevCart,
        products: prevCart.products.map((product) =>
          product.id === productId
            ? { ...product, quantity: newQuantity, total: product.price * newQuantity }
            : product,
        ),
        total: prevCart.products.reduce(
          (sum, product) => (product.id === productId ? sum + product.price * newQuantity : sum + product.total),
          0,
        ),
        totalProducts: prevCart.products.reduce(
          (sum, product) => (product.id === productId ? sum + newQuantity : sum + product.quantity),
          0,
        ),
        totalQuantity: prevCart.products.reduce(
          (sum, product) => (product.id === productId ? sum + newQuantity : sum + product.quantity),
          0,
        ),
      }))
      setUpdatingItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(productId)
        return newSet
      })
    }, 500)
  }

  const removeItem = (productId) => {
    setCart((prevCart) => {
      const updatedProducts = prevCart.products.filter((product) => product.id !== productId)
      return {
        ...prevCart,
        products: updatedProducts,
        total: updatedProducts.reduce((sum, product) => sum + product.total, 0),
        totalProducts: updatedProducts.length,
        totalQuantity: updatedProducts.reduce((sum, product) => sum + product.quantity, 0),
      }
    })
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "beauty20") {
      setAppliedPromo({
        code: "BEAUTY20",
        discount: 20,
        amount: cart.total * 0.2,
      })
      setPromoCode("")
    } else if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo({
        code: "SAVE10",
        discount: 10,
        amount: cart.total * 0.1,
      })
      setPromoCode("")
    } else {
      alert("Invalid promo code. Try 'BEAUTY20' or 'SAVE10'")
    }
  }

  const removePromoCode = () => {
    setAppliedPromo(null)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  const getShippingCost = () => {
    const costs = {
      standard: cart?.total > 50 ? 0 : 5.99,
      express: 12.99,
      overnight: 24.99,
    }
    return costs[shippingMethod] || 0
  }

  const getTotalWithExtras = () => {
    const subtotal = cart?.total || 0
    const discount = appliedPromo?.amount || 0
    const shipping = getShippingCost()
    const tax = (subtotal - discount) * 0.08 // 8% tax
    return subtotal - discount + shipping + tax
  }

  const getCategoryIcon = (category) => {
    const icons = {
      beauty: Sparkles,
      fragrances: Gift,
      skincare: Heart,
      makeup: Star,
      furniture: Crown,
    }
    return icons[category] || Package
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your cart...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cart Not Found</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  if (!cart || !cart.products || cart.products.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <Fade in={isVisible} timeout={600}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              {/* <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Continue Shopping</span>
              </button> */}
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-gray-600">
                  {cart.totalQuantity} item{cart.totalQuantity !== 1 ? "s" : ""} in your cart
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Chip label={`Cart ID: ${cart.id}`} size="small" className="bg-pink-100 text-pink-700 font-medium" />
              <Chip label={`User: ${cart.userId}`} size="small" className="bg-purple-100 text-purple-700 font-medium" />
            </div>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Fade in={isVisible} timeout={800}>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Cart Items</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Package className="w-4 h-4" />
                      <span>{cart.totalProducts} products</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {cart.products.map((product, index) => {
                      const CategoryIcon = getCategoryIcon(product.category)
                      const isUpdating = updatingItems.has(product.id)

                      return (
                        <Fade key={product.id} in={isVisible} timeout={1000 + index * 100}>
                          <Card className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex gap-4">
                                {/* Product Image */}
                                <div className="relative">
                                  <div className="w-24 h-24 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden">
                                    <img
                                      src={product.thumbnail || "/placeholder.svg?height=96&width=96"}
                                      alt={product.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="absolute -top-2 -right-2">
                                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                                      <CategoryIcon className="w-3 h-3 text-white" />
                                    </div>
                                  </div>
                                </div>

                                {/* Product Details */}
                                <div className="flex-1">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <h3 className="font-semibold text-gray-900 mb-1">{product.title}</h3>
                                      <div className="flex items-center gap-2 mb-2">
                                        <Chip
                                          label={product.category}
                                          size="small"
                                          className="bg-pink-100 text-pink-700 capitalize"
                                        />
                                        <span className="text-sm text-gray-600">by {product.brand}</span>
                                      </div>
                                      {product.rating && (
                                        <div className="flex items-center gap-1">
                                          <Rating value={product.rating} readOnly size="small" />
                                          <span className="text-sm text-gray-600">({product.rating})</span>
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Tooltip title="Move to wishlist">
                                        <button className="p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-all duration-300">
                                          <Heart className="w-4 h-4" />
                                        </button>
                                      </Tooltip>
                                      <Tooltip title="Remove from cart">
                                        <button
                                          onClick={() => removeItem(product.id)}
                                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </button>
                                      </Tooltip>
                                    </div>
                                  </div>

                                  {/* Price and Quantity */}
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                      <div className="text-lg font-bold text-gray-900">
                                        {formatPrice(product.price)}
                                      </div>
                                      {product.discountPercentage > 0 && (
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm text-gray-500 line-through">
                                            {formatPrice(product.price / (1 - product.discountPercentage / 100))}
                                          </span>
                                          <Chip
                                            label={`${product.discountPercentage}% OFF`}
                                            size="small"
                                            className="bg-green-100 text-green-800 font-bold"
                                          />
                                        </div>
                                      )}
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3">
                                      <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                                        <button
                                          onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                          disabled={product.quantity <= 1 || isUpdating}
                                          className="p-2 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                          <Minus className="w-4 h-4" />
                                        </button>
                                        <div className="px-4 py-2 bg-white font-semibold min-w-[3rem] text-center relative">
                                          {isUpdating && (
                                            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                                              <div className="w-4 h-4 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                          )}
                                          {product.quantity}
                                        </div>
                                        <button
                                          onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                          disabled={isUpdating}
                                          className="p-2 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                          <Plus className="w-4 h-4" />
                                        </button>
                                      </div>
                                      <div className="text-right">
                                        <div className="font-bold text-gray-900">{formatPrice(product.total)}</div>
                                        <div className="text-xs text-gray-500">
                                          {product.quantity} × {formatPrice(product.price)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Fade>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </Fade>

            {/* Promo Code Section */}
            <Fade in={isVisible} timeout={1200}>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Tag className="w-5 h-5 text-purple-500" />
                    <h3 className="font-semibold text-gray-900">Promo Code</h3>
                  </div>

                  {appliedPromo ? (
                    <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <div>
                          <div className="font-semibold text-green-800">{appliedPromo.code} Applied</div>
                          <div className="text-sm text-green-600">
                            You saved {formatPrice(appliedPromo.amount)} ({appliedPromo.discount}% off)
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter promo code (try BEAUTY20 or SAVE10)"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                      <button
                        onClick={applyPromoCode}
                        disabled={!promoCode.trim()}
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Apply
                      </button>
                    </div>
                  )}

                  <div className="mt-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Percent className="w-4 h-4 text-pink-500" />
                      <span className="font-medium text-gray-900">Available Offers</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• BEAUTY20 - Get 20% off your order</div>
                      <div>• SAVE10 - Get 10% off your order</div>
                      <div>• Free shipping on orders over $50</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Fade>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Summary Card */}
            <Fade in={isVisible} timeout={1000}>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  {/* Subtotal */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({cart.totalQuantity} items)</span>
                      <span className="font-semibold">{formatPrice(cart.total)}</span>
                    </div>

                    {appliedPromo && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({appliedPromo.code})</span>
                        <span>-{formatPrice(appliedPromo.amount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {getShippingCost() === 0 ? "FREE" : formatPrice(getShippingCost())}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">
                        {formatPrice((cart.total - (appliedPromo?.amount || 0)) * 0.08)}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-pink-600">{formatPrice(getTotalWithExtras())}</span>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Options */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Shipping Options</h3>
                    <div className="space-y-2">
                      {[
                        {
                          id: "standard",
                          name: "Standard Shipping",
                          time: "5-7 business days",
                          cost: cart.total > 50 ? 0 : 5.99,
                        },
                        { id: "express", name: "Express Shipping", time: "2-3 business days", cost: 12.99 },
                        { id: "overnight", name: "Overnight Shipping", time: "Next business day", cost: 24.99 },
                      ].map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all duration-300 ${
                            shippingMethod === option.id
                              ? "border-pink-500 bg-pink-50"
                              : "border-gray-200 hover:border-pink-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="shipping"
                              value={option.id}
                              checked={shippingMethod === option.id}
                              onChange={(e) => setShippingMethod(e.target.value)}
                              className="text-pink-500"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{option.name}</div>
                              <div className="text-sm text-gray-600">{option.time}</div>
                            </div>
                          </div>
                          <div className="font-semibold">{option.cost === 0 ? "FREE" : formatPrice(option.cost)}</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mb-6">
                    <CreditCard className="w-5 h-5" />
                    Proceed to Checkout
                  </button>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <Shield className="w-6 h-6 text-green-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Secure Payment</div>
                    </div>
                    <div className="text-center">
                      <Truck className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Fast Delivery</div>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Easy Returns</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Fade>

            {/* Estimated Delivery */}
            <Fade in={isVisible} timeout={1400}>
              <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6" />
                    <h3 className="font-semibold">Estimated Delivery</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Order by 2 PM EST</span>
                      <span className="font-semibold">Ships Today</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm opacity-90">Delivering to New York, NY 10001</span>
                      <button className="text-sm underline opacity-90 hover:opacity-100 ml-auto">
                        <Edit3 className="w-3 h-3 inline mr-1" />
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white/20 rounded-xl">
                    <div className="text-sm opacity-90 mb-2">Delivery Progress</div>
                    <LinearProgress
                      variant="determinate"
                      value={25}
                      className="h-2 rounded-full"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.3)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "white",
                        },
                      }}
                    />
                    <div className="text-xs opacity-75 mt-2">Order confirmed • Preparing for shipment</div>
                  </div>
                </CardContent>
              </Card>
            </Fade>

            {/* Additional Cart Info */}
            <Fade in={isVisible} timeout={1600}>
              <Card className="bg-white/60 backdrop-blur-sm shadow-md rounded-2xl overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Gift className="w-5 h-5 text-purple-500" />
                    <h3 className="font-medium text-gray-900">Special Offers</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Free gift with orders over $75</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Free returns within 30 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span>Earn 2x points on beauty items</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Fade>

            {/* Customer Support */}
            <Fade in={isVisible} timeout={1800}>
              <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-2xl overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Need Help?</h3>
                      <p className="text-sm text-gray-600">Our beauty experts are here to help</p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors text-sm">
                    Chat with Beauty Expert
                  </button>
                </CardContent>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

// import { useState, useEffect } from "react"
// import { ShoppingBag, Trash2, Plus, Minus, CreditCard, Tag, CheckCircle, Package } from "lucide-react"
// import { Card, CardContent, Chip, Rating, Tooltip, Fade } from "@mui/material"
// import { useCart } from "../../Context/CartContext"

// export default function CartPage() {
//   const { cart, removeItem, updateQuantity, isLoaded } = useCart()
//   const [isVisible, setIsVisible] = useState(false)
//   const [promoCode, setPromoCode] = useState("")
//   const [appliedPromo, setAppliedPromo] = useState(null)
//   const [shippingMethod, setShippingMethod] = useState("standard")

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   // Debug: Log cart state
//   useEffect(() => {
//     console.log("🛒 Cart in CartPage:", cart)
//     console.log("🛒 Cart loaded:", isLoaded)
//   }, [cart, isLoaded])

//   const applyPromoCode = () => {
//     if (promoCode.toLowerCase() === "beauty20") {
//       setAppliedPromo({
//         code: "BEAUTY20",
//         discount: 20,
//         amount: cart.total * 0.2,
//       })
//       setPromoCode("")
//     } else if (promoCode.toLowerCase() === "save10") {
//       setAppliedPromo({
//         code: "SAVE10",
//         discount: 10,
//         amount: cart.total * 0.1,
//       })
//       setPromoCode("")
//     } else {
//       alert("Invalid promo code. Try 'BEAUTY20' or 'SAVE10'")
//     }
//   }

//   const removePromoCode = () => {
//     setAppliedPromo(null)
//   }

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price)
//   }

//   const getShippingCost = () => {
//     const costs = {
//       standard: cart?.total > 50 ? 0 : 5.99,
//       express: 12.99,
//       overnight: 24.99,
//     }
//     return costs[shippingMethod] || 0
//   }

//   const getTotalWithExtras = () => {
//     const subtotal = cart?.total || 0
//     const discount = appliedPromo?.amount || 0
//     const shipping = getShippingCost()
//     const tax = (subtotal - discount) * 0.08 // 8% tax
//     return subtotal - discount + shipping + tax
//   }

//   // Show loading state while cart is loading
//   if (!isLoaded) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading cart...</p>
//         </div>
//       </div>
//     )
//   }

//   if (!cart || !cart.products || cart.products.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <ShoppingBag className="w-12 h-12 text-gray-400" />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
//           <p className="text-gray-600 mb-8 max-w-md mx-auto">
//             Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
//           </p>
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50">
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Debug Panel - Remove this in production */}
//         {/* <div className="mb-8"> */}
//           {/* <div className="bg-green-50 border border-green-200 rounded-lg p-4"> */}
//             {/* <h3 className="font-bold text-green-800 mb-2">🛒 Cart Debug Info</h3>
//             <div className="text-green-700 text-sm">
//               <p>Cart Loaded: {isLoaded ? "✅ Yes" : "❌ No"}</p>
//               <p>Products Array Length: {cart.products?.length || 0}</p>
//               <p>Total Quantity: {cart.totalQuantity}</p>
//               <p>Total Price: ${cart.total?.toFixed(2) || "0.00"}</p>
//               <p>Total Products: {cart.totalProducts}</p>
//             </div> */}
//           {/* </div> */}
//         {/* </div> */}

//         {/* Header */}
//         <Fade in={isVisible} timeout={600}>
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
//                 <p className="text-gray-600">
//                   {cart.totalQuantity} item{cart.totalQuantity !== 1 ? "s" : ""} in your cart
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <Chip
//                 label={`${cart.totalProducts} Products`}
//                 size="small"
//                 className="bg-pink-100 text-pink-700 font-medium"
//               />
//               <Chip
//                 label={`${cart.totalQuantity} Items`}
//                 size="small"
//                 className="bg-purple-100 text-purple-700 font-medium"
//               />
//             </div>
//           </div>
//         </Fade>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-4">
//             <Fade in={isVisible} timeout={800}>
//               <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-900">Cart Items</h2>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <Package className="w-4 h-4" />
//                       <span>{cart.totalProducts} products</span>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     {cart.products.map((product, index) => (
//                       <Fade key={product.id} in={isVisible} timeout={1000 + index * 100}>
//                         <Card className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all duration-300">
//                           <CardContent className="p-6">
//                             <div className="flex gap-4">
//                               {/* Product Image */}
//                               <div className="relative">
//                                 <div className="w-24 h-24 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden">
//                                   <img
//                                     src={product.thumbnail || "/placeholder.svg?height=96&width=96"}
//                                     alt={product.title}
//                                     className="w-full h-full object-cover"
//                                   />
//                                 </div>
//                               </div>

//                               {/* Product Details */}
//                               <div className="flex-1">
//                                 <div className="flex items-start justify-between mb-2">
//                                   <div>
//                                     <h3 className="font-semibold text-gray-900 mb-1">{product.title}</h3>
//                                     <div className="flex items-center gap-2 mb-2">
//                                       <Chip
//                                         label={product.category}
//                                         size="small"
//                                         className="bg-pink-100 text-pink-700 capitalize"
//                                       />
//                                       <span className="text-sm text-gray-600">by {product.brand}</span>
//                                     </div>
//                                     {product.rating && (
//                                       <div className="flex items-center gap-1">
//                                         <Rating value={product.rating} readOnly size="small" />
//                                         <span className="text-sm text-gray-600">({product.rating})</span>
//                                       </div>
//                                     )}
//                                   </div>
//                                   <div className="flex items-center gap-2">
//                                     <Tooltip title="Remove from cart">
//                                       <button
//                                         onClick={() => removeItem(product.id)}
//                                         className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
//                                       >
//                                         <Trash2 className="w-4 h-4" />
//                                       </button>
//                                     </Tooltip>
//                                   </div>
//                                 </div>

//                                 {/* Price and Quantity */}
//                                 <div className="flex items-center justify-between">
//                                   <div className="flex items-center gap-4">
//                                     <div className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</div>
//                                   </div>

//                                   {/* Quantity Controls */}
//                                   <div className="flex items-center gap-3">
//                                     <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
//                                       <button
//                                         onClick={() => updateQuantity(product.id, product.quantity - 1)}
//                                         disabled={product.quantity <= 1}
//                                         className="p-2 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                                       >
//                                         <Minus className="w-4 h-4" />
//                                       </button>
//                                       <div className="px-4 py-2 bg-white font-semibold min-w-[3rem] text-center">
//                                         {product.quantity}
//                                       </div>
//                                       <button
//                                         onClick={() => updateQuantity(product.id, product.quantity + 1)}
//                                         className="p-2 hover:bg-gray-200 transition-colors"
//                                       >
//                                         <Plus className="w-4 h-4" />
//                                       </button>
//                                     </div>
//                                     <div className="text-right">
//                                       <div className="font-bold text-gray-900">{formatPrice(product.total)}</div>
//                                       <div className="text-xs text-gray-500">
//                                         {product.quantity} × {formatPrice(product.price)}
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </CardContent>
//                         </Card>
//                       </Fade>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </Fade>

//             {/* Promo Code Section */}
//             <Fade in={isVisible} timeout={1200}>
//               <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <Tag className="w-5 h-5 text-purple-500" />
//                     <h3 className="font-semibold text-gray-900">Promo Code</h3>
//                   </div>

//                   {appliedPromo ? (
//                     <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl">
//                       <div className="flex items-center gap-3">
//                         <CheckCircle className="w-5 h-5 text-green-500" />
//                         <div>
//                           <div className="font-semibold text-green-800">{appliedPromo.code} Applied</div>
//                           <div className="text-sm text-green-600">
//                             You saved {formatPrice(appliedPromo.amount)} ({appliedPromo.discount}% off)
//                           </div>
//                         </div>
//                       </div>
//                       <button
//                         onClick={removePromoCode}
//                         className="text-green-600 hover:text-green-800 transition-colors"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="flex gap-3">
//                       <input
//                         type="text"
//                         value={promoCode}
//                         onChange={(e) => setPromoCode(e.target.value)}
//                         placeholder="Enter promo code (try BEAUTY20 or SAVE10)"
//                         className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                       />
//                       <button
//                         onClick={applyPromoCode}
//                         disabled={!promoCode.trim()}
//                         className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         Apply
//                       </button>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </Fade>
//           </div>

//           {/* Order Summary */}
//           <div className="space-y-6">
//             <Fade in={isVisible} timeout={1000}>
//               <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden">
//                 <CardContent className="p-6">
//                   <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

//                   <div className="space-y-4 mb-6">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Subtotal ({cart.totalQuantity} items)</span>
//                       <span className="font-semibold">{formatPrice(cart.total)}</span>
//                     </div>

//                     {appliedPromo && (
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount ({appliedPromo.code})</span>
//                         <span>-{formatPrice(appliedPromo.amount)}</span>
//                       </div>
//                     )}

//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Shipping</span>
//                       <span className="font-semibold">
//                         {getShippingCost() === 0 ? "FREE" : formatPrice(getShippingCost())}
//                       </span>
//                     </div>

//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Tax</span>
//                       <span className="font-semibold">
//                         {formatPrice((cart.total - (appliedPromo?.amount || 0)) * 0.08)}
//                       </span>
//                     </div>

//                     <div className="border-t border-gray-200 pt-4">
//                       <div className="flex justify-between text-lg font-bold">
//                         <span>Total</span>
//                         <span className="text-pink-600">{formatPrice(getTotalWithExtras())}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
//                     <CreditCard className="w-5 h-5" />
//                     Proceed to Checkout
//                   </button>
//                 </CardContent>
//               </Card>
//             </Fade>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
