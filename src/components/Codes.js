import React, { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { ADD_CODE, SET_MESSAGE, REMOVE_CODE } from "./../context/types";

const Codes = () => {
  const {
    state: { message, codes },
    dispatch
  } = useContext(DataContext);
  const [code, setCode] = useState("");

  const handleChange = e => {
    setCode(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await axios.post("/code", { name: code });
    console.log(data);
    if (!data) {
      dispatch({ type: SET_MESSAGE, payload: "Invalid code." });
    } else {
      dispatch({ type: ADD_CODE, payload: data });
    }
  };

  const handleRemove = id => {
    dispatch({ type: REMOVE_CODE, payload: id });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={code} onChange={handleChange} />
        <button type="submit">ADD</button>
        <p>{message}</p>
      </form>
      <div>
        {codes.length
          ? codes.map((code, i) => (
              <div key={i}>
                <p>{code.name}</p>
                <button onClick={() => handleRemove(code._id)}>X</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Codes;
