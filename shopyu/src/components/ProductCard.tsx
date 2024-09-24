import { Product } from "@/app/products/page";
import Link from "next/link";
import AddWishlist from "./AddWishlist.tsx";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card card-compact bg-base-100 w-64 shadow-xl">
      <Link href={`products/${product.id}`}>
        <figure>
          <img src={product.thumbnail} alt={product.name} />
        </figure>
      </Link>
      <div className="card-body">
        <Link href={`products/${product.id}`}>
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-bold text-red-500">
            Price: {product.price.toLocaleString()} IDR
          </p>
        </Link>
        <AddWishlist />
      </div>
    </div>
  );
}
