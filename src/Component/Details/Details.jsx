import { Link, useLoaderData } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import usePremiumTan from "../Hooks/usePremiumTan";
import useAdmin from "../Hooks/useAdmin";
import useAnotherPremium from "../Hooks/useAnotherPremium";

const Details = () => {
  const bioDetails = useLoaderData();
  const { user } = useContext(authContext);
  const {
    _id,
    id,
    Name,
    Biodata_Type,
    Profile_Image_Link,
    Permanent_Division,
    Age,
    Occupation,
    Date_of_Birth,
    Height,
    Weight,
    Race,
    Fathers_Name,
    Mothers_Name,
    Present_Division,
    Expected_Partner_Age,
    Expected_Partner_Height,
    Expected_Partner_Weight,
    Contact_Email,
    Mobile_Number,
  } = bioDetails;
  const axiosSecure = useAxiosSecure();

  const [isPremium] = usePremiumTan();
  const [isAnotherPremium] = useAnotherPremium();
  const [isAdmin] = useAdmin();

  //   add Favorite button
  const handleAddFavorite = () => {
    if (user && user.email) {
      // console.log(user.email);
      const favoriteItem = {
        favId: _id,
        email: user.email,
        id,
        Name,
        Biodata_Type,
        Profile_Image_Link,
        Age,
        Occupation,
        Contact_Email,
        Race,
        Height,
        Permanent_Division,
        Present_Division,
        Fathers_Name,
      };
      axiosSecure.post("/favorite", favoriteItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully add Favorite item",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">This is details page</h1>
      <div className="flex space-x-6">
        <div className="w-1/2">
          <img src={Profile_Image_Link} alt="" />
        </div>
        <div className="w-1/2 border">
          <div className="flex justify-between">
            <h1>Bio Data Id: {id}</h1>
            <button
              onClick={handleAddFavorite}
              className="btn btn-xs btn-outline"
            >
              {/* <FaRegHeart /> */}
              favorite
            </button>
          </div>
          <h1>Name:{Name}</h1>
          <div className="flex justify-between">
            <h1>Gender:{Biodata_Type}</h1>
            <h1>Age:{Age}</h1>
          </div>
          <h1>Occupation:{Occupation}</h1>

          <h1>Date_of_Birth:{Date_of_Birth}</h1>
          <div className="flex justify-between">
            <h1>Height:{Height}</h1>
            <h1> Weight:{Weight}</h1>
          </div>
          <h1> Race:{Race}</h1>
          <div className="flex justify-between">
            <h1>Fathers_Name:{Fathers_Name}</h1>
            <h1>Mothers_Name:{Mothers_Name}</h1>
          </div>
          <div className="flex justify-between">
            <h1>Permanent Division:{Permanent_Division}</h1>
            <h1>Present_Division:{Present_Division}</h1>
          </div>
          <h1>Expected_Partner_Age:{Expected_Partner_Age}</h1>
          <div className="flex justify-between">
            <h1>Expected_Partner_Height:{Expected_Partner_Height}</h1>
            <h1>Expected_Partner_Weight:{Expected_Partner_Weight}</h1>
          </div>
          <h1>Contact_Email:{Contact_Email}</h1>
          {isPremium || isAnotherPremium || isAdmin ? (
            <>
              <h1 className="btn btn-md bg-green-500">
                Mobile_Number:{Mobile_Number}
              </h1>
            </>
          ) : (
            <>
              <h1 className="bg-red-500">
                Mobile_Number: Only see the premium number
              </h1>
            </>
          )}
        </div>
      </div>
      <Link to={`/checkOutPage/${_id}`}>
        <button className="btn btn-error mr-5">
          Request Contact information
        </button>
      </Link>
      <Link to={"/bioData"}>
        <button className="btn btn-success">Back</button>
      </Link>
    </div>
  );
};

export default Details;
