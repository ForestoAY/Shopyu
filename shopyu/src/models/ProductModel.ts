import { db } from '@/db/config';
import { ProductTypes } from './../types/ProductTypes';

export class ProductModel {
  static collection(){
    return db.collection<ProductTypes>("products");
  }

  static findAll(){
    return this.collection().find().toArray();
  }

  static findBySlug(slug: string) {
    return this.collection().findOne({ slug: slug });
  }
}