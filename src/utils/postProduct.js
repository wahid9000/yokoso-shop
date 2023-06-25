import "server-only";
import { postProductsInDb } from "@/services/products.service";
import {cache} from 'react';

const postProduct = cache(() => {
    return postProductsInDb();
});

export default postProduct;