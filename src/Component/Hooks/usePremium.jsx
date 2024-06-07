import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePremium = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: premiumMember = [] } = useQuery({
    queryKey: ["premiumMember"],
    queryFn: async () => {
      const res = await axiosPublic.get("/premium");
      return res.data;
    },
  });
  return [premiumMember, refetch];
};

export default usePremium;

// get premium data from database to show approve premium page
