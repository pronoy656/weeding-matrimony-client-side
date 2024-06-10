import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoIosMan } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import useAdmin from "../Hooks/useAdmin";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import Lottie from "lottie-react";
import webName from "../../../src/webname.json";

const DashBoard = () => {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();

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
      <div className=" w-1/4 bg-[url('https://i.ibb.co/fxrdDW3/Rack-Multipart20220616-13-12jrzt3.jpg')] space-y-6 p-6">
        <div className="flex justify-center">
          <Lottie className="w-24 h-24" animationData={webName}></Lottie>
        </div>
        <h1 className="text-3xl font-bold text-pink-600 text-center">
          Weeding Matrimony
        </h1>
        <ul className="space-y-5">
          {isAdmin ? (
            <>
              <li className="bg-blue-500">
                <NavLink
                  to={"/dashBoard/adminDashBoard"}
                  className="flex items-center"
                >
                  <IoIosMan />
                  <h1>Admin Dashboard</h1>
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
              <li className="bg-blue-500 w-52 rounded-2xl">
                <NavLink to={"/dashBoard/editBioData"}>
                  {" "}
                  <h1 className="text-xl font-semibold p-3 text-center flex items-center">
                    <FaEdit />
                    Edit Biodata
                  </h1>
                </NavLink>
              </li>
              <li className="bg-blue-500 w-52 rounded-2xl">
                <NavLink to={"/dashBoard/viewBioData"}>
                  {" "}
                  <h1 className="text-xl font-semibold p-3 text-center flex items-center">
                    <div className="mr-2">
                      <FaEye />
                    </div>
                    View Biodata
                  </h1>
                </NavLink>
              </li>
              <li className="bg-blue-500 w-52 rounded-2xl">
                <NavLink to={"/dashBoard/myContRequest"}>
                  <h1 className="text-xl font-semibold p-3 text-center flex items-center">
                    <div className="mr-1">
                      <IoCall />
                    </div>
                    Contact request
                  </h1>
                </NavLink>
              </li>
              <li className="bg-blue-500 w-52 rounded-2xl">
                <NavLink to={"/dashBoard/favouriteBioData"}>
                  <h1 className="text-xl font-semibold p-3 text-center flex items-center">
                    <div className="mr-1">
                      <FaHeart />
                    </div>
                    Favorite Biodata
                  </h1>{" "}
                </NavLink>
              </li>
              <li className="bg-pink-500  text-white w-52 rounded-2xl">
                <NavLink to={"/dashBoard/review"}>
                  <h1 className="text-xl font-semibold p-3 text-center flex items-center">
                    <div className="mr-2">
                      <MdOutlineRateReview />
                    </div>
                    User Review
                  </h1>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            {" "}
            <Link to={"/"}>
              <button className="btn bg-green-600 mr-5 text-2xl font-bold ">
                <FaHome />
                Home
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn bg-red-600 text-white w-32"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
      <div className=" w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
