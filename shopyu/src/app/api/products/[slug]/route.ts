import { handleError } from "@/helpers/handleError";
import { ProductModel } from "@/models/ProductModel";

export async function GET(request: Request, {params} : {params: {slug: string}}) {
  const {slug} = params
  try {
    const product = await ProductModel.findBySlug(slug);
    return Response.json(product);
  } catch (error){
    return handleError(error);
  }
}