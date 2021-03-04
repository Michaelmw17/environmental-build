import React, { useState, Suspense } from 'react';
import { GET_ERRORS } from '../../actions/types';
import { useAppContext } from '../../store';
import { loginUser } from '../../utils/userApis';
import { useHistory } from 'react-router-dom';
import { setUserLoggedIn } from '../../actions';
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import Footer from '../Footer'
import { Link } from 'react-router-dom';
import './stylesLogin.css'
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import Col from 'react-bootstrap/Col'

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


function Login() {
    const history = useHistory();

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [, appDispatch ] = useAppContext();

    const onChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: formState.email,
            password: formState.password,
        };
        try {
            const response = await loginUser(user);
            // Set token to localStorage
            const token = response.data;
            // Set user to logged in
            await setUserLoggedIn(token, appDispatch);

            history.push('/');
        } catch (error) {
            appDispatch({
                type: GET_ERRORS,
                payload: error,
            });
        }
    };

    return (
        <div>
        <div className='outerContainer'>
        <div className="container">
            <div className="row">
                <div className="mx-auto mt-5 col-md-6">
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="EcoPhoto">
                        <Link to="/" >
                            <Suspense fallback={
                                        <Spinner animation="border" />
                                        }>
                                            <MyComp /> 
                                </Suspense>
                            </Link>
                            </div>
                            <div className="form-group">
                                <h1 className="mb-3 h3 font-weight normal">Please Sign in</h1>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={formState.email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={formState.password}
                                onChange={onChange}
                            />
                            </div>
                            <Col md={12}>
                            <StyledButton type="submit"  >
                                    Submit
                            </StyledButton>
                            </Col>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        <Footer />
    </div>
    );
}

export default Login;
