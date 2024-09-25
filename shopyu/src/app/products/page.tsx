"use client";

import ProductCard from "@/components/ProductCard";
import Search from "@/components/Search";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ProductList() {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const fetchProducts = async (search: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products?search=${search}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const json: ProductTypes[] = await response.json();
      setProducts(json);
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <div>
        <Search searchParams={searchQuery} />
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((e, i) => {
          return <ProductCard key={i} product={e} />;
        })}
      </div>
    </div>
  );
}
