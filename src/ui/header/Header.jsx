import styles from "./Header.module.css";
import Button from "../button/Button";
import Search from "../form/search/Search";
import Account from "../account/Account";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const searchForm = useForm({
    defaultValues: {
      search: "",
    },
  });
  const navigate = useNavigate();
  const lacation = useLocation();
  const isHome = lacation.pathname.includes(`home`);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLogedIn = Boolean(localStorage.getItem("token"));

  function handleLogo(e) {
    e.preventDefault();
    navigate("/app/home");
  }

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleSignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  function handleSubmit(data) {
    if (data.search.length <= 2) return;

    const params = new URLSearchParams();

    if (data.search) {
      params.set("farmName[regex]", data.search.toLowerCase());
    }

    navigate(`/app/farms?${params.toString()}`, { replace: false });
    searchForm.reset();
  }

  return (
    <header className={`${styles.header} ${!isHome ? styles.isNotHome : ""}`}>
      <img
        onClick={handleLogo}
        className={styles.logo}
        src="/mazraeatak.png"
        alt="mazraeatak"
      />
      <h1>مزرعتــك</h1>

      <FormProvider {...searchForm}>
        <form onSubmit={searchForm.handleSubmit(handleSubmit)}>
          <div
            is-home={isHome.toString()}
            is-scroll={isScrolling.toString()}
            className={`${styles.search}`}
          >
            <Search onClick={searchForm.handleSubmit(handleSubmit)} />
          </div>
        </form>
      </FormProvider>

      <div>
        {isLogedIn ? (
          <Account />
        ) : (
          <div className={styles.register}>
            <Button onClick={handleSignup}>Sign Up</Button>
            <Button onClick={handleLogin}>Log In</Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
