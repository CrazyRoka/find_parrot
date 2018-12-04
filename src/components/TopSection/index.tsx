import * as React from 'react';
import './index.scss';
import SearchForm from '../SearchForm';
import clickHand from '../../assets/images/clickHand.png';
import clickCategory from '../../assets/images/clickCategory.png';
import { Link } from 'react-router-dom';

const TopSection = () =>
    <div className="top-section">
        <div className="main-header">
            <div className="main-logo" />
            <div className="navigation-bar">
                <Link to={'/'} className="link">ALL PRODUCTS</Link>
                <Link to={'/'} className="link">ABOUT US</Link>
                <Link to={'/'} className="link">LOG IN</Link>
                <div className="shape" />
                <Link to={'/'} className="link">SIGN UP</Link>
            </div>
        </div>
        <div className="main-slider">
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

export default TopSection;