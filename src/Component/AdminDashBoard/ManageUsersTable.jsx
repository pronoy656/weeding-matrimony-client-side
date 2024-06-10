import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useUser from "../Hooks/useUser";

const ManageUsersTable = ({ users, index }) => {
  const { name, email, _id } = users;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useUser();

  const handleMakeAdmin = () => {
    axiosSecure.patch(`/users/admin/${_id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name}is admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakePremium = () => {
    axiosSecure.patch(`/users/premium/${_id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name}is now premium member`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <tbody>
        <tr className="w-[700px]">
          <th className="w-1/12">{index + 1}</th>
          <td className="w-1/12">{name}</td>
          <td className="w-1/12">{email}</td>
          <td className="w-1/12  justify-center">
            {users.role === "admin" ? (
              <h1 className="btn btn-sm bg-red-200">Admin</h1>
            ) : (
              <button
                onClick={() => handleMakeAdmin(users)}
                className="btn btn-sm bg-green-500"
              >
                Make Admin
              </button>
            )}
          </td>
          <td className="w-1/12 ">
            {users.role === "premium" ? (
              <h1 className="btn btn-sm bg-red-400 text-white">Premium</h1>
            ) : (
              <button
                onClick={() => handleMakePremium(users)}
                className="btn btn-sm bg-yellow-400"
              >
                Make Premium
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default ManageUsersTable;
