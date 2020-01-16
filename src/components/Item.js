import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ADD_ITEM, REMOVE_ITEM } from "../context/types";

const Item = ({ item }) => {
  const { state, dispatch } = useContext(DataContext);

  const handleAdd = item => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
  };

  const handleRemove = id => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id
    });
  };

  const getCount = id => {
    const index = state.basket.findIndex(bask => bask._id === id);
    if (index >= 0) {
      return state.basket[index].count;
    } else return 0;
  };

  const { name, price, _id } = item;
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={() => handleAdd(item)}>+</button>
      <p>{getCount(_id) || 0}</p>
      <button onClick={() => handleRemove(_id)}>i</button>
    </div>
  );
};

export default Item;
