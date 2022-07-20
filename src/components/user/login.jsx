import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { login } from "../../store/userSlice";
import FormControl from "@mui/material/FormControl";
import { useGetUser } from "../../hooks/useGetUser";
import { useUpdateUser } from "../../hooks/useUpdateUser";
// import moment from 'moment'

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    width: 800,
    backgroundColor: "#212121",
    borderRadius: 15,
    padding: (20, 20, 20, 20),
    mt: 2,
  },
  white: {
    color: "#fffff",
  },
});

export default function Login() {
  const { updateUser  } = useUpdateUser();
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ name: "", id: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const { getUserById, userById } = useGetUser();
  // const { id, name, role, premium, expired } = userById.moviedb_user;
  // const data = userById
  useEffect(() => {
    if (user.id) {
      getUserById({
        variables: {
          id: user.id,
        },
      });
    }
  }, [getUserById, user.id]);

  useEffect(() => {
    if (userById?.moviedb_user) {
      console.log(userById);
      const user = userById.moviedb_user[0];
      console.log(userById.moviedb_user);
      if (user.expired < new Date()){
        updateUser({
          variables: {
            id: user.id,
            premium: false,
            expired: null,
          },
        });
      }
      dispatch(
        login({
          name: user.name,
          id: user.id,
          role: user.role,
          premium: user.premium,
          expired: user.expired,
        })
      );
      // localStorage.setItem('isLogin', true);
      // console.log(localStorage.getItem('islogin'));
      // setLogin(true)
      // console.log(isLogin);
    }
    setLoading(false);
  }, [dispatch, userById]);

  if (isLogin) {
    console.log("masuk");
    console.log(isLogin);
    navigate("/");
  }
  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        setUser({
          name: userAuth.user.displayName,
          id: userAuth.user.uid,
        });
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };
  return (
    <Container className={styles.container}>
      <Box>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          //   sx={{ textAlign: "center" }}
        >
          Welcome Back
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color="gray"
          //   sx={{ textAlign: "center" }}
        >
          Login with email
        </Typography>
      </Box>
      <FormControl onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          required
          id="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          autoComplete="email"
          autoFocus
          color="outline"
          variant="outlined"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //   type="password"
          id="password"
          autoComplete="current-password"
          color="outline"
          variant="outlined"
        />
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs>
            <FormControlLabel
              control={<Checkbox value="remember" color="outline" />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Link
              href="#"
              color="#ABABB1"
              sx={{ textDecoration: "none", fontWeight: "bold", textAlign: "center", }}
            >
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        {loading && (
          <LoadingButton loading variant="outlined" color="primary">
            Sign In
          </LoadingButton>
        )}
        {!loading && (
          <Button
            onClick={loginHandler}
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        )}
      </FormControl>
    </Container>
  );
}
