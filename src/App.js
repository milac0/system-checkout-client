import React from "react";

const App = () => {
  fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(data => console.log(data));
  return <div className="title">hello React!</div>;
};

export default App;
