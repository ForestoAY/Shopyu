import ProductCard from "@/components/ProductCard";
import { ProductTypes } from "@/types/ProductTypes";

export default async function ProductList() {
  const data = await fetch("http://localhost:3001/products");
  const json: ProductTypes[] = await data.json();
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {json.map((e, i) => {
        return <ProductCard key={i} product={e} />;
      })}
    </div>
  );
}
