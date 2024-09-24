import { db } from '@/db/config';
import { ProductTypes } from './../types/ProductTypes';

export class ProductModel {
  static collection(){
    return db.collection<ProductTypes>("products");
  }

  static async findAll(){
    return await this.collection().find().toArray();
  }

  static async findBySlug(slug: string) {
    return await this.collection().findOne({ slug: slug });
  }

  static async findByFeatured(){
    const featuredProducts = await this.collection().find().sort({createdAt: -1}).limit(5).toArray();
    return featuredProducts;
  }
}