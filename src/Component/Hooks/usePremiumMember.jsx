import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePremiumMember = () => {
  const axiosPublic = useAxiosPublic();
  const { data: premiumMember = [] } = useQuery({
    queryKey: ["premiumMember"],
    queryFn: async () => {
      const res = await axiosPublic.get("/premiumMember");
      return res.data;
    },
  });
  return [premiumMember];
};

export default usePremiumMember;

// data get for shown home route
