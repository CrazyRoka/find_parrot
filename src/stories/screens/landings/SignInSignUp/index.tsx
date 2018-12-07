import * as React from 'react';
import './index.scss';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Field from '../../../../components/Field';
import SubmitButton from '../../../../components/SubmitButton';

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
                <form className="sign-up-form">
                    <div className="title">Are you new user?</div>
                    <Field type="email" placeholder="Email Address" />
                    <Field type="password" placeholder="Password" />
                    <Field type="password" placeholder="Confirm Password" />
                    <SubmitButton text="SIGN UP"/>
                </form>
            </div>
        </div>
        <Footer />
    </div>

export default SignInSignUp;