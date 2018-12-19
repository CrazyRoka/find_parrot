import * as React from 'react';
import SubmitButton from '../SubmitButton';
import './index.scss';
import { notification } from 'antd';

export interface State {
    emailRef: React.RefObject<HTMLInputElement>;
    passwordRef:  React.RefObject<HTMLInputElement>;
}

export interface Props {
    requestSignIn: Function;
}

function validateEmail(email : string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

class SignInForm extends React.PureComponent<Props, State> {
    state: State = {
        emailRef: React.createRef(),
        passwordRef: React.createRef()
    }

    sign_in = (event: Event) => {
        event.preventDefault();
        const { emailRef, passwordRef } = this.state;
        const { requestSignIn } = this.props;
        const email = emailRef.current!.value;
        const password = passwordRef.current!.value;
        
        const errors : Array<Array<string>> = [];
        if(password.length < 8){
            errors.push(['Password', 'Password length must be between 8 and 30 characters']);
        }
        if(!validateEmail(email)){
            errors.push(['Email', "Incorrect email format!"]);
        }
        
        errors.forEach(error => notification['error']({message: error[0], description: error[1]}));
    
        if(errors.length == 0){
            requestSignIn(email, password);
        }
    }

    render() {
        const { emailRef, passwordRef } = this.state;

        return (
            <form className="sign-in-form">
                <div className="title">Have an Account?</div>
                <input className="email-field" type='email' placeholder='Email Address' ref={emailRef} />
                <input className="password-field" type='password' placeholder='Password' ref={passwordRef} />
                <SubmitButton onClick={this.sign_in} />
            </form>
        )
    }
}

export default SignInForm;