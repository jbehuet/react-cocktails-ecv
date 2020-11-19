import { types } from './favorites.actions';

export default function reducer(state, action) {
    switch (action.type) {
        case types.FAVORITES_DONE:
            return {
                ...state,
                favorites: action.payload
            }

        case types.FAVORITES_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
