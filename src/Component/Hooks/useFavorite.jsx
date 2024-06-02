import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { authContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useFavorite = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(authContext);
  const { data: favorites = [] } = useQuery({
    queryKey: ["favorites", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorite?email=${user.email}`);
      return res.data;
    },
  });

  return [favorites];
};

export default useFavorite;
