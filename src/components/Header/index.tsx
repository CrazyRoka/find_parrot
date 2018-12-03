import * as React from 'react';
import './index.css';
import Logo from '../Logo';
import NavigationBar from '../NavigationBar';

const Header = () =>
    <div className="main-header">
        <Logo />
        <NavigationBar />
    </div>

export default Header;