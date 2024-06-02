const EditBioData = () => {
  return (
    <div>
      <h1>This is bio data page</h1>
      <form>
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
              <option value={"60 inch"}>54 inch</option>
              <option value={"60 inch"}>56 inch</option>
              <option value={"60 inch"}>58 inch</option>
              <option value={"60 inch"}>60 inch</option>
              <option value={"60 inch"}>62 inch</option>
              <option value={"60 inch"}>64 inch</option>
              <option value={"60 inch"}>66 inch</option>
              <option value={"60 inch"}>68 inch</option>
              <option value={"Female"}>70 inch</option>
              <option value={"Female"}>72 inch</option>
              <option value={"Female"}>74 inch</option>
              <option value={"Female"}>76 inch</option>
              <option value={"Female"}>78 inch</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
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
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Job Category</span>
            </label>
            <select className="select select-bordered" name="category">
              <option disabled selected>
                Pick one Job category
              </option>
              <option value={"On-site Job"}>On-site Job</option>
              <option value={"Remote Job"}>Remote Job</option>
              <option value={"Hybrid"}>Hybrid</option>
              <option value={"Part-Time"}>Part-Time</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Job Category</span>
            </label>
            <select className="select select-bordered" name="category">
              <option disabled selected>
                Pick one Job category
              </option>
              <option value={"On-site Job"}>On-site Job</option>
              <option value={"Remote Job"}>Remote Job</option>
              <option value={"Hybrid"}>Hybrid</option>
              <option value={"Part-Time"}>Part-Time</option>
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
      </form>
    </div>
  );
};

export default EditBioData;
