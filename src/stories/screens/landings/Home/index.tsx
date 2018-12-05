import * as React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import product1 from '../../../../assets/images/product1.png';
import product2 from '../../../../assets/images/product2.png';
import product3 from '../../../../assets/images/product3.png';
import product4 from '../../../../assets/images/product4.png';
import product5 from '../../../../assets/images/product5.png';
import product6 from '../../../../assets/images/product6.png';
import clickCategory from '../../../../assets/images/clickCategory.png';
import clickHand from '../../../../assets/images/clickHand.png';
import Header from '../../../../components/Header';
import SearchForm from '../../../../components/SearchForm';
import ProductContainer from '../../../../components/ProductContainer';
import Footer from '../../../../components/Footer';
import { Product } from '../../../../dataTypes';

export interface Props {
    products?: Array<Product>;
}

const Home = ({ products } : Props) => 
    <div className="home">
        <div className="top-section">
            <Header />
            <div className="home-slider">
                <div className="big-title">
                    Quick Search for Your <span style={{ color: "#0E7200" }}>Perfect Product</span>
                </div>
                <div className="small-title">
                    INNOVATE • LIST • CONNECT
                </div>
                <SearchForm />
            </div>
            <div className="helper-bar">
                <div className="helper-container">
                    <div className="helper-box">
                        <span><img src={clickCategory} /></span>
                        <span>All categories</span>
                    </div>
                    <div className="helper-box">
                        <span><img src={clickHand} /></span>
                        <span>How it works?</span>
                    </div>
                </div>
            </div>
        </div>
        { (products && products.length >= 6) ?
            <div className="products-section">
                <div className="big-title">
                    Most Popular Products
                </div>
                <div className="small-title">
                    This is the list of products that are most interested in users
                </div>
                <div className="product-grid">
                    { products.slice(0, 6).map((p) =>
                        <ProductContainer imageUrl={p.image_url} title={p.name} key={p.id} />
                    )}
                </div>
                <Link to={'/'} className="all-products">All products</Link>
            </div> :
            <div className="products-section">
            </div>
        }
        <Footer />
    </div>

export default Home;