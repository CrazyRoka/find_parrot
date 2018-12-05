export interface ProductStore {
    products: Array<Product>;
}

export interface Product {
    id: string;
    name: string;
    image_url: string;
}