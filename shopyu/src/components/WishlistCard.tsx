"use client";

import Link from "next/link";
import RemoveWishlist from "./RemoveWishlist";
import { ProductTypes } from "@/types/ProductTypes";
import { ObjectId } from "mongodb";

interface WishlistCardProps {
  product: ProductTypes;
  onRemove: (id: ObjectId) => void;
}

export default function WishlistCard({ product, onRemove }: WishlistCardProps) {
  return (
    <div className="flex border rounded-lg shadow-md p-4 w-4/5 items-center bg-white transition-transform transform hover:scale-105">
      <Link href={`products/${product.slug}`} className="flex-grow flex items-center">
        <div className="flex-shrink-0">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors">
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm overflow-hidden whitespace-normal">
            {product.description}
          </p>
          <p className="text-lg font-bold text-red-500 mt-1">
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </Link>
      <div className="ml-5 flex-shrink-0">
        <RemoveWishlist productId={product._id} onRemove={() => onRemove(product._id)} />
      </div>
    </div>
  );
}
