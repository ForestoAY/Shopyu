import { ProductModel } from "@/models/ProductModel";

export async function GET(request: Request, {params} : {params: {slug: string}}) {
  const {slug} = params
  try {
    const product = await ProductModel.findBySlug(slug);
    return Response.json(product);
  } catch (error: any){
    return Response.json(
      { message: error.message },
      { status: error.status || 500 }
    )
  }
}