import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const user = useSelector((state) => state.user.isLogin);
  console.log("ISLOGIN = ", user);
  const navigate = useNavigate();
  // let location = useLocation();
  if (!user) {
    console.log("navigate login");
    navigate("/login");
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoute;