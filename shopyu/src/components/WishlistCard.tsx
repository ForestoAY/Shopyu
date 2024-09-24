import { Product } from "@/app/products/page";
import RemoveWishlist from "./RemoveWishlist";

export default function WishlistCard({ product }: { product: Product }) {
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
          Price: {product.price.toLocaleString()} IDR
        </p>
      </div>
      <RemoveWishlist />
    </div>
  );
}
