import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useApprovalRequest = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const { refetch, data: isApproval } = useQuery({
    queryKey: [user?.email, "isApproval"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/approvalReq/${user.email}`);
      console.log(res.data);
      return res.data?.approval;
    },
  });
  return [isApproval, refetch];
};

export default useApprovalRequest;
