import { types } from './cocktail.actions';

export default function reducer(state, action) {
    switch (action.type) {
        case types.COCKTAIL_STARTED:
            return {
                ...state,
                pending: true
            }
        case types.COCKTAIL_DONE:
            return {
                ...state,
                pending: false,
                cocktail: action.payload
            }
        case types.COCKTAIL_FAILED:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default:
            return state;
    }
}
