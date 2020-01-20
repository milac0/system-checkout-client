import React from "react";
import BasketList from "./../components/BasketList";
import Codes from "../components/Codes";
import Promotions from "../components/Promotions";
import Price from "./../components/Price";

const Basket = () => {
  return (
    <div>
      <BasketList />
      <Promotions />
      <Codes />
      <Price />
    </div>
  );
};

export default Basket;
