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
    <div className="border border-purple-600">
      <h1>email: {email}</h1>
      <h1>Gender: {Biodata_Type}</h1>
      <img className="w-28 h-24 rounded-full" src={Profile_Image_Link} alt="" />
      <h1>Permanent-Division: {Permanent_Division}</h1>
      <h1>Age: {Age}</h1>
      <h1>Occupation: {Occupation}</h1>
      <div className="flex justify-end">
        <button className="btn btn-sm bg-purple-600 ">View profile</button>
      </div>
    </div>
  );
};

export default PremiumMemberCard;
