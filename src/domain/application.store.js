import { createContext, useReducer } from "react";
import reducers, { initialState } from './reducers';

export const ApplicationContext = createContext(initialState);

export function ApplicationProvider({ children }) {
  const [state, dispatch] = useReducer(reducers, initialState);
  const value = { state, dispatch };

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
}