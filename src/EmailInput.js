import { useEffect, useState } from 'react';
import validator from 'validator';

export default function EmailInput() {

    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [emailError, setEmailError] = useState("");

    useEffect(() => {

        setEmailValid(validateEmail(email));

        if (!emailValid) {
            setEmailError("Please enter valid email address!")
        } else {
            setEmailError("");
        }

    }, [email])

    return (
         <div className='containerRow'>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <span id="errorEmail" className="error-message">{emailError}</span>
         </div>
        
    )

}

const validateEmail = email => {
    return validator.isEmail(email) && email.length > 0;
}