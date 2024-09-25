"use client";

import { handleError } from "@/helpers/handleError";
import { ObjectId } from "mongodb";
import { useState } from "react";

export default function RemoveWishlist({ productId }: { productId: ObjectId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleRemove = async () => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const response = await fetch(`http://localhost:3000/api/wishlist`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": document.cookie
                },
                body: JSON.stringify({ productId }),
            });

            if (!response.ok) {
                throw new Error("Failed to remove item from wishlist");
            }

            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            handleError(error)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="card-actions justify-end">
            <button 
                onClick={handleRemove} 
                className="btn bg-red-500 hover:bg-red-600 text-white" 
                disabled={isLoading}
            >
                {isLoading ? "Removing..." : "Remove from Wishlist"}
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
    );
}
