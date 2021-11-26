import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Container } from "@mui/material";
// import Line from "../../assets/Line 13.png";
import { makeStyles } from "@mui/styles";

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
export default function BasicTextFields() {
  const styles = useStyles();
  return (
    <Container className={styles.container} sx={{marginTop:5}}>
      <Box sx={{ borderBottom: " 1px solid #ABABB1" }}>
        <Typography gutterBottom variant="h4" component="div" color="white">
          Create
        </Typography>
      </Box>
      <Box
        component="form"
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
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 10, padding: 2 }}
        >
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Imdb Id
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="outline"
          />
          {/* </Grid> */}
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 10, padding: 2 }}
        >
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Title
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="outline"
          />
          {/* </Grid> */}
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 10, padding: 2 }}
        >
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Title
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="outline"
          />
          {/* </Grid> */}
        </Box>
      </Box>
    </Container>
  );
}
