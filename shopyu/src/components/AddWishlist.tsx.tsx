"use client"

import { ObjectId } from "mongodb";

export default function AddWishlist({ productId }:{
  productId: ObjectId;
}) {
  // const userId = dapat dari Auth 
  const handleAdd = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/wishlist/${productId}`, {
        method: "POST",
      });
      
      if (!response.ok) {
        throw new Error("Failed to remove item from wishlist");
      }
      return Response.json({ message: "Item added to wishlist" });
    } catch (error) {
      throw new Error(error.message)
    }
  }

  return (
    <div className="card-actions justify-end">
      <button onClick={handleAdd} className="btn bg-orange-500 hover:bg-orange-600 text-white">Add to wishlist</button>
    </div>
  );
}
