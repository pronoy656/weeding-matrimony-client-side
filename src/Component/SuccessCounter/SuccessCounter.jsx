import Lottie from "lottie-react";

import underLine from "../../../src/underline.json";
import useBioData from "../Hooks/useBioData";
import { IoPeopleSharp } from "react-icons/io5";
import usePremium from "../Hooks/usePremium";

const SuccessCounter = () => {
  const [bioData] = useBioData();
  const [premiumMember] = usePremium();

  return (
    <div className="mt-28">
      <div className="flex justify-center mt-8">
        <h1 className="text-center text-3xl font-extrabold">
          Our Success Counter
          <div className="mt-9 ">
            <Lottie animationData={underLine}></Lottie>
          </div>
        </h1>
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12">
          <div className="border w-44 h-32 flex text-2xl font-bold bg-pink-200 p-2 rounded-2xl mt-8">
            <div className="mr-2 mt-2">
              <IoPeopleSharp />
            </div>
            <h1>Total Biodata:{bioData.length} </h1>
          </div>
          <div className="border w-44 h-32 flex text-2xl font-bold bg-yellow-400 p-2 rounded-2xl mt-8">
            <div className="mr-2 mt-2">
              <IoPeopleSharp />
            </div>
            <h1>Premium Member: {premiumMember.length}</h1>
          </div>
          <div className="border w-44 h-32 flex text-2xl font-bold bg-purple-500 p-2 rounded-2xl mt-8">
            <div className="mr-2 mt-2">
              <IoPeopleSharp />
            </div>
            <h1>Male Biodata: 11</h1>
          </div>
          <div className="border w-44 h-32 flex text-2xl font-bold bg-cyan-400 p-2 rounded-2xl mt-8">
            <div className="mr-2 mt-2">
              <IoPeopleSharp />
            </div>
            <h1>Female Biodata: 09</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
