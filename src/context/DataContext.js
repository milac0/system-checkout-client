import React, { createContext, useReducer } from "react";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_CODE,
  REMOVE_CODE,
  SET_MESSAGE,
  SET_QUANTITY
} from "./types";
import {
  addItem,
  removeItem,
  setMessage,
  addCode,
  removeCode,
  setQuantity
} from "./reducers";

const initState = {
  basket: [],
  codes: [],
  message: "",
  quantity: [],
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action.payload);
    case REMOVE_ITEM:
      return removeItem(state, action.payload);
    case ADD_CODE:
      return addCode(state, action.payload);
    case REMOVE_CODE:
      return removeCode(state, action.payload);
    case SET_MESSAGE:
      return setMessage(state, action.payload);
    case SET_QUANTITY:
      return setQuantity(state, action.payload);
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
