import * as React from 'react';
import './index.css';
import ProductGrid from '../ProductGrid';
import { Link } from 'react-router-dom';

const ProductsSection = () =>
    <div className="products-section">
        <div className="big-title">
            Most Popular Products
        </div>
        <div className="small-title">
            This is the list of products that are most interested in users
        </div>
        <ProductGrid />
        <Link to={'/'} className="all-products">All products</Link>
    </div>

export default ProductsSection;