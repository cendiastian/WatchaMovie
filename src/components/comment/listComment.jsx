import React from "react";
import Comment from "./comment";
import { Container, Typography } from "@mui/material";

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
  if (dummyComments.length === 0) return <p>No comment yet.</p>;
  return (
    <Container
      sx={{
        width: "fit-content",
        padding: (5, 5, 5, 5),
        borderRadius: 5,
        color: "white",
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        // color="white"
        textAlign="left"
      >
        Comments
      </Typography>
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
