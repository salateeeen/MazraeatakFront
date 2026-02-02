import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "@services/userApi";
import styles from "./Account.module.css";
import { useRef, useState } from "react";
import { Camera, LogOut, User, Settings, Moon, Sun } from "lucide-react";
import Button from "../button/Button";
import { useCloseComponents } from "@/hooks/useCloseComponents";
import { useNavigate } from "react-router-dom";
import { useMe } from "@/hooks/useMe";

function Account() {
  const [isShow, setIsShow] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef();
  const navigate = useNavigate();

  const { data, isPending, error } = useMe();

  useCloseComponents(setIsShow, containerRef);

  function handlePFP() {
    setIsShow((prev) => !prev);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  
  function handleSettings(e) {
    setIsShow(false);
    navigate(`/app/settings/account`);
  }
  
  function toggleTheme() {
    setIsDark((prev) => !prev);
    
    document.documentElement.classList.toggle("dark");
    // تخزين الاختيار
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    
    window.location.reload();
  }
  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (isPending) return null;
  if (error) return <h1>{error.message}</h1>;

  const { firstName, lastName, profilePicture } = data.user;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.profile} onClick={handlePFP}>
        {profilePicture ? (
          <img src={profilePicture} alt="profile" />
        ) : (
          <span>{firstName[0].toUpperCase()}</span>
        )}
      </div>

      <div className={`${styles.popup} ${isShow ? styles.show : ""}`}>
        <div className={styles.avatarLarge}>
          {profilePicture ? (
            <img src={profilePicture} alt="profile" />
          ) : (
            <Camera size={20} />
          )}
        </div>

        <p className={styles.name}>{fullName}</p>

        <div className={styles.divider} />

        <button className={styles.item}>
          <User size={16} />
          View profile
        </button>

        <button className={styles.item} onClick={handleSettings}>
          <Settings size={16} />
          Account settings
        </button>

        <button className={styles.item} onClick={toggleTheme}>
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          {isDark ? "Light mode" : "Dark mode"}
        </button>

        <div className={styles.divider} />

        <Button className={styles.logout} onClick={handleLogout}>
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Account;
