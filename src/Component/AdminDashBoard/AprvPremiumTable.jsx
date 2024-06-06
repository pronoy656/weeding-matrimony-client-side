import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useUser from "../Hooks/useUser";

const AprvPremiumTable = ({ premium, index }) => {
  const {
    email,
    Name,
    _id,
    Biodata_Type,
    Profile_Image_Link,
    Permanent_Division,
    Age,
    Occupation,
  } = premium;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useUser();
  const premiumData = {
    _id,
    email: email,
    Name,
    Biodata_Type,
    Profile_Image_Link,
    Permanent_Division,
    Age,
    Occupation,
  };

  const handleMakePremium = () => {
    axiosSecure.post(`/users/premiumCltBio/${_id}`, premiumData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${Name}is now premium member`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{Name}</td>
        <td>
          {premium.role === "premium" ? (
            <>
              <h1 className="btn btn-md bg-purple-300">Premium member</h1>
            </>
          ) : (
            <>
              <button
                onClick={handleMakePremium}
                className="btn btn-md bg-yellow-400"
              >
                Make Premium
              </button>
            </>
          )}
        </td>
      </tr>
    </div>
  );
};

export default AprvPremiumTable;
