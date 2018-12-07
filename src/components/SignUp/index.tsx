import * as React from 'react';
import Field from '../Field';
import SubmitButton from '../SubmitButton';
import './index.scss';

class SignUpForm extends React.PureComponent {
    render() {
        return (
            <form className="sign-up-form">
                <div className="title">Are you new user?</div>
                <Field type="email" placeholder="Email Address" />
                <Field type="password" placeholder="Password" />
                <Field type="password" placeholder="Confirm Password" />
                <SubmitButton text="SIGN UP"/>
            </form>
        )
    }
}

export default SignUpForm;