import "server-only";
import DbConnect from "./DbConnect";

export const getProductsFromDb = async () => {
  try {
    const db = await DbConnect();
    console.log(db);
    const productsCollection = db.collection("products");
    return productsCollection.find({}).toArray();
  } catch (error) {
    console.error("Error retrieving products from the database:", error);
    throw error;
  }
};
