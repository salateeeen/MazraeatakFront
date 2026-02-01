import styles from "./FarmCard.module.css";
import { useLocation, useNavigate } from "react-router-dom";

import { memo } from "react";
import Stars from "@/ui/stars/Stars";
import DeleteButton from "@/ui/deleteButton/DeleteButton";
import FavoriteButton from "@/ui/favoriteButton/FavoriteButton";
import LabelValue from "@/ui/label/LabelValue";

function FarmCard({ farm, favorites = [] }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMyFarms = location.pathname.includes("myFarms");
  const { farmName, city, dailyPrice, _id: id, ratingsAverage: rating} = farm;

  function handleNavigate() {
    navigate(`/app/farm/${id}`);
  }
  const token = localStorage.getItem("token");

  const showDelete = Boolean(token && isMyFarms);
  const showFavorite = Boolean(token && !isMyFarms);

  const isFavorite = favorites.includes(id);

  return (
    <div onClick={handleNavigate} className={styles.card}>

      {showDelete && <DeleteButton id={id} className={styles.icon} />}

      {showFavorite && (
        <FavoriteButton
          id={id}
          className={styles.icon}
          isFavorite={isFavorite}
        />
      )}

      <img className={styles.img} src="/photo.jpeg" alt="vite" />
      <div className={styles.info}>
        <h3 className={styles.name}>{farmName.toUpperCase()}</h3>
        <LabelValue label={"rating"} className={styles.rating}>
          <Stars size={"22px"} rating={rating} />
        </LabelValue>
        <LabelValue label={"city"} className={styles.city}>
          {city}
        </LabelValue>
        <LabelValue label={"daily price"} className={styles.price}>
          {dailyPrice}$
        </LabelValue>
      </div>
    </div>
  );
}

export default memo(FarmCard);
