"use client"

import WishlistCard from "@/components/WishlistCard";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [wishlistProducts, setWishlistProducts] = useState<ProductTypes[]>([]);

  const fetchWishlistProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/wishlist");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const json: ProductTypes[] = await response.json();
      setWishlistProducts(json);
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
  
  useEffect(() => {
    fetchWishlistProducts();
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistProducts.map((e, i) => (
            <WishlistCard key={i} product={e} />
          ))}
        </div>
      )}
    </div>
  );
}
