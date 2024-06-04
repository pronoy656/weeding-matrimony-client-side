import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast/headless";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const SociealLogin = () => {
  const { googleSignIn } = useContext(authContext);
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("User login successfully");
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center btn btn-outline"
      >
        <FaGoogle />
        Google
      </button>
    </div>
  );
};

export default SociealLogin;
