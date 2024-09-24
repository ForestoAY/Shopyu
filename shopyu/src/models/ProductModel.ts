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

  // static async findAll( searchQuery: string = '', pageNumber: number = 1, pageSizeNumber: number = 10) {
  //   const searchFilter = searchQuery 
  //   ? { name: { $regex: searchQuery, $options: 'i' } }
  //   : {};

  //   const totalProducts = await this.collection().countDocuments(searchFilter);
  //   const products = await this.collection()
  //   .find(searchFilter)
  //   .skip((pageNumber - 1) * pageSizeNumber)
  //   .limit(pageSizeNumber)
  //   .toArray();

  //   return {
  //     totalProducts,
  //     totalPages: Math.ceil(totalProducts / pageSizeNumber),
  //     currentPage: pageNumber,
  //     pageSize: pageSizeNumber,
  //     products,
  //   };
  // }
}

