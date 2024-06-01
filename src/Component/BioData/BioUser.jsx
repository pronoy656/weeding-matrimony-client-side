const BioUser = ({ bioUser }) => {
  const {
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
      <h1>User Id: {id}</h1>
      <h1>Name:{Name}</h1>
      <h1>Gender: {Biodata_Type}</h1>
      <h1>{Profile_Image_Link}</h1>
      <h1>Permanent Address: {Permanent_Division}</h1>
      <h1>Age:{Age}</h1>
      <h1>Occupation: {Occupation}</h1>
      <button className="btn btn-outline">View Profile</button>
    </div>
  );
};

export default BioUser;
