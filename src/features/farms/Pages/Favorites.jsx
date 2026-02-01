import FarmCards from "@/features/farms/components/FarmCards";
import Title from "@/ui/title/Title";
import { useFavoritesFarms } from "../hooks/useFavoriteFarms";

function Favorites() {
  const { data, isPending, error } = useFavoritesFarms()

  return (
    <FarmCards
      data={data}
      isPending={isPending}
      error={error}
      title="No favorites yet"
      message="Mark your favorite farms to find them easily!"
      header={<Title>Favorites</Title>}
    />
  );
}
export default Favorites;
