import React, { createContext, useContext, useReducer } from 'react'
import { initialState } from './store'
import { reducer } from './reducers'

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
};

export const useStateValue = () => useContext(StateContext);
