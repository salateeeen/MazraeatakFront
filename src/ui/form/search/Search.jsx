import { SearchIcon } from "lucide-react";
import styles from "./Search.module.css";
import Input from "../input/Input";

function Search({ className = "", onClick, onChange, color }) {
  return (
    <Input
      type="text"
      name="search"
      label={false}
      className={`${styles.search} ${className}`}
      placeholder={"search"}
      onChange={onChange}
    >
      <SearchIcon size={20} className={styles.icon} onClick={onClick} />
    </Input>
  );
}

export default Search;
