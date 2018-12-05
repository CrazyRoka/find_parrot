import * as constants from '../constants';
import { Product } from '../dataTypes';

export interface AddProduct {
    type: constants.ADD_PRODUCT;
    product: Product;
}

export interface RemoveProduct {
    type: constants.REMOVE_PRODUCT;
    product: Product;
}

export type ProductOperations = AddProduct | RemoveProduct;

export function addProduct(product : Product) : AddProduct {
    return {
        type: constants.ADD_PRODUCT,
        product
    }
}

export function removeProduct(product : Product) : RemoveProduct {
    return {
        type: constants.REMOVE_PRODUCT,
        product
    }
}