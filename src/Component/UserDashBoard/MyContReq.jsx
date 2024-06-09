import { FaTrash } from "react-icons/fa";
import useEmailPayment from "../Hooks/useEmailPayment";
import useApprovalRequest from "../Hooks/useApprovalRequest";

const MyContReq = () => {
  const [payments] = useEmailPayment();
  const [isApproval] = useApprovalRequest();
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
            {payments.map((payment, index) => (
              <tr key={payment._id} className="">
                <th>{index + 1}</th>
                <td>{payment.id}</td>
                {isApproval ? (
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
                  {isApproval ? (
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
                  {isApproval ? (
                    <>
                      <td>{payment.mobileNumber}</td>
                    </>
                  ) : (
                    <>
                      <h1 className="text-red-500">Wait for Admin Approval</h1>
                    </>
                  )}
                </td>
                <button className="btn btn-sm bg-red-400">
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
