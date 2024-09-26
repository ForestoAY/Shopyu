import { handleError } from "@/helpers/handleError";
import { ProductModel } from "@/models/ProductModel";

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const products = await ProductModel.findByFeatured();
    return Response.json(products)
  } catch (error){
    return handleError(error);
  }
}