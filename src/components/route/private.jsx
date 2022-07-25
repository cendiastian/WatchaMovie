import React, { useEffect} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const user = useSelector((state) => state.persistedReducer.user.isLogin);
  console.log("ISLOGIN = ", user);
  const navigate = useNavigate();
  // let location = useLocation();
  useEffect(() => {
  if (!user) {
    console.log("navigate login");
    navigate("/login");
  }
}, [user]);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoute;
