import ProductCard from "@/components/ProductCard";

export interface Product {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export default async function ProductList() {
  const data = await fetch("http://localhost:3001/products");
  const json: Product[] = await data.json();
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {json.map((e, i) => {
        return <ProductCard key={i} product={e} />;
      })}
    </div>
  );
}
