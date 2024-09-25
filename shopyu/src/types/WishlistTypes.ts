import { ObjectId } from "mongodb";

export interface WishlistTypes {
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}