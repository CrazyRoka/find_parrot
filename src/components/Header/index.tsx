import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export interface State {
    isVisible: boolean;
}

const style = {
    boxShadow: '0 0 6px rgba(0,0,2,0.16)',
    background: '#f7f7f7',
    paddingTop: '0px',
    height: '80px'
};

class Header extends React.PureComponent {
    state : State = { isVisible: false };

    handleScroll = () => {
        const { isVisible } = this.state;
        let scrollTop = window.scrollY;
        if(scrollTop !== 0 && !isVisible)this.setState({ isVisible: true });
        if(scrollTop === 0 && isVisible)this.setState({ isVisible: false });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { isVisible } = this.state;

        return (
            <div className="main-header" style={ isVisible ? style : {}}>
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
}

export default Header;