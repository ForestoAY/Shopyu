import { ObjectId } from "mongodb";

export interface WishlistTypes {
  _id?: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
}