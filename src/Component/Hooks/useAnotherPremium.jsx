import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAnotherPremium = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const { refetch, data: isAnotherPremium } = useQuery({
    queryKey: [user?.email, "isAnotherPremium"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/anotherPremium/${user.email}`);
      // console.log(res.data);
      return res.data?.premium;
    },
  });
  return [isAnotherPremium, refetch];
};

export default useAnotherPremium;
