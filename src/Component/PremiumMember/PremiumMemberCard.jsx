import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const PremiumMemberCard = ({ member }) => {
  const {
    email,
    Biodata_Type,
    Profile_Image_Link,
    Permanent_Division,
    Age,
    Occupation,
  } = member;
  return (
    <div className="border rounded-2xl  w-[400px] p-5 mt-10">
      <div className="flex items-center justify-between">
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
          <h1 className="text-lg font-medium opacity-60">Permanent-Division</h1>
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
        <button className="btn btn-sm btn-outline w-full">
          <div className="text-lg">
            <IoEyeOutline />
          </div>
          View profile
        </button>
      </div>
    </div>
  );
};

export default PremiumMemberCard;
