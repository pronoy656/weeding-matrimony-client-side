import { BsTrash } from "react-icons/bs";

const FavoriteDataCard = ({ favorite }) => {
  const { Name, id, Permanent_Division, Occupation } = favorite;
  return (
    <div>
      <tr>
        <td>Name: {Name}</td>
        <td>Id:{id}</td>
        <td>Permanent_Division:{Permanent_Division}</td>
        <td>Occupation:{Occupation}</td>
        <button className="btn btn-sm text-red-600 bg-red-300">
          <BsTrash />
        </button>
      </tr>
    </div>
  );
};

export default FavoriteDataCard;
