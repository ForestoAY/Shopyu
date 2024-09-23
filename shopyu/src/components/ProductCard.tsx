import { Product } from "@/app/products/page";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card card-compact bg-base-100 w-64 shadow-xl">
      <figure>
        <img src={product.thumbnail} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p className="text-lg font-bold text-red-500">
          Price: {product.price.toLocaleString()} IDR
        </p>
        <div className="card-actions justify-end">
          <Link href={`products/${product.id}`}>
            <button className="btn btn-primary">Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
