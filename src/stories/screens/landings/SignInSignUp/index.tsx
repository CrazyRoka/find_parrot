import * as React from 'react';
import './index.scss';
import Footer from '../../../../components/Footer';
import SignUpContainer from '../../../../containers/components/SignUpContainer';
import SignInContainer from '../../../../containers/components/SignInContainer';
import HeaderContainer from '../../../../containers/components/HeaderContainer';

const SignInSignUp = () =>
    <div className="sign-page">
        <HeaderContainer />
        <div className="sign-section">
            <div className="sign-in-container">
                <SignInContainer />
            </div>
            <div className="sign-up-container">
                <SignUpContainer />
            </div>
        </div>
        <Footer />
    </div>

export default SignInSignUp;