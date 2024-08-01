import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import Login from './components/auth/login/index';
import Signup from './components/auth/signup/index';
import NotFound from "./components/miscellaneous/NotFound";
import ProfilePage from "./components/profile/ProfilePage";
import WebList from "./components/WebList/WebList";
// import DashboardCombined from "./components/dashboard/DashboardCombined";
import DashboardOne from "./components/dashboard/components/DashboardOne";
import Profile from "./components/dashboard/components/Profile";
import ListRestros from "./components/dashboard/components/ListRestros";

const AllRoutes = () => {



  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/webList" element={<WebList />} />

      {/* Dashboard pages */}
      <Route path="/dashboard" element={<DashboardOne />} />
      <Route path="/dashboard/listing" element={<ListRestros />} />
      <Route path="/dashboard/profile" element={<Profile />} />

      {/* Under Development */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AllRoutes;
