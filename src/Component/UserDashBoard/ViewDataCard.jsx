const ViewDataCard = ({ viewBio }) => {
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
  return (
    <div>
      <h1>This is view bio data card</h1>
      <h1>Name: {Name}</h1>
      <h1>Gender: {Biodata_Type}</h1>
      <img className="w-32 h-32" src={Profile_Image_Link} alt="" />
      <h1>Date-of-Birth: {Date_of_Birth}</h1>
      <h1>Height: {Height}</h1>
      <h1>Weight: {Weight}</h1>
      <h1>Age: {Age}</h1>
      <h1>Occupation: {Occupation}</h1>
      <h1>Race: {Race}</h1>
      <h1>Father's Name: {Fathers_Name}</h1>
      <h1>Mother's Name: {Mothers_Name}</h1>
      <h1>Permanent Division: {Permanent_Division}</h1>
      <h1>Present-Division: {Present_Division}</h1>
      <h1>Expected-Partner-Age: {Expected_Partner_Age}</h1>
      <h1>Expected-Partner-Height: {Expected_Partner_Height}</h1>
      <h1>Expected-Partner-Weight: {Expected_Partner_Weight}</h1>
      <h1>Email: {Contact_Email}</h1>
      <h1>Mobile-Number: {Mobile_Number}</h1>
      <button className="btn btn-error">Make premium </button>
    </div>
  );
};

export default ViewDataCard;
