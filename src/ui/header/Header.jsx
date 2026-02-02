import styles from "./Header.module.css";
import Button from "../button/Button";
import Search from "../form/search/Search";
import Account from "../account/Account";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { useFarmsName } from "@/features/farms/hooks/useFarmsName";
import Spinner from "../spinner/Spinner";

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [search, setSearch] = useState("");
  const searchForm = useForm({
    defaultValues: {
      search: "",
    },
  });
  const navigate = useNavigate();
  const lacation = useLocation();
  const isHome = lacation.pathname.includes(`home`);
  const { data, isPending, error } = useFarmsName(search);
  const searchRef = useRef(null);

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
    setSearch("");
    searchForm.reset();
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSearchClick(id) {
    setSearch("");
    searchForm.reset();
    navigate(`/app/farm/${id}`);
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
            className={styles.container}
            is-home={isHome.toString()}
            is-scroll={isScrolling.toString()}
          >
            <Search
              onChange={handleSearch}
              onClick={searchForm.handleSubmit(handleSubmit)}
              className={styles.search}
              ref={searchRef}
            >
              {isPending && <Spinner />}

              {!isPending &&
                data?.length > 0 &&
                data.map(({ farmName, _id }) => (
                  <div key={_id} onClick={() => handleSearchClick(_id)}>
                    {farmName}
                  </div>
                ))}
            </Search>
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
