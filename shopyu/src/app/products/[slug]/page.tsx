import AddWishlist from "@/components/AddWishlist";
import { ProductTypes } from "@/types/ProductTypes";
import { Metadata } from "next";

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata>  {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.slug}`)
  const product = await response.json();
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [
        product.images
      ]
    }
  }
}

export default async function ProductDetail({ params }: {params: {slug: string}}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const product: ProductTypes = await response.json();
  
  return (
    <div className="container mx-auto mt-5 px-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-3/4 h-80 object-cover rounded-lg shadow-lg mb-4"
          />
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image: string, i: number) => (
              <img
                key={i}
                src={image}
                alt={`Product Image ${i + 1}`}
                className="w-24 h-24 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg font-semibold text-red-500 mb-4">
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 2, 
            })}
          </p>
          <p className="text-gray-700 mb-4">{product.excerpt}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="flex flex-wrap mt-4">
            {product.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <AddWishlist productId={product._id}/>
        </div>
      </div>
    </div>
  );
}
