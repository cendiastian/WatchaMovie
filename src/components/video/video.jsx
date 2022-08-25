import React from "react";
// import ReactPlayer from "react-player/youtube";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import styles from "./styles.module.css";
export default function Video(props) {
  console.log(props.video);
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
          {props.title}
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
        <iframe
          title="Movie"
          src={`${props.video}`}
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          scrolling="NO"
          width="800px"
          height="450px"
          allowFullScreen="true"
        />
      </Box>
    </Container>
  );
}
