import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { TiMediaRecord } from "react-icons/ti";
import { MdDriveFileRenameOutline } from "react-icons/md";

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
      <div className="flex justify-between">
        <h1>User Id: {id}</h1>
        <div>
          <button className="btn btn-xs btn-outline">
            <FaRegHeart />
          </button>
        </div>
      </div>
      <h1 className="flex items-center">
        <MdDriveFileRenameOutline />
        Name:{Name}
      </h1>
      <h1 className="flex items-center">
        <BsPeopleFill />
        Gender: {Biodata_Type}
      </h1>
      <img className="w-36 h-36 rounded-full" src={Profile_Image_Link} alt="" />
      <h1 className="flex items-center">
        <FaLocationDot />
        <span>Permanent Address: {Permanent_Division}</span>
      </h1>
      <h1 className="flex items-center">
        <TiMediaRecord />
        Age:{Age}
      </h1>
      <h1 className="flex items-center">
        <FaBusinessTime />
        <span>Occupation: {Occupation}</span>
      </h1>
      <Link to={`/details/${_id}`}>
        <button className="btn btn-outline">View Profile</button>
      </Link>
    </div>
  );
};

export default BioUser;
