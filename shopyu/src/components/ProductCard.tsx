"use client"

import Link from "next/link";
import AddWishlist from "./AddWishlist.tsx";
import { ProductTypes } from "@/types/ProductTypes.js";

export default function ProductCard({ product }: { product: ProductTypes }) {
  const maxDescriptionLength = 100;
  const truncatedDescription =
    product.description.length > maxDescriptionLength
      ? product.description.slice(0, maxDescriptionLength) + "..."
      : product.description;

  return (
    <div className="card card-compact bg-base-100 w-64 shadow-xl flex flex-col">
      <Link href={`products/${product.slug}`} className="flex-grow">
        <figure className="h-48 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </figure>
      </Link>
      <div className="card-body flex flex-col justify-between">
        <Link href={`products/${product.slug}`}>
          <h2 className="card-title text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{truncatedDescription}</p>
          <p className="text-lg font-bold text-red-500 mt-2">
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 2, 
            })}
          </p>
        </Link>
        <div className="mt-4">
          <AddWishlist productId={product._id}/>
        </div>
      </div>
    </div>
  );
}
