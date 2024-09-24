import WishlistCard from "@/components/WishlistCard";
import { ProductTypes } from "@/types/ProductTypes";

export default async function WishlistPage() {
  const data = await fetch("http://localhost:3001/products");
  const wishlist: ProductTypes[] = await data.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((e, i) => (
            <WishlistCard key={i} product={e} />
          ))}
        </div>
      )}
    </div>
  );
}
