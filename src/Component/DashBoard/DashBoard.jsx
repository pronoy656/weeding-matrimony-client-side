import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoIosMan } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";

const DashBoard = () => {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();
  const isAdmin = true;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout Successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex gap-x-6">
      <div className="border border-red-300 w-1/4 bg-orange-500 space-y-6 p-6">
        <h1>Left side</h1>
        <ul className="space-y-5">
          {isAdmin ? (
            <>
              <li className="bg-blue-500">
                <NavLink
                  to={"/dashBoard/adminDashBoard"}
                  className="flex items-center"
                >
                  <IoIosMan />
                  Admin Dashboard
                </NavLink>
              </li>
              <li className="bg-blue-500">
                <NavLink
                  to={"/dashBoard/manageUsers"}
                  className="flex items-center"
                >
                  <FaList />
                  Manage Users
                </NavLink>
              </li>
              <li className="bg-blue-500">
                <NavLink
                  to={"/dashBoard/approvedPremium"}
                  className="flex items-center"
                >
                  <FcApproval />
                  Approved Premium
                </NavLink>
              </li>
              <li className="bg-blue-500">
                <NavLink
                  to={"/dashBoard/approvedContactRequest"}
                  className="flex items-center"
                >
                  <FcApproval />
                  Approved Contact Request{" "}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="bg-blue-500">
                <NavLink to={"/dashBoard/editBioData"}>Edit Biodata</NavLink>
              </li>
              <li className="bg-blue-500">
                <NavLink to={"/dashBoard/viewBioData"}>View Biodata</NavLink>
              </li>
              <li className="bg-blue-500">
                <NavLink to={"/dashBoard/myContRequest"}>
                  My Contact Request
                </NavLink>
              </li>
              <li className="bg-blue-500">
                <NavLink to={"/dashBoard/favouriteBioData"}>
                  Favourite Biodata{" "}
                </NavLink>
              </li>
              <li className="bg-blue-500">
                <NavLink to={"/dashBoard/review"}>user Review </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            {" "}
            <Link to={"/"}>
              <button className="btn btn-secondary mr-5">Home</button>
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-primary">
              Log Out
            </button>
          </li>
        </ul>
      </div>
      <div className="border border-red-300 w-3/4">
        <h1>Right side</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
