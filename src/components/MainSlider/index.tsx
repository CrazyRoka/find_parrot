import * as React from 'react';
import './index.css'
import SearchForm from '../SearchForm';

const MainSlider = () =>
    <div className="main-slider">
        <div className="big-title">
            Quick Search for Your <span style={{ color: "#0E7200" }}>Perfect Product</span>
        </div>
        <div className="small-title">
            INNOVATE • LIST • CONNECT
        </div>
        <SearchForm />
    </div>

export default MainSlider;