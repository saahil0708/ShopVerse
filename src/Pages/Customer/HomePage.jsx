import Landing from "../Customer/Landing";
import CTA from '../Customer/CTA';
import BeautyCategories from "../Customer/Category";
import WhyShopWithUs from "../Customer/Why";
import MobileAppPromotion from "../Customer/Mobile";

export default function HomePage() {
  return (
    <>
      <Landing />
      <CTA />
      <BeautyCategories />
      <WhyShopWithUs />
      <MobileAppPromotion />
    </>
  );
}