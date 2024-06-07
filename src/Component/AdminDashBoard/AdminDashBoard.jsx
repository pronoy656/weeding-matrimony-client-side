import useBioData from "../Hooks/useBioData";

const AdminDashBoard = () => {
  const [bioData] = useBioData();

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600">
        Total bio data: {bioData.length}
      </h1>
      {/* {
        bioData.filter((item) => item.Biodata_Type === "Male")
        // .map((male) => (
        //   // <p key={male._id}>Total Male:{male.length}</p>
        // ))}
      } */}
    </div>
  );
};

export default AdminDashBoard;
