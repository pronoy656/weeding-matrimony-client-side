import usePremiumMember from "../Hooks/usePremiumMember";
import PremiumMemberCard from "./PremiumMemberCard";

import Lottie from "lottie-react";
import underSesign from "../../../src/Animation - 1717833435833.json";
import underLine from "../../../src/underline.json";
import { useState } from "react";

const PremiumMember = () => {
  const [premiumMember] = usePremiumMember();

  const [length, setLength] = useState(6);
  return (
    <div className="mt-10">
      {/* <h1>Premium Member: {premiumMember.length}</h1> */}

      <div className="flex justify-center items-center">
        <Lottie
          className="mr-5 h-24 font-extrabold"
          animationData={underSesign}
        ></Lottie>
        <h1 className="text-3xl text-center font-extrabold">
          Our Premium Members
          <h1 className="text-pink-500 text-xl mt-3">
            {premiumMember.length} premium Member
          </h1>
          <div className="mt-9">
            <Lottie animationData={underLine}></Lottie>
          </div>
        </h1>
        <Lottie
          className="ml-5 h-24 font-bold"
          animationData={underSesign}
        ></Lottie>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-20 md:max-w-6xl md:mx-auto">
        {premiumMember.slice(0, length).map((member) => (
          <PremiumMemberCard
            key={member._id}
            member={member}
          ></PremiumMemberCard>
        ))}
      </div>
    </div>
  );
};

export default PremiumMember;
