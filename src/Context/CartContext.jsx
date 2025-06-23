"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    products: [],
    total: 0,
    totalProducts: 0,
    totalQuantity: 0,
    userId: 1,
  })

  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("beauty-cart")
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        console.log("Loading cart from localStorage:", parsedCart)
        setCart(parsedCart)
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      try {
        console.log("Saving cart to localStorage:", cart)
        localStorage.setItem("beauty-cart", JSON.stringify(cart))
      } catch (error) {
        console.error("Error saving cart to localStorage:", error)
      }
    }
  }, [cart, isLoaded])

  const addToCart = (product, quantity = 1) => {
    console.log("Adding to cart:", product, "Quantity:", quantity)

    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingProductIndex = prevCart.products.findIndex((p) => p.id === product.id)

      if (existingProductIndex >= 0) {
        // Update existing product
        const updatedProducts = [...prevCart.products]
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + quantity,
          total: (updatedProducts[existingProductIndex].quantity + quantity) * product.price,
        }

        const newCart = {
          ...prevCart,
          products: updatedProducts,
          total: updatedProducts.reduce((sum, p) => sum + p.total, 0),
          totalQuantity: updatedProducts.reduce((sum, p) => sum + p.quantity, 0),
          totalProducts: updatedProducts.length,
        }

        console.log("Updated cart (existing product):", newCart)
        return newCart
      } else {
        // Add new product
        const newProduct = {
          ...product,
          quantity,
          total: product.price * quantity,
        }

        const newCart = {
          ...prevCart,
          products: [...prevCart.products, newProduct],
          total: prevCart.total + newProduct.total,
          totalProducts: prevCart.totalProducts + 1,
          totalQuantity: prevCart.totalQuantity + quantity,
        }

        console.log("Updated cart (new product):", newCart)
        return newCart
      }
    })
  }

  const removeItem = (productId) => {
    console.log("Removing item:", productId)

    setCart((prevCart) => {
      const productToRemove = prevCart.products.find((p) => p.id === productId)
      if (!productToRemove) return prevCart

      const updatedProducts = prevCart.products.filter((p) => p.id !== productId)
      const newCart = {
        ...prevCart,
        products: updatedProducts,
        total: updatedProducts.reduce((sum, p) => sum + p.total, 0),
        totalProducts: updatedProducts.length,
        totalQuantity: updatedProducts.reduce((sum, p) => sum + p.quantity, 0),
      }

      console.log("Updated cart (removed item):", newCart)
      return newCart
    })
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return

    console.log("Updating quantity:", productId, "New quantity:", newQuantity)

    setCart((prevCart) => {
      const updatedProducts = prevCart.products.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity, total: product.price * newQuantity } : product,
      )

      const newCart = {
        ...prevCart,
        products: updatedProducts,
        total: updatedProducts.reduce((sum, p) => sum + p.total, 0),
        totalQuantity: updatedProducts.reduce((sum, p) => sum + p.quantity, 0),
      }

      console.log("Updated cart (quantity changed):", newCart)
      return newCart
    })
  }

  const clearCart = () => {
    console.log("Clearing cart")
    setCart({
      products: [],
      total: 0,
      totalProducts: 0,
      totalQuantity: 0,
      userId: 1,
    })
  }

  const value = {
    cart,
    addToCart,
    removeItem,
    updateQuantity,
    clearCart,
    isLoaded,
  }

  // Debug: Log current cart state
  console.log("Current cart state:", cart)

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
