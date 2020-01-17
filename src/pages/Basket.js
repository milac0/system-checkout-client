import React from "react";
import BasketList from "./../components/BasketList";
import Codes from "../components/Codes";
import Promotions from "../components/Promotions";

const Basket = () => {
  return (
    <div>
      <BasketList />
      <Promotions />
      <Codes />
    </div>
  );
};

export default Basket;
