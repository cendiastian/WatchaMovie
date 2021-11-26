import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Line from "../../assets/Line 14.png";
import Poster from "../../assets/unsplash_wMkaMXTJjlQ.png";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import styles from "./styles.module.css";
export default function Video(props) {
  return (
    <Container
      sx={{
        backgroundColor: "#212121",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "65%",
        padding: (5, 5, 5, 5),
        borderRadius: 5,
        color: "white",
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        // color="white"
        textAlign="left"
      >
        Movie Title
      </Typography>
      <div item xs={1} sm={1}>
        <img src={Line} alt="line" />
      </div>
      <Grid container spacing={1} justifyContent={"flex-start"} sx={{ gap: 2 }}>
        <Grid item md={3}>
          <img src={Poster} alt="line" loading="lazy" />
        </Grid>
        <Grid item md={6} sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="subtitle1" component="div">
            Title: {props.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Released: {props.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Rating: {props.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Writer: {props.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Genre: {props.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Plot: {props.title}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
