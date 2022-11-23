import React from 'react';
import './sass/main.scss';
import EmailInput from './EmailInput';

class Login extends React.Component {

    

    render() {
        return (
            <div id='boxContainer'>
                <LoginHeader title="IceyMicey" />
                
                <LoginForm />
            </div>
        )
    }
  
}

const LoginHeader = props => (
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

const LoginForm = props => (
  
    <div id='formContainer'>
        <form id="loginForm" className="commonForm">
            <EmailInput />
            <FormInput type="password" placeholder="Password" />
            <FormCheckBox id="remember" label="Remember Me" />
            <FormButton title="Login" />
        </form>
    </div>
);


export default Login;