import useBioData from "../Hooks/useBioData";

const AdminDashBoard = () => {
  const [bioData] = useBioData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600">
        Total bio data: {bioData.length}
      </h1>
    </div>
  );
};

export default AdminDashBoard;
