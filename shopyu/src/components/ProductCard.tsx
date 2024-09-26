"use client";

import Link from "next/link";
import AddWishlist from "./AddWishlist";
import { ProductTypes } from "@/types/ProductTypes.js";

export default function ProductCard({ product }: { product: ProductTypes }) {
  const maxDescriptionLength = 100;
  const truncatedDescription =
    product.description.length > maxDescriptionLength
      ? product.description.slice(0, maxDescriptionLength) + "..."
      : product.description;

  return (
    <Link href={`products/${product.slug}`}>
      <div className="card card-compact bg-base-100 w-64 shadow-lg flex flex-col rounded-lg overflow-hidden transition-transform transform hover:scale-105 mx-3">
        <figure className="h-48 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-col justify-between p-4">
          <h2 className="card-title text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-600">{truncatedDescription}</p>
          <p className="text-lg font-bold text-red-500 mt-2">
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 2,
            })}
          </p>
          <div className="mt-4">
            <AddWishlist productId={product._id} />
          </div>
        </div>
      </div>
    </Link>
  );
}
