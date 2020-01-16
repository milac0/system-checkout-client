import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button>+</button>
          <p>{"count"}</p>
          <button>-</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
