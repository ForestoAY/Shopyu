"use client";

import { handleError } from "@/helpers/handleError";
import { ObjectId } from "mongodb";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWishlist({ productId }: { productId: ObjectId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    
    const isLogin = document.cookie.includes("Authorization");

    if (!isLogin) {
      const error = "You are unauthenticated. Please log in to add items to your wishlist.";
      router.push(`/login?error=${error}`);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: document.cookie,
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to wishlist");
      }

      const result = await response.json();
      console.log(result.message);

    } catch (error) {
      return handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card-actions justify-end">
      <button 
        onClick={handleAdd} 
        className="btn bg-orange-500 hover:bg-orange-600 text-white" 
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add to Wishlist"}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
