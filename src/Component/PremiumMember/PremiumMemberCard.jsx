import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PremiumMemberCard = ({ member }) => {
  const {
    _id,
    email,
    Biodata_Type,
    Profile_Image_Link,
    Permanent_Division,
    Age,
    Occupation,
  } = member;
  return (
    <div className="flex justify-center">
      <div className=" border rounded-2xl  w-[400px] md:w-[400px] p-5 mt-10">
        <div className="flex items-center md:justify-between">
          <div className="avatar p-4">
            <div className="w-14 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
              <img src={Profile_Image_Link} />
            </div>
          </div>
          <div>
            <h1>
              <span className="text-xl font-bold">{email}</span>
            </h1>
            <h1>
              <span className="text-lg font-medium opacity-60">Gender:</span>{" "}
              <span className="text-lg font-medium">{Biodata_Type}</span>
            </h1>
            <div className="ml-64 -mt-10 text-3xl text-yellow-500">
              <FaStar />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-medium opacity-60">
              Permanent-Division
            </h1>
            <h1 className="text-lg font-medium">{Permanent_Division}</h1>
          </div>
          <div>
            <h1 className="text-lg font-medium opacity-60">Occupation</h1>
            <h1 className="text-lg font-medium">{Occupation}</h1>
          </div>
        </div>
        <h1>
          <span className="text-lg font-medium opacity-60">Age:</span>{" "}
          <span className="text-lg font-medium">{Age}</span>
        </h1>
        <div className="flex justify-center mt-4">
          <Link to={`/anotherDetails/${_id}`}>
            <button className="btn btn-sm btn-outline w-full bg-pink-400 text-white">
              <div className="text-lg">
                <IoEyeOutline />
              </div>
              View profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumMemberCard;
