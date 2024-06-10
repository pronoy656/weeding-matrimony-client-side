import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";

const EditBioData = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const handleAddBioData = (e) => {
    e.preventDefault();
    const Biodata_Type = e.target.bioData.value;
    const Name = e.target.name.value;
    const Profile_Image_Link = e.target.image.value;
    const Date_of_Birth = e.target.date.value;
    const Height = e.target.height.value;
    const Weight = e.target.weight.value;
    const Age = e.target.age.value;
    const Occupation = e.target.occupation.value;
    const Race = e.target.Race.value;
    const Fathers_Name = e.target.father.value;
    const Mothers_Name = e.target.mother.value;
    const Permanent_Division = e.target.permanent.value;
    const Present_Division = e.target.present.value;
    const Expected_Partner_Age = e.target.partnerAge.value;
    const Expected_Partner_Height = e.target.partnerHeight.value;
    const Expected_Partner_Weight = e.target.partnerWeight.value;
    const Contact_Email = e.target.email.value;
    const Mobile_Number = e.target.contact.value;
    const allField = {
      Biodata_Type,
      Name,
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
    };
    // console.log(allField);
    axiosSecure.post("/bioData", allField).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully add your biodata",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="flex items-center text-center text-3xl font-semibold mb-5">
          <span className="text-pink-500 mr-3">
            {" "}
            <FaEdit />
          </span>
          Create Your <span className="text-pink-500">Biodata</span>
        </h1>
      </div>
      <form onSubmit={handleAddBioData}>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Biodata Type</span>
            </label>
            <select className="select select-bordered" name="bioData">
              <option disabled selected>
                Pick one Biodata type
              </option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Profile image Link</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Your image ink"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Date of birth</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Enter Your name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Height</span>
            </label>
            <select className="select select-bordered" name="height">
              <option disabled selected>
                Pick your height
              </option>
              <option value={"54 inch"}>54 inch</option>
              <option value={"56 inch"}>56 inch</option>
              <option value={"58 inch"}>58 inch</option>
              <option value={"60 inch"}>60 inch</option>
              <option value={"62 inch"}>62 inch</option>
              <option value={"64 inch"}>64 inch</option>
              <option value={"66 inch"}>66 inch</option>
              <option value={"68 inch"}>68 inch</option>
              <option value={"70 inch"}>70 inch</option>
              <option value={"72 inch"}>72 inch</option>
              <option value={"74 inch"}>74 inch</option>
              <option value={"76 inch"}>76 inch</option>
              <option value={"78 inch"}>78 inch</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">weight</span>
            </label>
            <select className="select select-bordered" name="weight">
              <option disabled selected>
                Pick your weight
              </option>
              <option value={"40 Kg"}>40 Kg</option>
              <option value={"41 Kg"}>41 Kg</option>
              <option value={"42 Kg"}>42 Kg</option>
              <option value={"43 Kg"}>43 Kg</option>
              <option value={"44 Kg"}>44 Kg</option>
              <option value={"45 Kg"}>45 Kg</option>
              <option value={"46 Kg"}>46 Kg</option>
              <option value={"47 Kg"}>47 Kg</option>
              <option value={"48 Kg"}>48 Kg</option>
              <option value={"49 Kg"}>49 Kg</option>
              <option value={"50 Kg"}>50 Kg</option>
              <option value={"51 Kg"}>51 Kg</option>
              <option value={"52 Kg"}>52 Kg</option>
              <option value={"53 Kg"}>53 Kg</option>
              <option value={"54 Kg"}>54 Kg</option>
              <option value={"55 Kg"}>55 Kg</option>
              <option value={"56 Kg"}>56 Kg</option>
              <option value={"57 Kg"}>57 Kg</option>
              <option value={"58 Kg"}>58 Kg</option>
              <option value={"59 Kg"}>59 Kg</option>
              <option value={"60 Kg"}>60 Kg</option>
              <option value={"61 Kg"}>61 Kg</option>
              <option value={"62 Kg"}>62 Kg</option>
              <option value={"63 Kg"}>63 Kg</option>
              <option value={"64 Kg"}>64 Kg</option>
              <option value={"65 Kg"}>65 Kg</option>
              <option value={"66 Kg"}>66 Kg</option>
              <option value={"67 Kg"}>67 Kg</option>
              <option value={"68 Kg"}>68 Kg</option>
              <option value={"69 Kg"}>69 Kg</option>
              <option value={"70 Kg"}>70 Kg</option>
              <option value={"71 Kg"}>71 Kg</option>
              <option value={"72 Kg"}>72 Kg</option>
              <option value={"73 Kg"}>73 Kg</option>
              <option value={"74 Kg"}>74 Kg</option>
              <option value={"75 Kg"}>75 Kg</option>
              <option value={"76 Kg"}>76 Kg</option>
              <option value={"77 Kg"}>77 Kg</option>
              <option value={"78 Kg"}>78 Kg</option>
              <option value={"79 Kg"}>79 Kg</option>
              <option value={"80 Kg"}>80 Kg</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="number"
              name="age"
              placeholder="Enter Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Occupation</span>
            </label>
            <select className="select select-bordered" name="occupation">
              <option disabled selected>
                Pick your Occupation
              </option>
              <option value={"Teacher"}>Teacher</option>
              <option value={"Doctor"}>Doctor</option>
              <option value={"Engineer"}>Engineer</option>
              <option value={"Businessman"}>Businessman</option>
              <option value={"Lawyer"}>Lawyer</option>
              <option value={"Housewife"}>Housewife</option>
              <option value={"Developer"}>Developer</option>
              <option value={"Scientist"}>Scientist</option>
              <option value={"Banker"}>Banker</option>
              <option value={"Nurse"}>Nurse</option>
              <option value={"Pharmacist"}>Pharmacist</option>
              <option value={"Designer"}>Designer</option>
              <option value={"Architect"}>Architect</option>
              <option value={"Journalist"}>Journalist</option>
              <option value={"Project Manager"}>Project Manager</option>
              <option value={"Account Officer"}>Account Officer</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Race</span>
            </label>
            <select className="select select-bordered" name="Race">
              <option disabled selected>
                Pick your Race
              </option>
              <option value={"Asian"}>Asian</option>
              <option value={"Europe"}>Europe</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Fathers Name</span>
            </label>
            <input
              type="text"
              name="father"
              placeholder="Enter Your father's name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Mothers Name</span>
            </label>
            <input
              type="text"
              name="mother"
              placeholder="Enter Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Permanent Address</span>
            </label>
            <select className="select select-bordered" name="permanent">
              <option disabled selected>
                Pick your permanent address
              </option>
              <option value={"Dhaka"}>Dhaka</option>
              <option value={"Chattagram"}>Chattagram</option>
              <option value={"Rangpur"}>Rangpur</option>
              <option value={"Barisal"}>Barisal</option>
              <option value={"Khulna,"}>Khulna,</option>
              <option value={"Maymansign"}>Maymansign</option>
              <option value={"Sylhet"}>Sylhet</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Present Address</span>
            </label>
            <select className="select select-bordered" name="present">
              <option disabled selected>
                Pick your present address
              </option>
              <option value={"Dhaka"}>Dhaka</option>
              <option value={"Chattagram"}>Chattagram</option>
              <option value={"Rangpur"}>Rangpur</option>
              <option value={"Barisal"}>Barisal</option>
              <option value={"Khulna,"}>Khulna,</option>
              <option value={"Maymansign"}>Maymansign</option>
              <option value={"Sylhet"}>Sylhet</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Partner age</span>
            </label>
            <input
              type="text"
              name="partnerAge"
              placeholder="Enter Your expected partner age"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Partner Height</span>
            </label>
            <select className="select select-bordered" name="partnerHeight">
              <option disabled selected>
                Pick your expected Partner height
              </option>
              <option value={"54 inch"}>54 inch</option>
              <option value={"56 inch"}>56 inch</option>
              <option value={"58 inch"}>58 inch</option>
              <option value={"60 inch"}>60 inch</option>
              <option value={"62 inch"}>62 inch</option>
              <option value={"64 inch"}>64 inch</option>
              <option value={"66 inch"}>66 inch</option>
              <option value={"68 inch"}>68 inch</option>
              <option value={"70 inch"}>70 inch</option>
              <option value={"72 inch"}>72 inch</option>
              <option value={"74 inch"}>74 inch</option>
              <option value={"76 inch"}>76 inch</option>
              <option value={"78 inch"}>78 inch</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Partner weight</span>
            </label>
            <select className="select select-bordered" name="partnerWeight">
              <option disabled selected>
                Pick your expected partner weight
              </option>
              <option value={"40 Kg"}>40 Kg</option>
              <option value={"41 Kg"}>41 Kg</option>
              <option value={"42 Kg"}>42 Kg</option>
              <option value={"43 Kg"}>43 Kg</option>
              <option value={"44 Kg"}>44 Kg</option>
              <option value={"45 Kg"}>45 Kg</option>
              <option value={"46 Kg"}>46 Kg</option>
              <option value={"47 Kg"}>47 Kg</option>
              <option value={"48 Kg"}>48 Kg</option>
              <option value={"49 Kg"}>49 Kg</option>
              <option value={"50 Kg"}>50 Kg</option>
              <option value={"51 Kg"}>51 Kg</option>
              <option value={"52 Kg"}>52 Kg</option>
              <option value={"53 Kg"}>53 Kg</option>
              <option value={"54 Kg"}>54 Kg</option>
              <option value={"55 Kg"}>55 Kg</option>
              <option value={"56 Kg"}>56 Kg</option>
              <option value={"57 Kg"}>57 Kg</option>
              <option value={"58 Kg"}>58 Kg</option>
              <option value={"59 Kg"}>59 Kg</option>
              <option value={"60 Kg"}>60 Kg</option>
              <option value={"61 Kg"}>61 Kg</option>
              <option value={"62 Kg"}>62 Kg</option>
              <option value={"63 Kg"}>63 Kg</option>
              <option value={"64 Kg"}>64 Kg</option>
              <option value={"65 Kg"}>65 Kg</option>
              <option value={"66 Kg"}>66 Kg</option>
              <option value={"67 Kg"}>67 Kg</option>
              <option value={"68 Kg"}>68 Kg</option>
              <option value={"69 Kg"}>69 Kg</option>
              <option value={"70 Kg"}>70 Kg</option>
              <option value={"71 Kg"}>71 Kg</option>
              <option value={"72 Kg"}>72 Kg</option>
              <option value={"73 Kg"}>73 Kg</option>
              <option value={"74 Kg"}>74 Kg</option>
              <option value={"75 Kg"}>75 Kg</option>
              <option value={"76 Kg"}>76 Kg</option>
              <option value={"77 Kg"}>77 Kg</option>
              <option value={"78 Kg"}>78 Kg</option>
              <option value={"79 Kg"}>79 Kg</option>
              <option value={"80 Kg"}>80 Kg</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">User email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Contact No</span>
            </label>
            <input
              type="number"
              name="contact"
              placeholder="Enter Your contact number"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <button className="btn btn-success w-full mt-5">Publish Now</button>
      </form>
    </div>
  );
};

export default EditBioData;
