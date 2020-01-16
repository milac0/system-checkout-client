import React, { createContext, useReducer } from "react";
import { ADD_ITEM, REMOVE_ITEM, ADD_CODE, REMOVE_CODE } from "./types";
import { addItem, removeItem } from "./reducers";

const initState = {
  basket: [],
  code: [],
  quantity: [],
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action.payload);
    case REMOVE_ITEM:
      return removeItem(state, action.payload);
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
