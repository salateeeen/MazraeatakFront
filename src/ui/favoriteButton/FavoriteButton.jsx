import styles from "./FavoriteButton.module.css";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";

import { addToFavorites } from "@services/userApi";
import { memo } from "react";
import { useState } from "react";

function FavoriteButton({className, id, isFavorite}) {
  const [fav, setFav] = useState(isFavorite);
  const queryClient = useQueryClient();
  
  const { mutate, isPending: isFavoriting } = useMutation({
    mutationKey: ["favoritesIds"],
    mutationFn: addToFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favFarms"],
      });
      queryClient.invalidateQueries({
        queryKey: ["favoritesIds"]
      })
      queryClient.invalidateQueries({
        queryKey: ["allFarms"]
      })
    },
    onError: () => {
      setFav((fav) => !fav);
    },
  });
  
  function handleFav(e) {
    e.stopPropagation();
    mutate(id);
    setFav((fav) => !fav);
  }
  return (
    <button
      className={`${styles.favorite} ${className} `}
      onClick={handleFav}
      disabled={isFavoriting}
    >
      <Heart size={20} className={`${styles.icon} ${fav ? styles.fav : styles.notFav}`} />
    </button>
  );
}

export default memo(FavoriteButton);
