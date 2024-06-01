import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBioData = () => {
  const axiosSecure = useAxiosSecure();
  const { data: bioData = [] } = useQuery({
    queryKey: ["bioData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bioData");
      return res.data;
    },
  });
  return [bioData];
};

export default useBioData;
