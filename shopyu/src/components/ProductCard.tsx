import { Product } from "@/app/products/page";
import Link from "next/link";
import AddWishlist from "./AddWishlist.tsx";

export default function ProductCard({ product }: { product: Product }) {
  const maxDescriptionLength = 100;
  const truncatedDescription =
    product.description.length > maxDescriptionLength
      ? product.description.slice(0, maxDescriptionLength) + "..."
      : product.description;

  return (
    <div className="card card-compact bg-base-100 w-64 shadow-xl flex flex-col">
      <Link href={`products/${product.id}`} className="flex-grow">
        <figure className="h-48 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </figure>
      </Link>
      <div className="card-body flex flex-col justify-between">
        <Link href={`products/${product.id}`}>
          <h2 className="card-title text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{truncatedDescription}</p>
          <p className="text-lg font-bold text-red-500 mt-2">
            Price: {product.price.toLocaleString()} IDR
          </p>
        </Link>
        <div className="mt-4">
          <AddWishlist />
        </div>
      </div>
    </div>
  );
}
