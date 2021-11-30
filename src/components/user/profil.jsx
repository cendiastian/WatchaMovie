import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { Typography, Container, Button } from "@mui/material";
// import Line from "../../assets/Line 13.png";
import { makeStyles } from "@mui/styles";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

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
  },
  //   white: {
  //     color: "#fffff",
  //   },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function BasicTextFields() {
  const styles = useStyles();
// const [isLogin, setLogin] = useState(false)
  const dispatch = useDispatch();
 let navigate = useNavigate()
 

//   if (!isLogin) {
    // console.log('masuk');
    // navigate("/login");
//   }
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    // console.log(isLogin);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
    // localStorage.setItem('isLogin', false);
    // setLogin(localStorage.getItem('false'))
    handleClose();
    navigate("/login");
  };

  return (
    <Container className={styles.container}>
      <Box sx={{ borderBottom: " 1px solid #ABABB1" }}>
        <Typography gutterBottom variant="h4" component="div" color="white">
          Profil
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          //   "& > :not(style)": { m: 1, width: "50%" },
          width: "80%",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          //   textAlign:'right',
        }}
        noValidate
        autoComplete="off"
      >
        {/* <Grid container rowSpacing={2}> */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
          <Box sx={{ width: "20%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ textAlign: "left" }}
            >
              Nama
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <Box sx={{ width: "70%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ width: "50%", textAlign: "left" }}
            >
              : Lorem Ipsum
            </Typography>
            {/* </Grid> */}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ textAlign: "left" }}
            >
              Nama
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <Box sx={{ width: "70%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ width: "50%", textAlign: "left" }}
            >
              : Lorem Ipsum
            </Typography>
            {/* </Grid> */}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ textAlign: "left" }}
            >
              Nama
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <Box sx={{ width: "70%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ width: "50%", textAlign: "left" }}
            >
              : Lorem Ipsum
            </Typography>
            {/* </Grid> */}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="primary"
            //   sx={{ mt: 3, mb: 2 }}
          >
            Log Out
          </Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure??
              </Typography>
              <Box sx={{ display: "flex", columnGap: 2 }}>
                <Button
                  onClick={logoutHandler}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Yes
                </Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Container>
  );
}
