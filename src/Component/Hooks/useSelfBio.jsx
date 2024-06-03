import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { authContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelfBio = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(authContext);
  const { data: selfBio = [] } = useQuery({
    queryKey: ["selfBio", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selfBioData?email=${user.email}`);
      return res.data;
    },
  });
  return [selfBio];
};

export default useSelfBio;
