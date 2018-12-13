import * as React from 'react';
import SubmitButton from '../SubmitButton';
import './index.scss';
import { notification } from 'antd';

export interface State {
    emailRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
    confirmPasswordRef: React.RefObject<HTMLInputElement>;
}

export interface Props {
    requestSignUp: Function;
}

function validateEmail(email : string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

class SignUpForm extends React.PureComponent<Props, State> {
    constructor(props : any) {
        super(props);

        this.state = {
            emailRef: React.createRef(),
            passwordRef: React.createRef(),
            confirmPasswordRef: React.createRef()
        };
    }
    

    sign_up = (event : Event) => {
        event.preventDefault();
        const { emailRef, passwordRef, confirmPasswordRef } = this.state;
        const { requestSignUp } = this.props;
        const email : string = emailRef.current!.value;
        const password : string = passwordRef.current!.value;
        const confirmPassword : string = confirmPasswordRef.current!.value;
        confirmPasswordRef.current!.value = '';

        const errors : Array<Array<string>> = [];
        if(password.length < 8){
            errors.push(['Password', 'Password length must be between 8 and 30 characters']);
        }
        if(password !== confirmPassword){
            errors.push(['Confirm Password', "Cofirm password must be equal to password"]);
        }
        if(!validateEmail(email)){
            errors.push(['Email', "Incorrect email format!"]);
        }
        
        errors.forEach(error => notification['error']({message: error[0], description: error[1]}));
    
        if(errors.length == 0){
            requestSignUp(email, password);
        }
    }

    render() {
        const { emailRef, passwordRef, confirmPasswordRef } = this.state;

        return (
            <form className="sign-up-form">
                <div className="title">Are you new user?</div>
                <input className="email-field" type='email' placeholder={'Email Address'} ref={emailRef} />
                <input className="password-field" type='password' placeholder={'Password'} ref={passwordRef} />
                <input className="confirm-password-field" type='password' placeholder={'Confirm Password'} ref={confirmPasswordRef} />
                <SubmitButton onClick={this.sign_up}>SIGN UP</SubmitButton>
            </form>
        )
    }
}

export default SignUpForm;