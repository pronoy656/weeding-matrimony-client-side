import Swal from "sweetalert2";
import useAllPayment from "../Hooks/useAllPayment";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { LuMoveUpRight } from "react-icons/lu";
const AprvContactReq = () => {
  const axiosSecure = useAxiosSecure();
  const [allPaymentData, refetch] = useAllPayment();
  const handleMakeApprove = (user) => {
    axiosSecure.patch(`/users/approveRequest/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Approved Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h1>{allPaymentData.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Biodata ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {allPaymentData.map((singlePayment, index) => (
              <tr key={singlePayment._id} className="space-y-7">
                <th>{index + 1}</th>
                <td>{singlePayment.id}</td>

                <td>{singlePayment.name}</td>
                <td>{singlePayment.email}</td>
                {singlePayment.role === "approval" ? (
                  <>
                    <h1 className="flex items-center text-xl font-bold text-green-500">
                      <span className="text-2xl font-bold mr-4">
                        <LuMoveUpRight />
                      </span>
                      Approved
                    </h1>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleMakeApprove(singlePayment)}
                      className="btn btn-sm bg-orange-400"
                    >
                      Approve Contact request
                    </button>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AprvContactReq;
