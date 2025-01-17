import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SociealLogin from "../SociealLogin/SociealLogin";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile, user, setUser, logOut } =
    useContext(authContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const inputField = { name, photoUrl, email, password };
    // console.log(inputField);

    // userCreate
    createUser(email, password)
      .then((userCreate) => {
        const user = userCreate.user;
        updateUserProfile(name, photoUrl).then(() => {
          const userInfo = {
            name: name,
            email: email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              toast.success("Successfully account created!");
              logOut();
              navigate("/login");
            }
          });
          setUser({ displayName: name, photoURL: photoUrl });
        });
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/p0wWJbS/4871703.jpg')]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mr-40">Register Now</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-500">Sign up</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <SociealLogin></SociealLogin>
            <h1 className="text-xl font-semibold text-green-400 p-3 text-center">
              Already have an account?{" "}
              <Link to={"/login"}>
                <span>Sign in</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
