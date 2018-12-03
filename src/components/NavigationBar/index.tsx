import * as React from 'react';
import Navigation from '../Navigation';
import './index.css';
import Shape from '../Shape';

const NavigationBar = () =>
    <div className="navigation-bar">
        <Navigation link="/">ALL PRODUCTS</Navigation>
        <Navigation link="/">ABOUT US</Navigation>
        <Navigation link="/">LOG IN</Navigation>
        <Shape />
        <Navigation link="/">SIGN UP</Navigation>
    </div>

export default NavigationBar;