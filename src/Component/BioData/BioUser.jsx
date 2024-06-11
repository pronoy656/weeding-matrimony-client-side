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
    <div className=" border p-3 rounded-2xl">
      <div className="flex items-center space-x-5">
        <img
          className="w-16 h-16 rounded-full"
          src={Profile_Image_Link}
          alt=""
        />
        <div>
          <h1 className="text-base font-semibold">Biodata Id: {id}</h1>
          <h1 className="flex items-center text-lg font-semibold">
            <MdDriveFileRenameOutline />
            Name:{Name}
          </h1>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <h1 className="flex items-center text-lg font-semibold">
          <BsPeopleFill />
          Gender: {Biodata_Type}
        </h1>
      </div>
      <div className="border-b-2 mt-5"></div>

      <div className="flex justify-between mt-2">
        <h1 className="flex items-center text-lg font-semibold">
          <FaBusinessTime />
          <span>Occupation: {Occupation}</span>
        </h1>
        <h1 className="flex items-center text-lg font-semibold">
          <TiMediaRecord />
          Age:{Age}
        </h1>
      </div>
      <div className="border-b-2 mt-5"></div>
      <h1 className="flex items-center text-lg font-semibold mt-2">
        <FaLocationDot />
        <span>Permanent Address: {Permanent_Division}</span>
      </h1>
      <div className="border-b-2 mt-3"></div>
      <div className="flex justify-end mt-4">
        <Link to={`/details/${_id}`}>
          <button className="btn btn-sm bg-pink-500 text-white">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BioUser;
