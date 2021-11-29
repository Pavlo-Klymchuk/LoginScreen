import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from '../constants/userConstants';
import UserService from '../../services/UserService';

export const login = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        const data = await UserService.signin(userData);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    dispatch({ type: USER_LOGOUT });
};
