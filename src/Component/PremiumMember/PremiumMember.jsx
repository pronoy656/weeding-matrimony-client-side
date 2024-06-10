import usePremiumMember from "../Hooks/usePremiumMember";
import PremiumMemberCard from "./PremiumMemberCard";

import Lottie from "lottie-react";
import underSesign from "../../../src/Animation - 1717833435833.json";
import underLine from "../../../src/underline.json";

const PremiumMember = () => {
  const [premiumMember] = usePremiumMember();
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
          <div className="mt-9">
            <Lottie animationData={underLine}></Lottie>
          </div>
        </h1>
        <Lottie
          className="ml-5 h-24 font-bold"
          animationData={underSesign}
        ></Lottie>
      </div>
      <div className="grid grid-cols-3 gap-x-20 max-w-6xl mx-auto">
        {premiumMember.map((member) => (
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
