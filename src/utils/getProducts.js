import "server-only";
import { getProductsFromDb } from "@/services/products.service";
import {cache} from 'react';

const getProducts = cache(() => {
    return getProductsFromDb();
});

export default getProducts;