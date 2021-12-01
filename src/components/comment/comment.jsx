// import { Avatar } from "@mui/material";
import { Container, Box, Typography } from "@mui/material";
import React from "react";
// import classes from "./comment.module.css";

function Comment({ author, comment }) {
  return (
    <Box sx={{pt:1,pb:1,}}>
      {/* <div> */}
        <Typography variant="h5" sx={{color:"white"}}>{author}</Typography>
        <Typography variant="subtitle1" sx={{color:"gray"}}>{comment}</Typography>
      {/* </div> */}
    </Box>
  );
}

export default Comment;
