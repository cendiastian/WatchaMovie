import React from "react";
import {  Outlet, useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute() {
  const role = useSelector((state) => state.user.role);
  console.log("FROM PUBLIC ROUTE = ", role);
  const navigate = useNavigate();
  // let location = useLocation();

  if (role === "user") {
    console.log("navigate ke home");
    navigate('/');
  }

  return <Outlet/>;
}

export default AdminRoute;