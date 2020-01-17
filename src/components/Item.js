import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ADD_ITEM, REMOVE_ITEM } from "../context/types";
import plusImg from "../assets/images/plus.png";
import minusImg from "../assets/images/minus.png";
import "./item.scss";

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
    <div className="item">
      <div className="container info">
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
      <div className="container buttons">
        <button onClick={() => handleRemove(_id)}>
          <img src={minusImg} />
        </button>
        <p>{getCount(_id) || 0}</p>
        <button onClick={() => handleAdd(item)}>
          <img src={plusImg} />
        </button>
      </div>
    </div>
  );
};

export default Item;
