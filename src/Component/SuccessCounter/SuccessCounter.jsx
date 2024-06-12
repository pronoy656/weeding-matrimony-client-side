import Lottie from "lottie-react";

import underLine from "../../../src/underline.json";
import useBioData from "../Hooks/useBioData";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const SuccessCounter = () => {
  const [bioData] = useBioData();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="mt-28">
      <div className="flex justify-center">
        <h1 className="text-center text-3xl font-extrabold">
          Our Success Counter
          <div className="mt-9 ">
            <Lottie animationData={underLine}></Lottie>
          </div>
        </h1>
      </div>
      <h1>Total Biodata: {bioData.length}</h1>
      <h1>{stats.user}</h1>
    </div>
  );
};

export default SuccessCounter;
