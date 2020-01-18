import React from "react";
import BasketList from "./../components/BasketList";
import Codes from "../components/Codes";
import Promotions from "../components/Promotions";
import Checkout from "../components/Checkout";

const Basket = () => {
  return (
    <div>
      <BasketList />
      <Promotions />
      <Codes />
      <Checkout />
    </div>
  );
};

export default Basket;
