import { handleError } from "@/helpers/handleError";
import { ProductModel } from "@/models/ProductModel";
import { WishlistModel } from "@/models/WishlistModel";
import { ProductTypes } from "@/types/ProductTypes";
import { WishlistTypes } from "@/types/WishlistTypes";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params} : {params: {userId: string}}) {
  const userId = String(request.headers.get("x-user-id"));    
  try {
    const wishlistItems: WishlistTypes[] = await WishlistModel.findByUserId(new ObjectId(userId));
    const productIds = wishlistItems.map(item => item.productId);
    const objectIds = productIds.map(id => new ObjectId(id)); 
    const products: ProductTypes[] = await ProductModel.collection()
      .find({ _id: { $in: objectIds } })
      .toArray();

    return NextResponse.json(products);
  } catch (error){
    return handleError(error);
  }
}