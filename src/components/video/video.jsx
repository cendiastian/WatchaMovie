import React from "react";
// import ReactPlayer from "react-player/youtube";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Line from "../../assets/Line 14.png";
import Box from "@mui/material/Box";
// import styles from "./styles.module.css";
export default function Video() {
  return (
    <Container
      sx={{
        backgroundColor: "#212121",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "65%",
        padding: (5, 5, 5, 5),
        borderRadius:5,
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        color="white"
        textAlign="left"
      >
        Movie Title
      </Typography>
      <div item xs={1} sm={1}>
        <img src={Line} alt="line" />
      </div>
      <Box
        sx={{
        //   width: "fit-content",
          display: "flex",
          justifyContent: "center",
        //   left:
        // paddingLeft: 10,
        paddingTop: 5,
        }}
      >
        {/* <ReactPlayer
        //   className={styles.player}
          url="https://youtu.be/lVih1fcaxNc"
          width='800px'
          height='450px'
        /> */}
                <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/Tqy_JTeNEY4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Container>
  );
}
