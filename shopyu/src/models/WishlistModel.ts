import { db } from "@/db/config";
import { WishlistTypes } from "@/types/WishlistTypes";
import { ObjectId } from "mongodb";

export class WishlistModel {
  static collection(){
    return db.collection<WishlistTypes>("wishlist");
  }

  static async findAll(){
    return await this.collection().find().toArray();
  }

  static async findByUserId(userId: ObjectId) {
    return await this.collection().find({ userId }).toArray();
  }

  static async addToWishlist(userId: ObjectId, productId: ObjectId) {    
    const createdAt = new Date();
    const updatedAt = new Date();
    return await this.collection().insertOne({ userId, productId, createdAt, updatedAt });
  }

  static async removeFromWishlist(userId: ObjectId, productId: ObjectId) {
    return await this.collection().deleteOne({ userId, productId });
  }
}