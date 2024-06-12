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
    <div className="mb-12">
      <h1 className="text-3xl font-bold text-center mt-11 mb-11">
        Biodata details page
      </h1>

      <div className="flex space-x-6">
        <div className="w-1/2">
          <img className="rounded-2xl" src={Profile_Image_Link} alt="" />
          <div className="flex justify-center mt-6">
            <div>
              <Link to={"/bioData"}>
                <button className="btn btn-success mr-6">Back</button>
              </Link>
            </div>
            <div>
              {isPremium || isAnotherPremium ? (
                <>
                  <Link to={`/checkOutPage/${_id}`}>
                    <button className="btn hidden btn-error mr-5">
                      Request Contact information
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={`/checkOutPage/${_id}`}>
                    <button className="btn bg-pink-500 text-white mr-5">
                      Request Contact information
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/2 border p-2">
          <h1 className="text-3xl font-semibold text-center">Name: {Name}</h1>
          <h1 className="text-2xl font-semibold text-center">
            Occupation:{Occupation}
          </h1>
          <h1 className="text-lg font-semibold text-center">
            Present_Division:{Present_Division}
          </h1>
          <div className="flex justify-center mt-5">
            <h1 className="w-48 border text-lg bg-green-400 text-white font-medium p-1 rounded-xl">
              Personal information
            </h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold mt-2">Bio Data Id: {id}</h1>
            <button
              onClick={handleAddFavorite}
              className="btn btn-xs btn-outline"
            >
              {/* <FaRegHeart /> */}
              favorite
            </button>
          </div>

          <h1 className="text-xl font-semibold mt-2">
            Gender:{" "}
            <span className="text-xl font-semibold ">{Biodata_Type}</span>
          </h1>
          <h1 className="text-xl font-semibold mt-2">
            Age: <span className="text-xl font-semibold ">{Age}</span>
          </h1>

          <h1 className="text-xl font-semibold mt-2">
            Height: <span className="text-xl font-semibold ">{Height}</span>
          </h1>
          <h1 className="text-xl font-semibold mt-2">
            {" "}
            Weight: <span className="text-xl font-semibold ">{Weight}</span>
          </h1>

          <h1 className="text-xl font-semibold mt-2">
            Date_of_Birth:{" "}
            <span className="text-xl font-semibold ">{Date_of_Birth}</span>
          </h1>
          <h1 className="text-xl font-semibold mt-2">
            {" "}
            Race: <span className="text-xl font-semibold ">{Race}</span>
          </h1>

          <h1 className="text-xl font-semibold mt-2">
            Contact_Email: {Contact_Email}
          </h1>
          {isPremium || isAnotherPremium || isAdmin ? (
            <>
              <h1 className="btn btn-md bg-green-500 mt-2">
                Mobile_Number:{Mobile_Number}
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-xl font-semibold mt-2">
                Mobile_Number:{" "}
                <span className="text-red-600 text-lg font-semibold">
                  Only see the premium member
                </span>
              </h1>
            </>
          )}
          <div className="flex justify-center mt-5">
            <h1 className="w-48 border text-lg bg-green-400 text-white font-medium p-1 text-center rounded-xl">
              Family information
            </h1>
          </div>

          <h1 className="text-xl font-semibold mt-2">
            Fathers_Name: {Fathers_Name}
          </h1>
          <h1 className="text-xl font-semibold mt-2">
            Mothers_Name: {Mothers_Name}
          </h1>

          <div className="flex justify-between">
            <h1 className="text-xl font-semibold mt-2">
              Permanent Division: {Permanent_Division}
            </h1>
          </div>
          <div className="flex justify-center mt-5">
            <h1 className="w-48 border text-lg bg-green-400 text-white font-medium p-1 text-center rounded-xl">
              Partner Demand
            </h1>
          </div>
          <h1 className="text-xl font-semibold mt-2">
            Expected_Partner_Age: {Expected_Partner_Age}
          </h1>

          <h1 className="text-xl font-semibold mt-2">
            Expected_Partner_Height: {Expected_Partner_Height}
          </h1>
          <h1 className="text-xl font-semibold mt-2">
            Expected_Partner_Weight: {Expected_Partner_Weight}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
