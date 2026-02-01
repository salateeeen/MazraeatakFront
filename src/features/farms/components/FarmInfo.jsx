import styles from "./FarmInfo.module.css";
import Button from "@/ui/button/Button.jsx";

import { useNavigate, useParams } from "react-router-dom";
import Stars from "@/ui/stars/Stars.jsx";
import AvailableDays from "@/ui/availableDays/AvailableDays.jsx";
import Profile from "@/ui/profile/Profile";
import LabelValue from "@/ui/label/LabelValue";
import { useMe } from "@/hooks/useMe";
import { useFacilities } from "@/hooks/useFacilities";

function FarmInfo({ className = "", data: { farm, availableDays } }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { data: facilitiesObj } = useFacilities();
  const { data: user } = useMe();

  function handleBooking() {
    navigate(`/app/booking/${id}`);
  }

  const {
    farmName,
    farmOwner,
    city,
    dailyPrice,
    maximumGuests,
    facilities: facilitiesID,
    ratingsAverage: rating,
    category,
  } = farm;

  const isMyFarm =
    user?.user?._id && farmOwner?._id && user.user._id === farmOwner._id;

  const showBookButton = token && !isMyFarm;

  const facilitiesName = facilitiesObj?.facilities
    ?.filter((fac) => {
      return facilitiesID.includes(fac.id);
    })
    ?.map((fac) => fac.name);

  return (
    <div className={`${styles.info} ${className}`}>
      <h2 className={styles.name}>{farmName.toUpperCase()}</h2>

      <LabelValue label="City">{city}</LabelValue>

      <div className={styles.facilities}>
        {facilitiesName?.map((fac, i) => {
          return (
            <span key={i} className={styles.facilitie}>
              {fac}
            </span>
          );
        })}
      </div>

      <LabelValue label="Category">{category}</LabelValue>

      <LabelValue label="Maximum Guests">{maximumGuests}</LabelValue>

      <LabelValue label="Rating">
        <Stars rating={rating} />
      </LabelValue>

      <LabelValue label="Daily Price" className={styles.price}>
        {dailyPrice}$
      </LabelValue>

      <AvailableDays
        className={styles.availableDays}
        availableDays={availableDays}
      />

      <div className={styles.ownerAndBooking}>
        <Profile user={farmOwner} className={styles.owner} />

        {showBookButton && (
          <Button className={styles.btn} onClick={handleBooking}>
            Book
          </Button>
        )}
      </div>
    </div>
  );
}

export default FarmInfo;
