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
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #D3959B 30%, #1D976C 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 40px;
  padding: 0 30px;
  
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);
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
                            <StyledButton type="submit"  >
                                Submit
                            </StyledButton>
                        {/* <button type="submit" className="btn btn-lg btn-info bg-info btn-block">
                            Sign in
                        </button> */}
                    </form>
                </div>
            </div>
            <Footer />
            </div>
        </div>
    );
}

export default Login;
