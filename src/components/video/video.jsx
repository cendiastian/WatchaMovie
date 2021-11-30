import React from "react";
// import ReactPlayer from "react-player/youtube";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Line from "../../assets/Line 14.png";
import Box from "@mui/material/Box";
// import styles from "./styles.module.css";
export default function Video(props) {
    console.log(props.movie.Video);
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
      }}
    >
      <Box sx={{ borderBottom: " 1px solid #ABABB1" }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          textAlign="left"
        >
          Movie Title
        </Typography>
      </Box>
      {/* <div item xs={1} sm={1}>
        <img src={Line} alt="line" />
      </div> */}
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
        <iframe title="Movie" src={`${props.movie.Video}`} FRAMEBORDER='0' MARGINWIDTH='0' MARGINHEIGHT='0' SCROLLING='NO' WIDTH="800px" HEIGHT="450px" allowfullscreen="true"/>
      </Box>
    </Container>
  );
}
