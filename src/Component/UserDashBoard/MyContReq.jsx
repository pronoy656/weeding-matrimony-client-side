import { FaTrash } from "react-icons/fa";
import useEmailPayment from "../Hooks/useEmailPayment";
import useApprovalRequest from "../Hooks/useApprovalRequest";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyContReq = () => {
  const [payments, refetch] = useEmailPayment();
  const [isApproval] = useApprovalRequest();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this Bio-data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/payment/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Favorite has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h1>Payment: {payments?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Biodata ID</th>
              <th>Status</th>
              <th>Email</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => (
              <tr key={payment._id} className="">
                <th>{index + 1}</th>
                <td>{payment.id}</td>
                {payment.role === "approval" ? (
                  <>
                    <h1 className="text-green-500 text-xl font-bold mt-3">
                      Approved
                    </h1>
                  </>
                ) : (
                  <>
                    <td className="text-red-500">pending</td>
                  </>
                )}
                <td>
                  {payment?.role === "approval" ? (
                    <>
                      <td>{payment.email}</td>
                    </>
                  ) : (
                    <>
                      <h1 className="text-red-500">Wait for Admin Approval</h1>
                    </>
                  )}
                </td>
                <td>
                  {payment?.role === "approval" ? (
                    <>
                      <td>{payment.mobileNumber}</td>
                    </>
                  ) : (
                    <>
                      <h1 className="text-red-500">Wait for Admin Approval</h1>
                    </>
                  )}
                </td>
                <button
                  onClick={() => handleDelete(payment._id)}
                  className="btn btn-sm bg-red-400"
                >
                  <FaTrash />
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContReq;
