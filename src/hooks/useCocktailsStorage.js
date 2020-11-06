import { useReducer } from "react";
import { likeCocktail, removeCocktail } from '../domain/cocktails.actions';
import { default as CocktailReducer, initialState } from '../domain/cocktails.reducer';

const LOCAL_STORAGE_KEY = "cocktails";

export function useCocktailsStorage(initialValue) {
    const [state, dispatch] = useReducer(CocktailReducer, {
        ...initialState,
        cocktails: (() => {
            try {
                const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.log(error);
                return initialValue;
            }
        })()
    });


    const like = cocktail => {
        try {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([
                ...state.cocktails,
                cocktail
            ]));
            dispatch(likeCocktail(cocktail));
        } catch (error) {
            console.log(error);
        }
    };

    const remove = cocktail => {
        try {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.cocktails.filter(c => c.idDrink !== cocktail.idDrink)));
            dispatch(removeCocktail(cocktail));
        } catch (error) {
            console.log(error);
        }
    }

    return [state, dispatch, like, remove];
}