import React from 'react';
import './sass/main.scss';
import EmailInput from './EmailInput';

class SignUp extends React.Component {

    render() {
        return (
            <div id='boxContainer'>
                <SignUpHeader title="IceyMicey" />
                <SignUpForm />
            </div>
        )
    }
}

const SignUpHeader = props => (
    <div id='boxHeader'>
        <div id='headerTitle'>
            {props.title}
        </div>
    </div>
);

const FormInput = props => (
    <div className='containerRow'>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);

const FormCheckBox = props => (
    <div className='containerRow'>
        <input id={props.id} type='checkbox' />
        <label htmlFor={props.id}>{props.label}</label>
    </div>
);

const FormButton = props => (
    <div className='containerRow'>
        <button type='button'>{props.title}</button>
    </div>
);

const SignUpForm = props => (
    <div id='formContainer'>
        <form id="signUpForm" class="commonForm">
            <FormInput type="text" placeholder="First Name" />
            <FormInput type="text" placeholder="Last Name" />
            <FormInput type="text" placeholder="Contact" />
            <EmailInput />
            <FormInput type="password" placeholder="Password" />
            <FormInput type="password" placeholder="Confirm Password" />
            <FormCheckBox id="terms" label="I agree to the terms and conditions*" />
            <FormButton title="Sign Up" />
        </form>
    </div>
);

export default SignUp;