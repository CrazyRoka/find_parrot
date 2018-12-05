import { ProductOperations } from "../actions";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants";
import { ProductStore } from "../dataTypes";

const products = (state: ProductStore = { products: [] }, action: ProductOperations) : ProductStore => {
    switch(action.type){
        case ADD_PRODUCT:
            return { ...state, products: state.products.concat(action.product) }
        case REMOVE_PRODUCT:
            return { ...state, products: state.products.filter((prod) => prod.id !== action.product.id) }
        default:
            return state;
    }
}

export default products;