import * as React from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { Typography, Container } from "@mui/material";
// import Line from "../../assets/Line 13.png";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     color: "white",
//     width: 800,
//     backgroundColor: "#212121",
//     borderRadius: 15,
//     padding: (20, 20, 20, 20),
//   },
//   white: {
//     color: "#fffff",
//   },
// });
export default function BasicTextFields() {
  //   const styles = useStyles();
  return (
    <Container sx={{ width: "fit-content", padding: 2, bgcolor:'#212121', borderRadius: 5, height:'fit-content',}}>
      <Box sx={{ borderBottom: " 1px solid #ABABB1" }}>
        <Typography gutterBottom variant="h4" component="div" color="white">
          My Account
        </Typography>
      </Box>

      <Box sx={{ width: "50%", display:'flex', flexDirection:'column', pt:2, }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="white"
        //   sx={{ textAlign: "center" }}
        >
          Profil
        </Typography>
      {/* </Box>
      <Box sx={{ width: "50%", display:'flex', pl:3 }}> */}
      </Box>
    </Container>
  );
}
