import "./App.css";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Movie from "./pages/movie";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Register from "./pages/regist";
import User from "./pages/user";
import Search from "./pages/search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // light: '#fffff',
      main: '#25274D',
      dark: '#333890',
      // contrastText: '#fff',
    },
    // secondary: {
      // light: '#272727',
      // main: '#272727',
      // dark: '#272727',
      // contrastText: '#272727',
    // },
    typography:{
      main: '#fffff'
    },
    bg:{
      main: '#272727'
    },
    container:{
      main: '#212121'
    },
    outline:{
      main: '#ABABB1'
    },
    danger:{
      main:'#95150c',
      dark:'#f44336'
    },
  },
});
// const theme = createTheme({
//   palette: {

//   },
// });

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
    </Router>
    </div>
     </ThemeProvider>
  );
}

export default App;
