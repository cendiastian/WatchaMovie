import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Button, Link } from "@mui/material";
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
  style: {
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
  },
});
export default function Profil(props) {
  const user = props.data;
  const styles = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (user.premium) {
      setStatus("Premium");
    }
  }, [user.premium]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
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
          width: "80%",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
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
          <Box sx={{ width: "70%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ width: "50%", textAlign: "left" }}
            >
              : {user.name}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
          <Box sx={{ width: "20%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ textAlign: "left" }}
            >
              Role
            </Typography>
          </Box>
          <Box sx={{ width: "70%" }}>
            
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="white"
              sx={{ width: "50%", textAlign: "left" }}
            >
              : {status} {user.role && <Link href="/admin" component="a" sx={{background:"none", border:"none", textDecoration: 'none'}}>{user.role} </Link>}{!user.role && <span>{user.role}</span>}
            </Typography>
          </Box>
        </Box>
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
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Button onClick={handleOpen} variant="contained" color="primary">
            Log Out
          </Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={styles.style}>
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
