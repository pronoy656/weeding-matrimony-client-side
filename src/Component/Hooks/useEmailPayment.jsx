import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEmailPayment = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: [user?.email, "payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user.email}`);
      // console.log(res.data);
      return res.data;
    },
  });
  return [payments];
};

export default useEmailPayment;

// email basis payment method for user my contact req page
