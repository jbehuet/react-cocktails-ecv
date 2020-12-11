import {
    startedReducer,
    doneReducer,
    failedReducer,
    logger
} from './common.reducer';
import authenticationReducer from './authentication/authentication.reducer';
import cocktailReducer from './cocktail/cocktail.reducer';
import favoritesReducer from './favorites/favorites.reducer';
import { getToken } from './authentication/authentication.service';


const token = getToken();

export const initialState = {
    isLoggedIn: !!token,
    token: token,
    pending: false,
    cocktail: null,
    favorites: [],
    error: null
}

export function composeReducers(initialState, reducers) {
    return (state, action) =>
        reducers.reduce(
            (acc, cur) => cur(acc, action),
            state === undefined ? initialState : state
        );
}

export default composeReducers(initialState, [
    logger,
    startedReducer,
    authenticationReducer,
    cocktailReducer,
    favoritesReducer,
    doneReducer,
    failedReducer
]);
