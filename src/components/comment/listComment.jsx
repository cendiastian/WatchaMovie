import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import Comment from "./comment";
import Form from "./form";

const dummyComments = [
  {
    id: 1,
    userid: "test",
    author: "Budi",
    comment:
      "i think there is another shorter way, just set  width of the inner witdth and apply margin auto for all of the side (top, right, bottom, left).",
  },
  {
    id: 2,
    userid: "test",
    author: "Andi",
    comment: "That is very clear answer.",
  },
];

function CommentList({ comments }) {
    const [isComment, setComment] = useState(false)

  if (dummyComments.length === 0)
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
        <Box sx={{ borderBottom: " 1px solid #ABABB1", mb: 3 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color="white"
            textAlign="left"
          >
            Comments
          </Typography>
        </Box>
        <Form />
        <Typography variant="h4" component="div" color="white">
          No comment yet.
        </Typography>
        ;
      </Container>
    );
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
      <Box sx={{ borderBottom: " 1px solid #ABABB1", mb: 3 }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          textAlign="left"
        >
          Comments
        </Typography>
      </Box>
      <Form />
      {dummyComments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            userid={comment.userid}
            author={comment.author}
            comment={comment.comment}
          />
        );
      })}
    </Container>
  );
}

export default CommentList;
