import * as React from 'react';
import './index.css';
import ProductContainer from '../ProductContainer';
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';
import product5 from '../../assets/images/product5.png';
import product6 from '../../assets/images/product6.png';

const ProductGrid = () =>
    <div className="product-grid">
        <ProductContainer imageUrl={product1} title={"Hubstaff Directory"} />
        <ProductContainer imageUrl={product2} title={"Jira 2017"} />
        <ProductContainer imageUrl={product3} title={"Slack Pro"} />
        <ProductContainer imageUrl={product4} title={"TraveChat"} />
        <ProductContainer imageUrl={product5} title={"Network"} />
        <ProductContainer imageUrl={product6} title={"Time Camp"} />
    </div>

export default ProductGrid;
