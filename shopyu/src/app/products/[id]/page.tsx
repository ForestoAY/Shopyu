import AddWishlist from "@/components/AddWishlist.tsx";
import React from "react";

interface Product {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
}

const productData: Product = {
  name: "cunabula caelestis volaticus",
  slug: "suspendo-tenetur",
  description:
    "Ciminatio velociter spero voro demoror vetus voluptas alter copia. Timor coniecto damno comptus usus crinis crebro tametsi. Summisse decumbo virtus calculus vomito utroque bibo aufero aro.\nAdinventitias apto aestas annus deduco capio vehemens. Delibero deporto placeat voluptatibus aeternus deficio. Vis super voluptate autem amicitia capillus vinitor suasoria sufficio deduco.",
  excerpt: "Thorax saepe deficio adimpleo conitor.",
  price: 5249399,
  tags: ["trucido", "talio", "arceo"],
  thumbnail: "https://loremflickr.com/400/400/food",
  images: [
    "https://loremflickr.com/400/400/abstract",
    "https://loremflickr.com/400/400/food",
    "https://loremflickr.com/400/400/food",
    "https://loremflickr.com/400/400/transport",
    "https://loremflickr.com/400/400/food",
  ],
  createdAt: "2023-12-15T15:32:06.350Z",
  updatedAt: "2024-03-18T14:47:12.101Z",
};

export default function ProductDetail() {
  return (
    <div className="container mx-auto mt-5 px-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={productData.thumbnail}
            alt={productData.name}
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
          />
          <div className="flex space-x-2 overflow-x-auto">
            {productData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>
          <p className="text-lg font-semibold text-red-500 mb-4">
            Price: {productData.price.toLocaleString()} IDR
          </p>
          <p className="text-gray-700 mb-4">{productData.excerpt}</p>
          <p className="text-gray-600 mb-4">{productData.description}</p>

          <div className="flex flex-wrap mt-4">
            {productData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <AddWishlist />
        </div>
      </div>
    </div>
  );
}
