import "server-only";
import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

export const getProductsFromDb = async () => {
  try {
    const db = await DbConnect();
    const productsCollection = db.collection("products");
    return productsCollection.find({}).toArray();
  } catch (error) {
    console.error("Error retrieving products from the database:", error);
    throw error;
  }
};

export const getProductByIdFromDb = async (id) => {
    const db = await DbConnect();
    const productsCollection = db.collection("products");
    const query = {
      _id: new ObjectId(id),
    };
    return productsCollection.findOne(query);
  };
