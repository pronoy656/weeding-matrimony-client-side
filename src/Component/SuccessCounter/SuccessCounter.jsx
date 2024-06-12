import Lottie from "lottie-react";

import underLine from "../../../src/underline.json";
import useBioData from "../Hooks/useBioData";

const SuccessCounter = () => {
  const [bioData] = useBioData();
  return (
    <div className="mt-28">
      <div className="flex justify-center">
        <h1 className="text-center text-3xl font-extrabold">
          Our Success Counter
          <div className="mt-9 ">
            <Lottie animationData={underLine}></Lottie>
          </div>
        </h1>
      </div>
      <h1>Total Biodata: {bioData.length}</h1>
    </div>
  );
};

export default SuccessCounter;
