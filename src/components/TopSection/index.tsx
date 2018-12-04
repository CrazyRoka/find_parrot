import * as React from 'react';
import './index.css';
import Header from '../Header';
import MainSlider from '../MainSlider';
import HelperBar from '../HelperBar';

const TopSection = () =>
    <div className="top-section">
        <Header />
        <MainSlider />
        <HelperBar />
    </div>

export default TopSection;