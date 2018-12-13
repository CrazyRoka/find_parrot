import { ProductOperations, Authentification } from "../actions";
import { ADD_PRODUCT, REMOVE_PRODUCT, LOG_IN, LOG_OUT } from "../constants";
import { ProductStore, AuthentificationStore } from "../dataTypes";
import { combineReducers } from "redux";

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

const authentification = (state: AuthentificationStore = { jwt: '', logged: false, email: '' }, action: Authentification) : AuthentificationStore => {
    switch(action.type){
        case LOG_IN:
            return { ...state, jwt: action.jwt, logged: true, email: action.email }
        case LOG_OUT:
            return { ...state, jwt: '', logged: false, email: '' }
        default:
            return state;
    }
}

export default combineReducers({products, authentification});