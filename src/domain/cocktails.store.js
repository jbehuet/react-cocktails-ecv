import { createContext } from "react";
import { useCocktailsStorage } from "../hooks/useCocktailsStorage";
import { initialState } from '../domain/cocktails.reducer';

export const CocktailsContext = createContext(initialState);

export function CocktailsProvider({ children }) {
  const [state, dispatch, likeCocktail, removeCocktail] = useCocktailsStorage([])
  const value = { state, dispatch, likeCocktail, removeCocktail };

  return <CocktailsContext.Provider value={value}>{children}</CocktailsContext.Provider>;
}