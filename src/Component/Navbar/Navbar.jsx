import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import webName from "../../../src/webname.json";

const Navbar = () => {
  const { user } = useContext(authContext);
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/bioData"}>
          <a>Bio Data</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/aboutUs"}>
          <a>About Us</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contactUs"}>
          <a>Contact Us</a>
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/dashBoard"}>
              <a>Dash Board</a>
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>

        <a className=" btn-ghost text-2xl flex items-center">
          <Lottie className="w-16 h-16" animationData={webName}></Lottie>
          <h1 className=" font-semibold mt-3">Eternal Bliss</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar">
              <div className="w-12 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>
              <a className="btn mr-5">sign in</a>
            </NavLink>
            <NavLink to={"/register"}>
              <a className="btn">sign up</a>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
