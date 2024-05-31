const DashBoard = () => {
  return (
    <div className="flex gap-x-6">
      <div className="border border-red-300 w-1/4">
        <h1>Left side</h1>
        <button className="btn btn-primary">Log Out</button>
      </div>
      <div className="border border-red-300 w-3/4">
        <h1>Right side</h1>
      </div>
    </div>
  );
};

export default DashBoard;
