import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { authContext } from "../AuthProvider/AuthProvider";
import useBioData from "../Hooks/useBioData";
import Swal from "sweetalert2";

const CheckOutForm = ({ id, Mobile_Number }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(authContext);
  const [bioData] = useBioData();
  const axiosSecure = useAxiosSecure();
  const info = {
    id: id,
  };

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", info).then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("payment error", error);
      setError(error.message);
    } else {
      // console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      // console.log("confirm error");
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save the payment in the database
        const paymentInfo = {
          email: user.email,
          name: user.displayName,
          id: id,
          mobileNumber: Mobile_Number,
        };

        const res = await axiosSecure.post("/payments", paymentInfo);
        // console.log("payment saved", res);
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex justify-center">
        <button
          className="btn btn-md mt-4 bg-green-500"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
      <p className="text-red-500 text-lg font-semibold">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your transactionID: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckOutForm;
