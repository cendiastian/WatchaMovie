import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/userSlice";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useInsertNewUser } from "../../hooks/useInsertNewUser";
import { Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router";

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
    // mt:2,
  },
  white: {
    color: "#fffff",
  },
});

export default function Login() {
  const styles = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAuth, setErrorAuth] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const { insertUser, errorInsertUser, loadingInsertUser } = useInsertNewUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  
  if (isLogin) {
    console.log("masuk");
    console.log(isLogin);
    navigate("/");
  }
  const registerHandler = (e) => {
    console.log("masuk");
    e.preventDefault();
    setLoadingAuth(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          insertUser({
            variables: {
              object: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
                email: email,
                password: password,
              },
            },
          });
          dispatch(
            login({
              name: auth.currentUser.displayName,
              id: auth.currentUser.uid,
            })
          );
          setLoadingAuth(false);

        });
      })
      .catch((err) => {
        setLoadingAuth(false);
        setErrorAuth(err);
      });
  };

  const isLoading = loadingAuth || loadingInsertUser;
  const isError = errorAuth || errorInsertUser;

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
          Create Account
        </Typography>
      </Box>
      <FormControl onSubmit={registerHandler} noValidate>
        <TextField
          margin="normal"
          fullWidth
          required
          id="name"
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          autoComplete="name"
          autoFocus
          color="outline"
          variant="outlined"
        />
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          //   type="password"
          id="password"
          autoComplete="current-password"
          color="outline"
          variant="outlined"
        />
        {isLoading && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LoadingButton loading variant="outlined" color="primary">
            Sign Up
          </LoadingButton>
          </Box>
        )}
        {isError && (
          <Alert variant="standard" severity="error">
            Something went wrong, please try again later.
          </Alert>
        )}
        {!isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={registerHandler}
            //   type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              // onSubmit={registerHandler}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </FormControl>
    </Container>
  );
}
