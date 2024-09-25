import { handleError } from "@/helpers/handleError";
import { ProductModel } from "@/models/ProductModel";

export async function GET(request: Request) {
  try {
    const products = await ProductModel.findByFeatured();
    return Response.json(products)
  } catch (error){
    return handleError(error);
  }
}