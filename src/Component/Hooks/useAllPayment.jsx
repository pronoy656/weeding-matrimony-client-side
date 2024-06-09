import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllPayment = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: allPaymentData = [] } = useQuery({
    queryKey: ["allPaymentData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/paymentAdmin");
      return res.data;
    },
  });
  return [allPaymentData, refetch];
};

export default useAllPayment;
