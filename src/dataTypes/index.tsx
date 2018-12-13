export interface ProductStore {
    products: Array<Product>;
}

export interface Product {
    id: string;
    name: string;
    image_url: string;
}

export interface AuthentificationStore {
    jwt: string;
    email: string;
    logged: boolean;
}