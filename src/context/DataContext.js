import React, { createContext, useReducer } from "react";
import { ADD_ITEM, REMOVE_ITEM, ADD_CODE, REMOVE_CODE } from "./types";

const initState = {
  basket: [],
  code: [],
  quantity: [],
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      const index = state.basket.findIndex(
        item => item._id === action.payload._id
      );
      if (index !== -1) {
        state.basket[index].count += 1;
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, count: 1 }]
        };
      }
      return state;
    case REMOVE_ITEM:
      console.log("remove");
    default:
      return state;
  }
}

export const DataContext = createContext(initState);

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
