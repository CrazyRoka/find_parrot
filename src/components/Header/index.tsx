import * as React from 'react';
import classNames from 'classnames';
import { NavLink as Link } from 'react-router-dom';
import './index.scss';
import { ABOUT_URL, SIGN_URL } from '../../constants';

export interface State {
    isVisible: boolean;
    isFixed: boolean;
    isActivated: boolean;
}

export interface Props {
    isFixed: boolean;
}

class Header extends React.PureComponent<Props, State> {
    static defaultProps = {
        isFixed: false
    };

    constructor( props : Props) {
        super(props);
        
        const { isFixed } = props;
        this.state = {
            isVisible: isFixed || window.scrollY !== 0,
            isFixed,
            isActivated: false
        };
    }

    handleScroll = () => {
        const { isVisible, isActivated } = this.state;
        let scrollTop = window.scrollY;
        if(scrollTop !== 0 && !isVisible)this.setState({ isVisible: true });
        if(scrollTop === 0 && isVisible)this.setState({ isVisible: false });
    }

    menuClick = () => {
        const { isActivated } = this.state;
        this.setState({ isActivated: !isActivated });
        if(isActivated)document.body.classList.remove('overflow-hide');
        else document.body.classList.add('overflow-hide');
    }

    componentDidMount() {
        if(!this.state.isFixed)
            window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        if(!this.state.isFixed)
            window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { isVisible, isActivated } = this.state;
        const mainHeaderClassName = classNames('main-header', { visible: isVisible });
        const mobileNavbarClassName = classNames('mobile-navbar', {activated: isActivated });
        return (
            <React.Fragment>
                <div className={mainHeaderClassName}>
                    <Link to={'/'} className="main-logo" />
                    <div className="navigation-bar">
                        <Link exact to={'/'} className="link" activeClassName="selected">ALL PRODUCTS</Link>
                        <Link to={ABOUT_URL} className="link" activeClassName="selected">ABOUT US</Link>
                        <Link to={SIGN_URL} className="link">LOG IN</Link>
                        <div className="shape" />
                        <Link to={SIGN_URL} className="link">SIGN UP</Link>
                    </div>
                    <div className="menu-logo" onClick={this.menuClick} />
                </div>
                <div className={mobileNavbarClassName}>
                    <Link exact to={'/'} className="link" activeClassName="selected">ALL PRODUCTS</Link>
                    <Link to={ABOUT_URL} className="link" activeClassName="selected">ABOUT US</Link>
                    <Link to={SIGN_URL} className="link">LOG IN</Link>
                    <div className="shape" />
                    <Link to={SIGN_URL} className="link">SIGN UP</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;