"use client";

import { handleError } from "@/helpers/handleError";
import { ObjectId } from "mongodb";
import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWishlist({ productId }: { productId: ObjectId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkWishlist = async () => {
      const isLogin = document.cookie.includes("Authorization");
      if (!isLogin) return;

      const userId = String(document.cookie.split('=')[1]);
      try {
        const response = await fetch(`/api/wishlist?userId=${userId}`, {
          headers: {
            'x-user-id': userId,
          },
        });

        if (response.ok) {
          const wishlistItems = await response.json();
          const exists = wishlistItems.some(item => item._id === productId);
          setIsAdded(exists);
        }
      } catch (error) {
        console.error("Error checking wishlist:", error);
      }
    };

    checkWishlist();
  }, [productId]);

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
      const userId = String(document.cookie.split('=')[1]);
      const response = await fetch(`http://localhost:3000/api/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: document.cookie,
          'x-user-id': userId,
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to wishlist");
      }

      const result = await response.json();
      console.log(result.message);
      setIsAdded(true);

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
        disabled={isLoading || isAdded}
      >
        {isAdded ? "Added to wishlist" : isLoading ? "Adding..." : "Add to Wishlist"}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
