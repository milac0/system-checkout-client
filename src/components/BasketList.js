import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Item from "./Item";
import "./basketList.scss";

const BasketList = () => {
  const { state } = useContext(DataContext);
  return (
    <div className="basket_list">
      {state.basket.length ? (
        state.basket.map((bask, i) => <Item item={bask} key={i} />)
      ) : (
        <p className="basket_msg">Empty basket</p>
      )}
    </div>
  );
};

export default BasketList;
