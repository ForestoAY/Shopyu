"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "@/components/ProductCard";
import { ProductTypes } from "@/types/ProductTypes";

interface InfiniteScrollProductsProps {
  products: ProductTypes[];
  loadMore: () => void;
  hasMore: boolean;
}

export default function InfiniteScrollProducts({
  products,
  loadMore,
  hasMore,
}: InfiniteScrollProductsProps) {
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p className="text-xl mb-5">No more products</p>}
      className="flex flex-wrap gap-5 justify-center"
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </InfiniteScroll>
  );
}
