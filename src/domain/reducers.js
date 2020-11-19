import {
    startedReducer,
    doneReducer,
    failedReducer,
    logger
} from './common.reducer';
import cocktailReducer from './cocktail/cocktail.reducer';
import favoritesReducer from './favorites/favorites.reducer';

export const initialState = {
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
    cocktailReducer,
    favoritesReducer,
    doneReducer,
    failedReducer
]);
