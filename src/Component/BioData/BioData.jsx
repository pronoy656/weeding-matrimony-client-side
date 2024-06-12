import useBioData from "../Hooks/useBioData";
import BioUser from "./BioUser";

const BioData = () => {
  const [bioData] = useBioData();
  return (
    <div>
      <div className="flex justify-center mt-12 mb-10">
        <div>
          <h1 className="text-3xl font-bold ">
            Find Your <span className="text-pink-500">Soulmate</span>
          </h1>
          <h1 className="text-xl font-semibold mt-4 text-center">
            Total Biodata: {bioData.length}
          </h1>
        </div>
      </div>
      <div className="md:flex space-x-8">
        <div className="md:w-1/4 border p-4">
          <h1 className="text-center text-2xl font-bold">
            Search your <span className="text-pink-500">life partner</span>
          </h1>
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

        <div className="w-3/4  grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
          {bioData.map((bioUser) => (
            <BioUser key={bioUser._id} bioUser={bioUser}></BioUser>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioData;
