import React, { useEffect, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { SET_QUANTITY } from "../context/types";
import "./promotions.scss";

const Promotions = () => {
  const {
    dispatch,
    state: { basket, quantity }
  } = useContext(DataContext);

  useEffect(() => {
    (async () => {
      if (basket.length) {
        const { data: quantity } = await axios.post("/quantity", {
          quantity: basket
        });
        dispatch({ type: SET_QUANTITY, payload: quantity });
      } else {
        dispatch({ type: SET_QUANTITY, payload: [] });
      }
    })();
  }, [basket]);

  return (
    <div className="promotions">
      <h1>Promotions</h1>
      <hr />
      {quantity.length ? (
        quantity.map((quant, i) => (
          <div key={i} className="promotions_item">
            <h2>{quant.quantity}x </h2>
            <h2>{quant.name}</h2>
            <h2>{quant.price}€</h2>
          </div>
        ))
      ) : (
        <p>No promotions.</p>
      )}
    </div>
  );
};

export default Promotions;
