import React from "react";
import useSelfBio from "../Hooks/useSelfBio";
import ViewDataCard from "./ViewDataCard";

const ViewBioData = () => {
  const [selfBio] = useSelfBio();
  return (
    <div>
      <h1>This is viewBio data page: {selfBio.length}</h1>
      {selfBio.map((viewBio) => (
        <ViewDataCard key={viewBio._id} viewBio={viewBio}></ViewDataCard>
      ))}
    </div>
  );
};

export default ViewBioData;
