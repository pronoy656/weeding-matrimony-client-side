import { useLoaderData } from "react-router-dom";

const AnotherDetails = () => {
  const premiumDetails = useLoaderData();
  const {
    email,
    Name,
    Biodata_Type,
    Profile_Image_Link,
    Permanent_Division,
    Age,
    Occupation,
    role,
  } = premiumDetails;
  return (
    <div className="flex justify-center mt-10 mb-20">
      <div className="border w-[500px] p-3 shadow-lg shadow-pink-400">
        <img className="w-36 h-36" src={Profile_Image_Link} alt="" />
        <h1 className="text-xl font-bold mt-2">Email: {email}</h1>
        <h1 className="text-lg font-medium">Name: {Name}</h1>
        <h1 className="text-lg font-medium">Biodata Type: {Biodata_Type}</h1>

        <h1 className="text-lg font-medium">
          Permanent Division {Permanent_Division}
        </h1>
        <h1 className="text-lg font-medium">Age {Age}</h1>
        <h1 className="text-lg font-medium">Occupation: {Occupation}</h1>
        <h1 className="text-lg font-medium">Role: {role}</h1>
      </div>
    </div>
  );
};

export default AnotherDetails;
