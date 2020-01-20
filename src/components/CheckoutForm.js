import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from "react-stripe-elements";
import "./checkoutForm.scss";
import { RESET_STATE } from "./../context/types";
import { DataContext } from "./../context/DataContext";

const styling = {
  base: { fontSize: "24px" }
};

const CheckoutDetails = props => {
  const {
    dispatch,
    state: { basket, price }
  } = useContext(DataContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setDisabled(true);
    let { token } = await props.stripe.createToken({ name: email });
    let response = await fetch("http://localhost:3000/charge", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: token.id, email, basket, price })
    });

    if (response.ok) {
      setMsg("Purchase Complete!");
      dispatch({ type: RESET_STATE });
      setTimeout(() => history.push("/"), 3000);
    } else {
      setMsg(response.statusText);
      setDisabled(false);
    }
  };

  return (
    <div className="checkout_form">
      <p>Would you like to complete the purchase?</p>
      <form onSubmit={handleSubmit}>
        <div className="checkout_form--personal">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="checkout_form--card">
          <h2>Credit Card</h2>
          <CardNumberElement style={styling} />
          <CardExpiryElement style={styling} />
          <CardCVCElement style={styling} />
        </div>
        <h2>Total: {price}€</h2>
        <button type="submit" disabled={disabled}>
          Pay
        </button>
        <h2>{msg}</h2>
      </form>
    </div>
  );
};

export default injectStripe(CheckoutDetails);
