import jwtDecode from 'jwt-decode';
import { setAuthToken } from "../utils/setAuthToken";
import { SET_CURRENT_USER } from './types';

export const setUserLogout = async (dispatch) => {
    
    await setAuthToken(false)
    dispatch({ type: SET_CURRENT_USER, payload: {} });
};

export const setUserLoggedIn = async (token, dispatch) => {
    
    await setAuthToken(token);
    // Decode token to get user data
    const decodedToken = await jwtDecode(token);
    
    // Set current user
    await dispatch({ type: SET_CURRENT_USER, payload: decodedToken });
}
