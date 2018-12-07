import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './index.scss';
import { ABOUT_URL, SIGN_URL } from '../../constants';

export interface State {
    isVisible: boolean;
    isFixed: boolean;
}

export interface Props {
    isFixed: boolean;
}

const style = {
    boxShadow: '0 0 6px rgba(0,0,2,0.16)',
    background: '#f7f7f7',
    paddingTop: '5px',
    paddingBottom: '5px',
    height: '90px'
};

class Header extends React.PureComponent<Props, State> {
    static defaultProps = {
        isFixed: false
    };

    constructor( props : Props) {
        super(props);
        
        const { isFixed } = props;
        this.state = {
            isVisible: isFixed || window.scrollY !== 0,
            isFixed
        };
    }

    handleScroll = () => {
        const { isVisible } = this.state;
        let scrollTop = window.scrollY;
        if(scrollTop !== 0 && !isVisible)this.setState({ isVisible: true });
        if(scrollTop === 0 && isVisible)this.setState({ isVisible: false });
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
        const { isVisible } = this.state;
        const className = `main-header ${ isVisible ? 'visible' : ''}`;
        return (
            <div className={className}>
                <Link to={'/'} className="main-logo" />
                <div className="navigation-bar">
                    <Link exact to={'/'} className="link" activeClassName="selected">ALL PRODUCTS</Link>
                    <Link to={ABOUT_URL} className="link" activeClassName="selected">ABOUT US</Link>
                    <Link to={SIGN_URL} className="link">LOG IN</Link>
                    <div className="shape" />
                    <Link to={SIGN_URL} className="link">SIGN UP</Link>
                </div>
            </div>
        );
    }
}

export default Header;