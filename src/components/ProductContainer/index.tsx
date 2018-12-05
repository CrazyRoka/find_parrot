import * as React from 'react';
import './index.scss';

export interface Props {
    imageUrl: string;
    title: string;
}

const ProductContainer = ({ imageUrl, title } : Props) =>
    <div className="product-container">
        <div className="image-wrapper">
            <img src={imageUrl} />
        </div>
        <div>{title}</div>
    </div>

export default ProductContainer;