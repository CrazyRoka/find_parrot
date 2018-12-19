import * as constants from '../constants';
import { Product } from '../dataTypes';
import { Dispatch } from 'redux';
import { notification } from 'antd';

export interface AddProduct {
    type: constants.ADD_PRODUCT;
    product: Product;
}

export interface RemoveProduct {
    type: constants.REMOVE_PRODUCT;
    product: Product;
}

export interface LogIn {
    type: constants.LOG_IN;
    jwt: string;
    email: string;
}

export interface LogOut {
    type: constants.LOG_OUT;
}

export type ProductOperations = AddProduct | RemoveProduct;
export type Authentification = LogIn | LogOut;

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

export function successLogIn(jwt : string, email: string) : LogIn {
    return {
        type: constants.LOG_IN,
        jwt,
        email
    }
}

export function logOut() : LogOut {
    return {
        type: constants.LOG_OUT
    }
}

export function logIn(email: string, password: string) {
    return function(dispatch: Dispatch) {
        fetch(constants.API_URL + 'user_token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ auth: { email, password } })
        })
        .then(responce => {
            if(responce.ok)return responce.json();
            throw responce;
        })
        .then(data => dispatch(successLogIn(data.jwt, email)))
        .catch(error => {
            const status = error.status;
            error.json().then((data : any) => {
                notification['error']({message: 'Internal server error', description: `Server returned status ${status}`, duration: 5});
                for(let error in data.errors){
                    notification['error']({
                        message: capitalize(error),
                        description: data.errors[error].map((str : string) => capitalize(str)).join(';'),
                        duration: 5
                    });
                }
            })
        })
    }
}

export function signUp(email : string, password : string) : Function {
    return function(dispatch : Dispatch) {
        fetch(constants.API_URL + 'sign_up', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { email, password } })
        })
        .then(responce => {
            if(responce.ok)return responce.json();
            throw responce;
        })
        .then(data => dispatch(successLogIn(data.jwt, email)))
        .catch(error => {
            const status = error.status;
            error.json().then((data : any) => {
                notification['error']({message: 'Internal server error', description: `Server returned status ${status}`, duration: 5});
                for(let error in data.errors){
                    notification['error']({
                        message: capitalize(error),
                        description: data.errors[error].map((str : string) => capitalize(str)).join(';'),
                        duration: 5
                    });
                }
            })
        })
    }
}

function capitalize(str : string) : string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}