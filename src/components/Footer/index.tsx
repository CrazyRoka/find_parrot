import * as React from 'react';
import './index.scss';
import logo from '../../assets/images/footer_logo.png';
import { Link } from 'react-router-dom';
import { ABOUT_URL, CONTACT_US_URL } from '../../constants';

const Footer = () =>
    <div className="footer">
        <div className="top-part">
            <div className="footer-logo">
                <img src={logo}/>
            </div>
            <div className="footer-bar">
                <Link to={ABOUT_URL} className="footer-link">ABOUT US</Link>
                <Link to='/' className="footer-link">TERMS OF SERVICE</Link>
                <Link to='/' className="footer-link">PRIVACY POLICY</Link>
                <Link to={CONTACT_US_URL} className="footer-link">CONTACT US</Link>
            </div>
        </div>
        <div className="bottom-part">
            © 2018 Find Parrot
        </div>
    </div>

export default Footer;