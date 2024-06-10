import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Review = () => {
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selfId = e.target.self.value;
    const partnerId = e.target.partner.value;
    const coupleImage = e.target.image.value;
    const successStory = e.target.review.value;
    const allField = { selfId, partnerId, coupleImage, successStory };
    console.log(allField);
    axiosSecure.post("/review", allField).then((res) => {
      console.log(res.data);
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
      <h1>This is review page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Self Biodata Id</span>
          </label>
          <input
            type="number"
            name="self"
            placeholder="Enter Your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Partner Biodata Id</span>
          </label>
          <input
            type="number"
            name="partner"
            placeholder="Enter Your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Image link</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter Your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex justify-center mt-4 mb-5">
          <textarea
            name="review"
            id=""
            placeholder="text your review"
            cols="100"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-md bg-purple-500 w-full">Submit</button>
      </form>
    </div>
  );
};

export default Review;
