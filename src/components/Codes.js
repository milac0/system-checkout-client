import React, { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { ADD_CODE, SET_MESSAGE, REMOVE_CODE } from "./../context/types";
import "./codes.scss";

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
    if (!data) {
      dispatch({ type: SET_MESSAGE, payload: "Invalid code." });
    } else {
      dispatch({ type: ADD_CODE, payload: data });
    }
    setCode("");
  };

  const handleRemove = id => {
    dispatch({ type: REMOVE_CODE, payload: id });
  };

  return (
    <div className="codes">
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" value={code} onChange={handleChange} />
        <button type="submit">CODE</button>
        <p>{message}</p>
      </form>
      <div>
        {codes.length
          ? codes.map((code, i) => (
              <div key={i} className="codes_active">
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
