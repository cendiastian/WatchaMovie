import React, { useEffect} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute() {
  const user = useSelector((state) => state.persistedReducer.user);
  console.log("ISLOGIN = ", user.isLogin);
  console.log("ISLOGIN = ", !user.premium);
  const navigate = useNavigate();
  // let location = useLocation();
  useEffect(() => {
  if (!user.isLogin) {
    console.log("navigate login");
    navigate("/login");
  }
  // useEffect(() => {
  if (!user.premium) {
    console.log("navigate prcing");
    navigate("/pricing");
  }
}, [user]);

  return <Outlet />;
}

export default PublicRoute;