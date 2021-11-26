import * as React from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { Typography, Container, FormControl, RadioGroup, Radio } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
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
    <Container
      sx={{
        width: "12.5%",
        padding: 2,
        bgcolor: "#212121",
        borderRadius: 5,
        height: "fit-content",
      }}
    >
      <Box sx={{ borderBottom: " 1px solid #ABABB1" }}>
        <Typography gutterBottom variant="h4" component="div" color="white">
          Filter
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: 2,
          borderBottom: " 1px solid #ABABB1",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="white"
        >
          Order
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            // aria-label="gender"
            // name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
          >
            <FormControlLabel
              value="oldest"
              control={<Radio color="outline"/>}
              sx={{ color: "white" }}
              label="Oldest"
            />
            <FormControlLabel value="newest" control={<Radio color="outline"/>} sx={{ color: "white" }} label="Newest" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", pt: 2 }}
      >
        {/* </Box>
      <Box sx={{ width: "50%", display:'flex', pl:3 }}> */}
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="white"
          //   sx={{ textAlign: "center" }}
        >
          Genre
        </Typography>
        {/* </Box>
      <Box sx={{ width: "50%", display:'flex', pl:3 }}> */}
        <Typography
          gutterBottom
          variant="subtitle1"
          component="p"
          color="white"
          //   sx={{ textAlign: "center" }}
        >
          Adventure
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="p"
          color="white"
          //   sx={{ textAlign: "center" }}
        >
          Fantasy
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="p"
          color="white"
          //   sx={{ textAlign: "center" }}
        >
          Action
        </Typography>
        {/* </Box> */}
      </Box>
    </Container>
  );
}
