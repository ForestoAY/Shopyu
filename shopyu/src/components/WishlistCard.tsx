"use client"

import RemoveWishlist from "./RemoveWishlist";
import { ProductTypes } from "@/types/ProductTypes";

export default function WishlistCard({ product }: { product: ProductTypes }) {
  return (
    <div className="flex items-center border-b pb-4">
      <div className="flex-shrink-0">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-20 h-20 object-cover rounded"
        />
      </div>
      <div className="ml-4 flex-grow">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold text-red-500">
          {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 2, 
            })}
        </p>
      </div>
      <div className="mx-5">
        <RemoveWishlist />
      </div>
    </div>
  );
}
