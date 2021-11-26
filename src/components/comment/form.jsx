import { CircularProgress } from "@mui/material";
import React, { useRef } from "react";
import Button from "@mui/material/Button";
import classes from "./form.module.css";

function CommentForm({ onCancel, onSubmit, error, loading }) {
  const commentRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(commentRef.current.value);
    commentRef.current.value = "";
  };

  return (
    <div className={classes.contain}>
      <form onSubmit={submitHandler}>
        <textarea
          ref={commentRef}
          placeholder="Type your comment here"
        ></textarea>
        {error && <p>Something went wrong...</p>}
        {loading && (
          <div className={classes.spinnerContain}>
            <CircularProgress className={classes.spinner} />
          </div>
        )}
        {!loading && (
          <div className={classes.btnWrapper}>
            <Button onClick={onCancel} variant="contained" color="error">
              Cancel
            </Button>
            <Button variant="contained" >Submit</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CommentForm;