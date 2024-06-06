import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePremiumTan = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const { data: isPremium } = useQuery({
    queryKey: [user?.email, "isPremium"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/premium/${user.email}`);
      console.log(res.data);
      return res.data?.premium;
    },
  });
  return [isPremium];
};

export default usePremiumTan;
