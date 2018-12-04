import * as React from 'react';
import TopSection from '../TopSection';
import './index.css';
import ProductsSection from '../ProductsSection';
import Footer from '../Footer';

const Main = () => 
    <div className="main">
        <TopSection />
        <ProductsSection />
        <Footer />
    </div>

export default Main;