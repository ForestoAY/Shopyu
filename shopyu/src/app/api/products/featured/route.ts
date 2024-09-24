import { ProductModel } from "@/models/ProductModel";

export async function GET(request: Request) {
  try {
    const products = await ProductModel.findByFeatured();
    return Response.json(products)
  } catch (error: any){
    return Response.json(
      { message: error.message },
      { status: error.status || 500 }
    )
  }
}