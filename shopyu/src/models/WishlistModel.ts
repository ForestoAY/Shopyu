import { db } from "@/db/config";
import { WishlistTypes } from "@/types/WishlistTypes";

export class WishlistModel {
  static collection(){
    return db.collection<WishlistTypes>("wishlists");
  }

  static async findByUserId(userId: string) {
    return await this.collection().find({ userId }).toArray();
  }

  static async addToWishlist(userId: string, productId: string) {
    const createdAt = new Date();
    const updatedAt = new Date();
    return await this.collection().insertOne({ userId, productId, createdAt, updatedAt });
  }

  static async removeFromWishlist(userId: string, productId: string) {
    return await this.collection().deleteOne({ userId, productId });
  }
}