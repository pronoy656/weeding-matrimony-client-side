import React from "react";
import useSelfBio from "../Hooks/useSelfBio";
import ViewDataCard from "./ViewDataCard";

const ViewBioData = () => {
  const [selfBio] = useSelfBio();
  if (selfBio.length === 0) {
    return (
      <div>
        <h1>There is no data</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        This is viewBio data page: {selfBio.length}
      </h1>
      <div className="grid grid-cols-2">
        {selfBio.map((viewBio) => (
          <ViewDataCard key={viewBio._id} viewBio={viewBio}></ViewDataCard>
        ))}
      </div>
    </div>
  );
};

export default ViewBioData;
