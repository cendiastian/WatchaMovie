import "./App.css";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Movie from "./pages/movie";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Register from "./pages/regist";
import User from "./pages/user";
import Search from "./pages/search";
import Filter from "./pages/filter";
import Order from "./pages/order";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { login, logout } from "./store/userSlice";
// import { onAuthStateChanged } from "@firebase/auth";
// import { auth } from "./config/firebase";
import { CircularProgress } from "@mui/material";
// import { useGetUser } from "./hooks/useGetUser";
import { Box } from "@mui/system";
import PremiumRoute from "./components/route/premium";
import PrivateRoute from "./components/route/private";
import AdminRoute from "./components/route/admin";
import Nav from "./components/navbar/navbar";
import Footer from "./components/footer/footer.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#25274D",
      dark: "#333890",
      typography: "#fffff",
    },
    typography: {
      main: "#fffff",
    },
    bg: {
      main: "#272727",
    },
    container: {
      main: "#212121",
    },
    outline: {
      main: "#ABABB1",
    },
    danger: {
      main: "#95150c",
      dark: "#f44336",
    },
  },
});

function App() {
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const [user, setUser] = useState({ name: "", id: "" });
  // const { getUserById, userById } = useGetUser();

  // useEffect(() => {
  //   if (user.id) {
  //     getUserById({
  //       variables: {
  //         id: user.id,
  //       },
  //     });
  //   }
  // }, [user.id]);

  // useEffect(() => {
  //   if (userById?.moviedb_user) {
  //     console.log(userById);
  //     const user = userById.moviedb_user[0];
  //     console.log(userById.moviedb_user);
  //     if (userById.moviedb_user.length !== 0){
  //     dispatch(
  //       login({
  //         name: user.name,
  //         id: user.id,
  //         role: user.role,
  //         premium: user.premium,
  //         expired: user.expired,
  //       })
  //     );
  //   }
  //   }
  //   return () => {
  //     setLoading(false);
  //   };
  // }, [userById]);

  // useEffect(() => {
  //   const unsubs = onAuthStateChanged(
  //     auth,
  //     (userAuth) => {
  //       if (userAuth !== null) {
  //         setUser({
  //           name: userAuth.displayName,
  //           id: userAuth.uid,
  //         });
  //         // setLoading(false);
  //       } else {
  //         dispatch(logout());
  //         setLoading(false);
  //       }
  //     },
  //     (error) => {
  //       alert(error);
  //       setLoading(false);
  //     }
  //   );
  //   return () => unsubs;
  // }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="App">
          <Nav />
          {loading && (
            <Box
              sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress
                style={{ width: "200px", height: "200px", color: "#white" }}
              />
            </Box>
          )}
          {!loading && (
            <Routes>
              <Route path="/" element={<Home load={setLoading}/>} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search/:title" element={<Search load={setLoading}/>} />
              <Route path="/filter/:id" element={<Filter load={setLoading}/>} />
              <Route path="/order/:id" element={<Order load={setLoading}/>} />
              <Route path="/user" element={<PrivateRoute />}>
                <Route index element={<User />} />
              </Route>
              <Route path="/movie/:id" element={<PremiumRoute />}>
                <Route index element={<Movie load={setLoading}/>} />
              </Route>
              <Route path="/admin" element={<AdminRoute />}>
                <Route index element={<Admin load={setLoading}/>} />
              </Route>
            </Routes>
          )}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
