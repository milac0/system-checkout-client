import React, { useEffect, useState } from "react";
import axios from "axios";

import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/items");
      setItems(data);
    })();
  }, []);

  return (
    <div>
      {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </div>
  );
};

export default ItemList;
