import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import TrackVisibility from 'react-on-screen';

export interface Props {
    isVisible?: boolean;
}

const Header = ({ isVisible } : Props) => {
    const style = !isVisible ? {
        boxShadow: '0 0 6px rgba(0,0,2,0.16)',
        background: 'rgba(235,236,240)',
        paddingTop: '0px',
        height: '80px'
    } : {};
    return (
        <div className="main-header" style={style}>
            <Link to={'/'} className="main-logo" />
            <div className="navigation-bar">
                <Link to={'/'} className="link">ALL PRODUCTS</Link>
                <Link to={'/'} className="link">ABOUT US</Link>
                <Link to={'/'} className="link">LOG IN</Link>
                <div className="shape" />
                <Link to={'/'} className="link">SIGN UP</Link>
            </div>
        </div>
    );
}

const TrackedHeader = () =>
    <TrackVisibility partialVisibility>
        <Header />
    </TrackVisibility>

export default TrackedHeader;