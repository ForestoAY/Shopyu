import { Product } from "../products/page";

export default async function WishlistPage() {
  const data = await fetch("http://localhost:3001/products");
  const wishlist: Product[] = await data.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((product, index) => (
            <div key={index} className="flex items-center border-b pb-4">
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
              <div className="flex-shrink-0">
                <button className="btn btn-primary">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
