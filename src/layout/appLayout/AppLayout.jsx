import { Outlet, useLocation } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Header from "@/ui/header/Header";
import Footer from "@/ui/footer/Footer";
import Nav from "@/ui/nav/Nav";

function AppLayout() {
  const lacation = useLocation();
  const isHome = lacation.pathname.includes(`home`);

  return (
    <>
      <div className={`${styles.container}`}>
        <Header />
        {isHome && <Nav />}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
