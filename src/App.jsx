import { CartProvider } from "./Context/CartContext"
import CustomerRoutes from "./Routes/Customer.Routes"
// import "./globals.css"

export default function App() {
  return (
    <CartProvider>
      <CustomerRoutes />
    </CartProvider>
  )
}
