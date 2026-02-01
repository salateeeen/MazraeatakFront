import { Route, BrowserRouter, Routes } from "react-router-dom";

import AppLayout from "@layout/appLayout/AppLayout";
import Home from "@pages/home/Home";
import AddFarm from "@/features/farms/Pages/AddFarm";
import Farm from "@/features/farms/Pages/Farm";
import Favorites from "@/features/farms/Pages/Favorites";
import AllFarms from "@/features/farms/Pages/AllFarms";
import MyFarms from "@/features/farms/Pages/MyFarms";
import LogIn from "@features/auth/Pages/LogIn";
import SignUp from "@features/auth/Pages/SignUp";
import Bookings from "@/features/bookings/Pages/Bookings";
import NotFound from "@/ui/notFound/NotFound";
import Booking from "@/features/bookings/Pages/CreateBooking";
import Settings from "@/features/settings/pages/Settings";
import ScrollToTop from "./ScrollToTop";

function Routers() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/app" element={<AppLayout />}>
          <Route path="home" element={<Home />} />

          <Route
            path="settings/:section?/:subSection?/:content?"
            element={<Settings />}
          />

          <Route path="add" element={<AddFarm />} />
          <Route path="farm/:id" element={<Farm />} />
          <Route path="farms" element={<AllFarms />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="myFarms" element={<MyFarms />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="booking/:id" element={<Booking />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
