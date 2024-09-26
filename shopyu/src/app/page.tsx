import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Info from "@/components/Info";

export default function Home() {
  return (
    <>
      <Banner />
      <Info />
      <p className="text-2xl font-bold text-center my-6">Featured Products</p>
      <FeaturedProducts />
    </>
  );
}
