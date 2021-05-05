
import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {Button} from '@material-ui/core'

const CardField = ({ onChange }) => (
    <CardElement onChange={onChange} />
);

const SubmitButton = ({ processing, error, children, disabled, handleClick, cardComplete }) => (
  <Button
    type="submit"
    disabled={!cardComplete || disabled || processing}
    variant="contained"
    color="primary"
    onClick={() =>  handleClick() }
  >
    {processing ? "Processing..." : children}
  </Button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    
    {children}
  </div>
);

const CardDetails = ({backStep, nextStep, deleteAllCart}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleClick = () => {
    deleteAllCart()
    nextStep()
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

    setProcessing(false);

    if (payload.error) {
        setError(payload.error);
    } else {
        setPaymentMethod(payload.paymentMethod);
    }
    
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />

        <br/>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <br/>

        <div style ={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="outlined" onClick={() => backStep()} >Back</Button>
            <SubmitButton processing={processing} error={error} disabled={!stripe} handleClick={handleClick} cardComplete={cardComplete}   >
                Pay 
            </SubmitButton>
        </div>
    </form>
  );
};


export default CardDetails;
