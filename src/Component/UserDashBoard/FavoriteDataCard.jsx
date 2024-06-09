import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useFavorite from "../Hooks/useFavorite";

const FavoriteDataCard = ({ favorite }) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useFavorite();
  const { Name, id, Permanent_Division, Occupation, _id } = favorite;

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
        axiosSecure.delete(`/favorite/${id}`).then((res) => {
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
    <div className="w-[800px] ">
      <tr>
        <td className="w-1/4">{Name}</td>
        <td className="w-1/4">{id}</td>
        <td className="w-1/4">{Permanent_Division}</td>
        <td className="w-1/4">{Occupation}</td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm text-red-600 bg-red-300"
        >
          <BsTrash />
        </button>
      </tr>
    </div>
  );
};

export default FavoriteDataCard;
