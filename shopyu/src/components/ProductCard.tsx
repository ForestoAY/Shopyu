import { Product } from "@/app/products/page";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card card-compact bg-base-100 w-64 shadow-xl">
      <figure>
        <img src={product.thumbnail} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
