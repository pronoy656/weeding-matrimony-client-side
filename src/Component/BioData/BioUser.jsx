import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const BioUser = ({ bioUser }) => {
  const {
    _id,
    id,
    Name,
    Biodata_Type,
    Profile_Image_Link,
    Permanent_Division,
    Age,
    Occupation,
  } = bioUser;
  return (
    <div className=" border-2 border-red-600 mt-5">
      <h1>This is card page</h1>
      <div className="flex justify-between">
        <h1>User Id: {id}</h1>
        <div>
          <button className="btn btn-xs btn-outline">
            <FaRegHeart />
          </button>
        </div>
      </div>
      <h1>Name:{Name}</h1>
      <h1>Gender: {Biodata_Type}</h1>
      <img className="w-full" src={Profile_Image_Link} alt="" />
      <h1>Permanent Address: {Permanent_Division}</h1>
      <h1>Age:{Age}</h1>
      <h1>Occupation: {Occupation}</h1>
      <Link to={`/details/${_id}`}>
        <button className="btn btn-outline">View Profile</button>
      </Link>
    </div>
  );
};

export default BioUser;
