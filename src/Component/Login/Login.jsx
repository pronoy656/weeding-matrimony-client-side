import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SociealLogin from "../SociealLogin/SociealLogin";
import Lottie from "lottie-react";
import loginAnimation from "../../../src/login animation.json";

const Login = () => {
  const { signIn } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const inputField = { email, password };
    // console.log(inputField);
    signIn(email, password)
      .then((userLogIn) => {
        // console.log(userLogIn.user);
        toast.success("Signin SuccessFully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
        toast.error("login faield");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/7trVDC6/couple-holding-hands-front-blurred-rose.jpg')] ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-black">Login now!</h1>
            <div className=" mr-6">
              <Lottie animationData={loginAnimation}></Lottie>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn btn-primary">Sign in</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <SociealLogin></SociealLogin>
            <h1 className="text-xl font-semibold text-green-400 p-3 text-center">
              Don't have an account?{" "}
              <Link to={"/register"}>
                <span>Sign up</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
