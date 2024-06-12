import Lottie from "lottie-react";

import underLine from "../../../src/underline.json";

const WorkSection = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-center">
          How it works section
          <div className="mt-9">
            <Lottie animationData={underLine}></Lottie>
          </div>
        </h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-10 mt-14">
        <div className="flex items-center  w-40 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">1</h1>
          <h1 className="ml-4 text-xl font-bold">
            Register and <br /> login{" "}
          </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">2</h1>
          <h1 className="ml-4 text-xl font-bold">
            Premium member and view their profile{" "}
          </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">3</h1>
          <h1 className="ml-4 text-xl font-bold">user can view any biodata </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">4</h1>
          <h1 className="ml-4 text-xl font-bold">
            user can do request for contact{" "}
          </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">5</h1>
          <h1 className="ml-4 text-xl font-bold">
            After payment user can see contact{" "}
          </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">6</h1>
          <h1 className="ml-4 text-xl font-bold">
            user add their favorite list
          </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">7</h1>
          <h1 className="ml-4 text-xl font-bold">user post biodata </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">8</h1>
          <h1 className="ml-4 text-xl font-bold">user view their biodata </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">9</h1>
          <h1 className="ml-4 text-xl font-bold">
            user can view his favorite list
          </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">10</h1>
          <h1 className="ml-4 text-xl font-bold">
            user can view his contact request
          </h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">11</h1>
          <h1 className="ml-4 text-xl font-bold">user can add review</h1>
        </div>
        <div className="flex items-center  w-48 p-1 bg-base-100 shadow-xl">
          <h1 className="text-2xl font-extrabold text-pink-600">12</h1>
          <h1 className="ml-4 text-xl font-bold">
            user can request premium member
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
