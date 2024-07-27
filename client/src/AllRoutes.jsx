import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import Login from './components/auth/login/index';
import Signup from './components/auth/signup/index';
import NotFound from "./components/miscellaneous/NotFound";
import ProfilePage from "./components/profile/ProfilePage";

const AllRoutes = () => {



  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AllRoutes;
