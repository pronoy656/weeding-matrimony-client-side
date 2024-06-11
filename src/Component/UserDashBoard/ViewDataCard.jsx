import { useContext } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ViewDataCard = ({ viewBio }) => {
  const { user } = useContext(authContext);
  const {
    Name,
    Biodata_Type,
    Profile_Image_Link,
    Date_of_Birth,
    Height,
    Weight,
    Age,
    Occupation,
    Race,
    Fathers_Name,
    Mothers_Name,
    Permanent_Division,
    Present_Division,
    Expected_Partner_Age,
    Expected_Partner_Height,
    Expected_Partner_Weight,
    Contact_Email,
    Mobile_Number,
  } = viewBio;
  const axiosPublic = useAxiosPublic();

  // request premium member and send database
  const handleReqPremium = () => {
    if (user && user?.email) {
      // console.log(user.email);
      const premiumData = {
        email: user.email,
        Name,
        Biodata_Type,
        Profile_Image_Link,
        Permanent_Division,
        Age,
        Occupation,
      };
      axiosPublic.post("/premium", premiumData).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Premium request Sent",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div className="border shadow-xl shadow-pink-400 mr-9 mt-10">
      <h1 className="text-center text-3xl font-bold">Biodata</h1>
      <h1 className="text-center text-xl font-extrabold text-pink-300 mt-3">
        Personal Information
      </h1>
      <div className="flex space-x-24">
        <div>
          <img
            className="w-[250px] h-[230px] ml-4 rounded-lg"
            src={Profile_Image_Link}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl mt-3 font-extrabold">Name: {Name}</h1>
          <h1 className="text-lg mt-2 font-bold">Gender: {Biodata_Type}</h1>
          <h1 className="text-lg mt-2 font-bold">Height: {Height}</h1>
          <h1 className="text-lg mt-2 font-bold">Weight: {Weight}</h1>
          <h1 className="text-lg mt-2 font-bold">
            Date-of-Birth: {Date_of_Birth}
          </h1>

          <h1 className="text-lg mt-2 font-bold">Age: {Age}</h1>
          <h1 className="text-lg mt-2 font-bold">Occupation: {Occupation}</h1>
          <h1 className="text-lg mt-2 font-bold">Race: {Race}</h1>
          <h1 className="text-center text-xl font-extrabold text-pink-300 mt-3">
            Family Information
          </h1>
          <h1 className="text-lg mt-2 font-bold">
            Father's Name: {Fathers_Name}
          </h1>
          <h1 className="text-lg mt-2 font-bold">
            Mother's Name: {Mothers_Name}
          </h1>
          <h1 className="text-lg mt-2 font-bold">
            Permanent Division: {Permanent_Division}
          </h1>
          <h1 className="text-lg mt-2 font-bold">
            Present-Division: {Present_Division}
          </h1>
          <h1 className="text-lg mt-2 font-bold">
            Expected-Partner-Age: {Expected_Partner_Age}
          </h1>
          <h1 className="text-lg mt-2 font-bold">
            Expected-Partner-Height: {Expected_Partner_Height}
          </h1>
          <h1 className="text-lg mt-2 font-bold">
            Expected-Partner-Weight: {Expected_Partner_Weight}
          </h1>
          <h1 className="text-lg mt-2 font-bold">Email: {Contact_Email}</h1>
          <h1 className="text-lg mt-2 font-bold">
            Mobile-Number: {Mobile_Number}
          </h1>
        </div>
      </div>

      <button onClick={handleReqPremium} className="btn btn-error">
        Make premium{" "}
      </button>
    </div>
  );
};

export default ViewDataCard;
