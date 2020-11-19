import reducers, { initialState } from '../reducers';
import { types } from './cocktail.actions';

describe('cocktail reducer', () => {

    test('should change pending when started', () => {
        const previousState = initialState;
        const nextState = reducers(previousState, {
            type: types.COCKTAIL_STARTED
        });
        expect(nextState.pending).toBeTruthy();
    });

    test('should return cocktail when done', () => {
        const previousState = initialState;
        const cocktail = {
            idDrink: '000',
            strDrink: 'sample'
        }
        const nextState = reducers(previousState, {
            type: types.COCKTAIL_DONE,
            payload: cocktail
        });
        expect(nextState.cocktail.idDrink).toEqual(cocktail.idDrink);
    });


    test('should return an error when failed', () => {
        const previousState = initialState;
        const error = {
            message: "Oups"
        }
        const nextState = reducers(previousState, {
            type: types.COCKTAIL_FAILED,
            payload: error
        });
        expect(nextState.error.message).toEqual(error.message);
    });

})