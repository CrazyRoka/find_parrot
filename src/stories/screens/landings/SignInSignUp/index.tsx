import * as React from 'react';
import './index.scss';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Field from '../../../../components/Field';
import SubmitButton from '../../../../components/SubmitButton';
import SignUpContainer from '../../../../containers/components/SignUpContainer';

const SignInSignUp = () =>
    <div className="sign-page">
        <Header />
        <div className="sign-section">
            <div className="sign-in-container">
                <form className="sign-in-form">
                    <div className="title">Have an Account?</div>
                    <Field type="email" placeholder="Email Address" />
                    <Field type="password" placeholder="Password" />
                    <SubmitButton />
                </form>
            </div>
            <div className="sign-up-container">
                <SignUpContainer />
            </div>
        </div>
        <Footer />
    </div>

export default SignInSignUp;