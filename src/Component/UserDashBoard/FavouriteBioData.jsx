import useFavorite from "../Hooks/useFavorite";

const FavouriteBioData = () => {
  const [favorites] = useFavorite();
  return (
    <div>
      <h1>this ifc favourite bio data page</h1>
      <h1>Favorite:{favorites.length}</h1>
    </div>
  );
};

export default FavouriteBioData;
