import useFavorite from "../Hooks/useFavorite";
import FavoriteDataCard from "./FavoriteDataCard";

const FavouriteBioData = () => {
  const [favorites] = useFavorite();
  return (
    <div>
      <h1>this ifc favourite bio data page</h1>
      <h1>Favorite:{favorites.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Biodata Id</th>
              <th>Permanent Address</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((favorite) => (
              <FavoriteDataCard
                key={favorite._id}
                favorite={favorite}
              ></FavoriteDataCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouriteBioData;
