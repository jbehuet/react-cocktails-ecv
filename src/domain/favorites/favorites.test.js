import reducers, { initialState } from '../reducers';
import { types } from './favorites.actions';

describe('favorites reducer', () => {

    test('should return all favorites when done', () => {
        const previousState = initialState;
        const favorite = {
            id: '000',
            name: 'sample'
        }
        const nextState = reducers(previousState, {
            type: types.FAVORITES_DONE,
            payload: [favorite]
        });
        expect(nextState.favorites).toHaveLength(1);
        expect(nextState.favorites[0].id).toEqual(favorite.id);
    });


    test('should return an error when failed', () => {
        const previousState = initialState;
        const error = {
            message: "Oups"
        }
        const nextState = reducers(previousState, {
            type: types.FAVORITES_FAILED,
            payload: error
        });
        expect(nextState.error.message).toEqual(error.message);
    });

})