import { SearchIcon } from "lucide-react";
import styles from "./Search.module.css";
import Input from "../input/Input";

function Search({ className = "", onClick, onChange, children }) {
  return (
    <div className={styles.container}>
      <Input
        type="text"
        name="search"
        label={false}
        className={`${styles.search} ${className}`}
        placeholder={"search"}
        onChange={onChange}
        autoComplete={"off"}
      >
        <SearchIcon size={20} onClick={onClick} />
      </Input>
      <div className={styles.searchList}>{children}</div>
    </div>
  );
}

export default Search;
