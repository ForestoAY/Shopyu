import Link from "next/link";
import ProductCard from "./ProductCard";
import { ProductTypes } from "@/types/ProductTypes";

async function fetchFeaturedProducts(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/featured`);
  if (!response.ok) {
    throw new Error("Failed to fetch")
  }

  return response.json();
}

export default async function FeaturedProducts() {
  const featuredProducts = await fetchFeaturedProducts();
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center">
        {featuredProducts.map((e: ProductTypes, i: number) => {
          return <ProductCard key={i} product={e} />;
        })}
      </div>

      <div className="text-center mt-6 mb-4">
        <Link href="/products">
          <p className="btn bg-orange-500 hover:bg-orange-600 text-white">See All Products</p>
        </Link>
      </div>
    </>
  );
}
