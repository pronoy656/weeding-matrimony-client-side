import Lottie from "lottie-react";
import underSesign from "../../../src/Animation - 1717833435833.json";

const WorkSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Lottie
          className="mr-5 h-24 font-extrabold"
          animationData={underSesign}
        ></Lottie>
        <h1 className="text-3xl font-semibold text-center">
          How it works section
        </h1>
        <Lottie
          className="mr-5 h-24 font-extrabold"
          animationData={underSesign}
        ></Lottie>
      </div>
    </div>
  );
};

export default WorkSection;
