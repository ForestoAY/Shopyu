import { handleError } from "@/helpers/handleError";
import { ProductModel } from "@/models/ProductModel";
import { WishlistModel } from "@/models/WishlistModel";
import { ProductTypes } from "@/types/ProductTypes";
import { WishlistTypes } from "@/types/WishlistTypes";
import { ObjectId } from "mongodb";

export async function GET(request: Request, {params} : {params: {userId: string}}) {
  const userId = "66f2b6f3f443b85d8e85f13f" // hardcode
  try {
    const wishlistItems: WishlistTypes[] = await WishlistModel.findByUserId(new ObjectId(userId));
    const productIds = wishlistItems.map(item => item.productId);
    const objectIds = productIds.map(id => new ObjectId(id)); 
    const products: ProductTypes[] = await ProductModel.collection()
      .find({ _id: { $in: objectIds } })
      .toArray();

    return Response.json(products);
  } catch (error){
    return handleError(error);
  }
}