import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const DashBoard = () => {
  const { logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout Successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex gap-x-6">
      <div className="border border-red-300 w-1/4">
        <h1>Left side</h1>
        <button onClick={handleLogOut} className="btn btn-primary">
          Log Out
        </button>
      </div>
      <div className="border border-red-300 w-3/4">
        <h1>Right side</h1>
      </div>
    </div>
  );
};

export default DashBoard;
