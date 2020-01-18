import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "./checkout.scss";

const Checkout = () => {
  const [price, setPrice] = useState(0);
  const {
    state: { quantity, basket, codes }
  } = useContext(DataContext);
  useEffect(() => {
    let priceArr = basket.map(basketItem => {
      const index = quantity.findIndex(
        quantityItem => quantityItem.name === basketItem.name
      );
      if (index >= 0) {
        const quantityItem = quantity[index];
        const quotient = basketItem.count / quantityItem.quantity;

        const remainder = basketItem.count % quantityItem.quantity;
        return (
          remainder * basketItem.price +
          Math.floor(quotient) * quantityItem.price
        );
      } else {
        return basketItem.price * basketItem.count;
      }
    });
    let sum = priceArr.reduce((a, b) => a + b, 0);
    if (codes.length > 0 && basket.length > 0) {
      codes.map(code => {
        const includesPercentage = code.name.includes("%");
        if (includesPercentage) {
          sum = ((100 - code.savings) / 100) * sum;
        } else {
          sum = sum - code.savings;
        }
      });
    }
    setPrice(sum.toFixed(2));
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

export default Checkout;
