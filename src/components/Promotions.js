import React, { useEffect, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { SET_QUANTITY } from "../context/types";

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
      }
    })();
  }, [basket]);

  return (
    <div>
      <h1>Promotions</h1>
      {quantity.length
        ? quantity.map((quant, i) => (
            <div key={i}>
              <h2>{quant.quantity}</h2>
              <h2>{quant.name}</h2>
              <h2>{quant.price}€</h2>
            </div>
          ))
        : null}
    </div>
  );
};

export default Promotions;
