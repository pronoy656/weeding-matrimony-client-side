import useBioData from "../Hooks/useBioData";
import BioUser from "./BioUser";

const BioData = () => {
  const [bioData] = useBioData();
  return (
    <div>
      <h1>{bioData.length}</h1>
      <div className="flex">
        <div className="w-1/4 border-2 border-red-600">
          <h1>Left side</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Enter the age
              </option>
              <option value={"20 to 30"}>20 to 30</option>
              <option value={"30 to 40"}>30 to 40</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one Gender
              </option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chose Division</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one Division
              </option>
              <option value={"Dhaka"}>Dhaka</option>
              <option value={"Chattagram"}>Chattagram</option>
              <option value={"Barisal"}>Barisal</option>
              <option value={"Khulna"}>Khulna</option>
              <option value={"Rangpur"}>Rangpur</option>
              <option value={"Comilla"}>Comilla</option>
              <option value={"Sylhet"}>Sylhet</option>
              <option value={"Maymansign"}>Maymansign</option>
            </select>
          </div>
        </div>
        <div className="w-3/4 border-2 border-green-600 grid grid-cols-3">
          {bioData.map((bioUser) => (
            <BioUser key={bioUser._id} bioUser={bioUser}></BioUser>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioData;
