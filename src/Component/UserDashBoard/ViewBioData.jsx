import React from "react";
import useSelfBio from "../Hooks/useSelfBio";

const ViewBioData = () => {
  const [selfBio] = useSelfBio();
  return (
    <div>
      <h1>This is viewBio data page: {selfBio.length}</h1>
    </div>
  );
};

export default ViewBioData;
