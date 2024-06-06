import usePremium from "../Hooks/usePremium";
import AprvPremiumTable from "./AprvPremiumTable";

const AprnPremium = () => {
  const [premiumMember] = usePremium();
  return (
    <div>
      <h1>This is approve premium page</h1>
      <h1>premiumMember: {premiumMember.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
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
