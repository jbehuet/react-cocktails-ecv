import { register, login, logout } from './authentication.service';

export const types = {
    AUTH_STARTED: 'AUTH_STARTED',
    AUTH_DONE: 'AUTH_DONE',
    AUTH_LOGOUT: 'AUTH_LOGOUT',
    AUTH_FAILED: 'AUTH_FAILED'
}

export function authRegister(dispatch, data) {
    dispatch(_started());
    register(data)
        .then(token => dispatch(_onSuccess(token)))
        .catch(error => dispatch(_onError(error)));
}

export function authLogin(dispatch, data) {
    dispatch(_started());
    login(data)
        .then(token => dispatch(_onSuccess(token)))
        .catch(error => dispatch(_onError(error)));
}

export function authLogout(dispatch, data) {
    logout();
    dispatch({
        type: types.AUTH_LOGOUT
    })
}

function _started() {
    return {
        type: types.AUTH_STARTED
    }
}

function _onSuccess(token) {
    return {
        type: types.AUTH_DONE,
        payload: token
    }
}

function _onError(error) {
    return {
        type: types.AUTH_FAILED,
        payload: error
    }
}