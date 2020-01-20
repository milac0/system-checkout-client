import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutDetails = () => {
  return (
    <StripeProvider apiKey={process.env.STRIPE_KEY}>
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

export default CheckoutDetails;
