import { db } from "@/db/config";
import { hashPassword } from "@/helpers/jwt-bcrypt";
import { UserSchema, UserTypes } from "@/types/UserTypes";
import { Filter, ObjectId } from "mongodb";

export class UserModel {
  static collection(){
    return db.collection<UserTypes>("users");
  }

  static async findAll(){
    const result = await this.collection().find().toArray();
    return result;
  }

  static async findUserById(id:string) {
    const result = await this.collection().findOne({ _id: new ObjectId(id) });
    return result;
  }

  static async findOne(filter: Filter<UserTypes>) {
    const result = await this.collection().findOne(filter);
    return result;
  }

  static async createUser(newUser: UserTypes) {
    UserSchema.parse(newUser);
    
    const existingUser = await this.collection().findOne({
      $or: [
        { username: newUser.username },
        { email: newUser.email }
      ]
    });
    
    if (existingUser) {
      throw new Error("Username or email already exists");
    }

    newUser.password = await hashPassword(newUser.password);
    
    const result = await this.collection().insertOne(newUser);

    const { password, ...userWithoutPassword } = newUser
    
    return {
      ...userWithoutPassword,
      _id: result.insertedId
    }
  }
}