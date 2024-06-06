import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePremium = () => {
  const axiosPublic = useAxiosPublic();
  const { data: premiumMember = [] } = useQuery({
    queryKey: ["premiumMember"],
    queryFn: async () => {
      const res = await axiosPublic.get("/premium");
      return res.data;
    },
  });
  return [premiumMember];
};

export default usePremium;
