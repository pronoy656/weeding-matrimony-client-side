import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const CheckOut = () => {
  const information = useLoaderData();
  const { user } = useContext(authContext);
  const { id, Contact_Email, Mobile_Number } = information;
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">This is check out page</h1>
      <div className="flex space-x-9">
        <div className="border w-1/2">
          <img src="https://i.ibb.co/f1HJVhK/2879845.jpg" alt="" />
        </div>
        <div className="border w-1/2 ">
          <form className="drop-shadow-lg">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">BioData ID</span>
              </label>
              <input
                type="number"
                name="bioDataId"
                defaultValue={id}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Self Name</span>
              </label>
              <input
                type="text"
                name="selfEmail"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Self Email</span>
              </label>
              <input
                type="email"
                name="selfEmail"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            {/* <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Card Number</span>
              </label>
              <input
                type="number"
                name="cardNumber"
                placeholder="Enter your card number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex justify-center">
              <button className="btn btn-success mt-4">Submit Button</button>
            </div> */}
          </form>
          <div className="mt-9">
            <Elements stripe={stripePromise}>
              <CheckOutForm
                id={id}
                Mobile_Number={Mobile_Number}
              ></CheckOutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
