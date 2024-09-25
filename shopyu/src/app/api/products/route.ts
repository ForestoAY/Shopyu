import { handleError } from "@/helpers/handleError";
import { ProductModel } from "@/models/ProductModel";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("search") || "";

    const products = await ProductModel.findAll(searchQuery);

    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return handleError(error);
  }
}
