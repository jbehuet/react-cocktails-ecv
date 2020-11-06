import { types } from './cocktails.actions';

export const initialState = {
    pending: false,
    cocktail: null,
    cocktails: [],
    error: null
}

export default function reducer(state, action) {
    switch (action.type) {
        case types.FETCH_COCKTAIL_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.FETCH_COCKTAIL_SUCCESS:
            return {
                ...state,
                pending: false,
                cocktail: action.payload
            }
        case types.FETCH_COCKTAIL_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case types.LIKE_COCKTAIL:
            return {
                ...state,
                cocktails: [
                    ...state.cocktails,
                    action.payload
                ]
            }
        default:
            return state;
    }
}
