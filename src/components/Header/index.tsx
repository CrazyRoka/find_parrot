import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () =>
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

export default Header;