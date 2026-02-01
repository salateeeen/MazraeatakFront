import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";
import { Settings, CalendarDays, Heart, PlusCircle } from "lucide-react";
import { MdOutlineVilla } from "react-icons/md";


function Nav({ className }) {
  const navigate = useNavigate();

  function handleCreateFarm(e) {
    navigate("/app/add");
  }

  function handleMyFarms(e) {
    navigate("/app/myFarms");
  }

  function handleFavorites(e) {
    navigate(`/app/favorites`);
  }

  function handleBookings(e) {
    navigate(`/app/bookings`);
  }

  function handleSettings(e) {
    navigate(`/app/settings`);
  }

  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={`${styles.list}`}>
        <li className={styles.settings} onClick={handleSettings}>
          <Settings />
          <span>Settings</span>
        </li>
        <li className={styles.myFarms} onClick={handleMyFarms}>
          <MdOutlineVilla />
          <span>My Farms</span>
        </li>
        <li className={styles.addFarm} onClick={handleCreateFarm}>
          <PlusCircle/>
          <span>Add Farm</span>
        </li>

        <li className={`${styles.favorite}`} onClick={handleFavorites}>
          <Heart />
          <span>Favorites</span>
        </li>

        <li className={styles.lastVisites} onClick={handleBookings}>
          <CalendarDays />
          <span>Bookings</span>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
