// import Navbar from "../Components/Navbar"
// import Footer from '../Components/Footer'
// import Landing from "../Pages/Customer/Landing"
// import CTA from '../Pages/Customer/CTA'
// import BeautyCategories from "../Pages/Customer/Category"
// import WhyShopWithUs from "../Pages/Customer/Why"
// import MobileAppPromotion from "../Pages/Customer/Mobile"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
//       <div className="max-w-7xl mx-auto p-6">
//         <Navbar />
//       </div>
//       <Landing />
//       <CTA />
//       <BeautyCategories />
//       <WhyShopWithUs /> 
//       <MobileAppPromotion />
//       <Footer />
//     </div>
//   )
// }


import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-7xl mx-auto p-6">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}