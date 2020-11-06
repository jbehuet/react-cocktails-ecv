import { createContext } from "react";
import { useCocktailsStorage } from "../hooks/useCocktailsStorage";
import { initialState } from './cocktails.reducer';

export const CocktailsContext = createContext(initialState);

export function CocktailsProvider({ children }) {
  const [state, dispatch, likeCocktail] = useCocktailsStorage([])
  const value = { state, dispatch, likeCocktail };

  return <CocktailsContext.Provider value={value}>{children}</CocktailsContext.Provider>;
}