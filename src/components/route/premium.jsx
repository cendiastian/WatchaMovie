import  React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute() {
  const user = useSelector((state) => state.user);
  console.log("ISLOGIN = ", user.isLogin);
  console.log("ISLOGIN = ", !user.premium);
  const navigate = useNavigate();
  // let location = useLocation();
  if (!user.isLogin) {
    console.log("navigate login");
    navigate("/login");
  }
  if (!user.premium) {
    console.log("navigate prcing");
    navigate("/pricing");
  }

  return <Outlet />;
}

export default PublicRoute;