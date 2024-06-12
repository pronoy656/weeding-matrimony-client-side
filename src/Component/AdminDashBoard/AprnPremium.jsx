import usePremium from "../Hooks/usePremium";
import AprvPremiumTable from "./AprvPremiumTable";

const AprnPremium = () => {
  const [premiumMember] = usePremium();
  return (
    <div>
      <h1 className="text-center mt-8 mb-9 text-3xl font-bold">
        Total premiumMember: {premiumMember.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr className="w-[700px]">
              <th className="w-1/12">index</th>
              <th className="w-1/12">Name</th>
              <th className="w-1/12">Job</th>
              <th className="w-1/12">Favorite Color</th>
            </tr>
          </thead> */}
          <tbody>
            {premiumMember.map((premium, index) => (
              <AprvPremiumTable
                key={premium._id}
                premium={premium}
                index={index}
              ></AprvPremiumTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AprnPremium;
