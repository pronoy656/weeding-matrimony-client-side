import usePremiumMember from "../Hooks/usePremiumMember";
import PremiumMemberCard from "./PremiumMemberCard";

const PremiumMember = () => {
  const [premiumMember] = usePremiumMember();
  return (
    <div>
      <h1>Premium Member: {premiumMember.length}</h1>
      <h1 className="text-3xl text-center">Our Premium Members</h1>
      <div className="grid grid-cols-3">
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
