"use client";

import ProductCard from "@/components/ProductCard";
import Search from "@/components/Search";
import { ProductTypes } from "@/types/ProductTypes";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import InfiniteScrollProducts from "@/components/InfiniteScrollProducts";

export default function ProductList() {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<ProductTypes[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const productsPerScroll = 10;

  const fetchProducts = async (search: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?search=${search}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const json: ProductTypes[] = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const loadMoreProducts = () => {
    const nextProducts = products.slice(
      visibleProducts.length,
      visibleProducts.length + productsPerScroll
    );
    
    setVisibleProducts((prev) => [...prev, ...nextProducts]);

    if (visibleProducts.length + nextProducts.length >= products.length) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    const loadInitialProducts = async () => {
      const allProducts = await fetchProducts(searchQuery);
      setProducts(allProducts);

      if (!searchQuery) {
        setVisibleProducts(allProducts.slice(0, productsPerScroll));
        setHasMore(allProducts.length > productsPerScroll);
      } else {
        setVisibleProducts(allProducts);
        setHasMore(false);
      }
    };

    loadInitialProducts();
  }, [searchQuery]);

  return (
    <div>
      <div>
        <Search searchParams={searchQuery} />
      </div>

      {!searchQuery ? (
        <InfiniteScrollProducts
          products={visibleProducts}
          loadMore={loadMoreProducts}
          hasMore={hasMore}
        />
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {visibleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
