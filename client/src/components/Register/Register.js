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
  background: linear-gradient(45deg, #005AA7 30%, #FFFDE4 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  width: 100%;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);

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
            <Footer />
            </div>
        </div>
    );
}

export default Register;
