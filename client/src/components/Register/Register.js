import React, { useState, Suspense } from 'react';
import { useHistory, Link } from 'react-router-dom';
// eslint-disable-next-line 
import { registerUser, getUsers } from '../../utils/userApis';
import { checkFormFields } from './checkFormFields';
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import './stylesRegister.css'
import Footer from '../Footer'
import Button from '@material-ui/core/Button';
import styled from "styled-components";
const StyledButton = styled(Button)`
	 width: 100%;
	 height: 50px;
	 background: #f3f0f1;
	 position: relative;
	 background: #f3f0f1;
	 margin-bottom: 25px;
	 border-radius: 32px;
	 text-align: center;
	 cursor: pointer;
	 transition: all 0.1s ease-in-out;
 .Button span {
	 line-height: 100px;
	 font-family: "Montserrat", sans-serif;
	 font-size: 32px;
	 font-weight: semibold;
}
 .Button:nth-child(1) {
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
	 color: #6f6cde;
}
 .Button:nth-child(1):hover {
	 opacity: 0.3;
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}
 .Button:nth-child(1):active {
	 opacity: 1;
	 box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
	 color: #79e3b6;
}
 .Button:nth-child(2) {
	 opacity: 0.3;
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
	 color: #6f6cde;
}
 .Button:nth-child(3) {
	 box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
	 color: #79e3b6;
}
 .Button:nth-child(3):hover {
	 opacity: 1;
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}

`;
function Register(props) {
    const history = useHistory();
    const [registerState, setRegisterState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        errors: {},
        formIsValid: true,
    });

    const handleValidation = () => {
        const [errors, formIsValid] = checkFormFields(registerState);
        setRegisterState({ ...registerState, errors, formIsValid });
    };

    const onChange = (event) => {
        setRegisterState({ ...registerState, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
        let errors = {};
        handleValidation();
        event.preventDefault();
        const userData = {
            first_name: registerState.first_name,
            last_name: registerState.last_name,
            email: registerState.email,
            password: registerState.password,
        };
        if (registerState.formIsValid) {
            try {
                const res = await registerUser(userData)
                console.log(res.data);
                history.push('/login');
                console.log('Form submitted');
            } catch (error) {
                errors['email'] = 'Email already exists';
                setRegisterState({ ...registerState, errors })
            }
        } else {
            console.log('Form has errors.');
        }
    };

    return (
        <div>
        <div className='outerContainer'>
        <div className="container ">
            <div className="row">
                <div className="mx-auto mt-5 col-md-6">
                    <form noValidate onSubmit={onSubmit}>
                        <div className="EcoPhoto">
                        <Link to="/" >
                            <Suspense fallback={
                                        <Spinner animation="border" />
                                        }>
                                            <MyComp /> 
                                </Suspense>
                                </Link>
                                <h1 className="mb-3 h3 font-weight normal">Please Register</h1>
                        </div>
                        <div className="form-group">  
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                refs="first_name"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter First Name"
                                value={registerState.first_name}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['first_name']}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                refs="last_name"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter Last Name"
                                value={registerState.last_name}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['last_name']}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                refs="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={registerState.email}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['email']}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                refs="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={registerState.password}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['password']}</span>
                            </div>
                            <StyledButton type="submit"  >
                                Submit
                            </StyledButton>
                    </form>
                </div>
            </div>
            </div>
            </div>
            <Footer />
            </div>
    );
}

export default Register;
