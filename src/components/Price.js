import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "./price.scss";
import { SET_PRICE } from "../context/types";

const Price = () => {
  const {
    dispatch,
    state: { price, basket, codes }
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: SET_PRICE });
  }, [basket, codes]);

  return (
    <div className="checkout">
      <p>Total: {price}€</p>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default Price;
