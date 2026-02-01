import styles from "./FarmCards.module.css";
import { memo } from "react";
import FarmCard from "./FarmCard";

import Cards from "@/ui/cards/Cards";
import NoCardsYet from "@/ui/noCardsYet/NoCardsYet";
import FarmCardSkeleton from "@/ui/skeletons/FarmCardSkeleton";
import { useFavoritesIds } from "../hooks/useFavoritesIds";

function FarmCards({ isPending, data = {}, error, title, message, header }) {
  const { data :favoritesIds } = useFavoritesIds();

  const favorites = favoritesIds?.favorites;
  const hasFarms = data?.results > 0;

  return (
    <Cards header={header} className={styles.cards}>
      {isPending &&
        Array.from({ length: 7 }, (_, i) => {
          return <FarmCardSkeleton key={i} />;
        })}

      {!isPending && !hasFarms && !error && (
        <NoCardsYet title={title} message={message} />
      )}

      {!isPending &&
        hasFarms &&
        !error &&
        data.farms.map((farm) => {
          return <FarmCard key={farm._id} farm={farm} favorites={favorites} />;
        })}

      {error && <h1>{error.message}</h1>}
    </Cards>
  );
}

export default memo(FarmCards);
