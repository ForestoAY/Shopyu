"use client"

import { ObjectId } from "mongodb";

export default function RemoveWishlist({ productId }:{
  productId: ObjectId;
}) {
  // const userId = dapat dari Auth 
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/wishlist/${productId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to remove item from wishlist");
      }
      return Response.json({ message: "Item removed from wishlist" });
    } catch (error) {
      throw new Error(error.message)
    }
  }

  return (
    <div className="flex-shrink-0">
      <button  onClick={handleDelete} className="btn bg-orange-500 hover:bg-orange-600 text-white">Remove</button>
    </div>
  );
}
