import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppContext } from './store';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [state] = useAppContext();
    return (
        <Route {...rest} render={props => (
            state.isAuthenticated
                ? <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};


export default PrivateRoute;
