import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AprvPremiumTable = ({ premium, index }) => {
  const { email, Name, _id } = premium;
  //   const axiosSecure = useAxiosSecure();

  //   const handleMakePremium = () => {
  //     axiosSecure.patch(`/users/premium/${_id}`).then((res) => {
  //       console.log(res.data);
  //       if (res.data.modifiedCount > 0) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${Name}is now premium member`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  //   };

  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{Name}</td>
        <td>
          <button className="btn btn-md bg-yellow-400">Make Premium</button>
        </td>
      </tr>
    </div>
  );
};

export default AprvPremiumTable;
