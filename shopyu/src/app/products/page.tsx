"use client"

import ProductCard from "@/components/ProductCard";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const json: ProductTypes[] = await response.json();
      setProducts(json);
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {products.map((e, i) => {
        return <ProductCard key={i} product={e} />;
      })}
    </div>
  );
}
