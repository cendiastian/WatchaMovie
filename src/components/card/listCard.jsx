import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "./card";
// import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
// import Line from "../../assets/Line 13.png";
import { useGetAllMovie } from "../../hooks/useGetAllMovie";
import { Link } from "@mui/material";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "fit-content",
    backgroundColor: "#212121",
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
const usedStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "65%",
    backgroundColor: "#212121",
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default function BasicGrid(props) {
  const { allMovie, errorAllMovie, loadingAllMovie } = useGetAllMovie();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (allMovie) {
      console.log(allMovie);
      setMovie(allMovie.moviedb_movie);
    }
  }, [allMovie]);

  let styles = useStyles();
  if (props.length === 8) {
    styles = usedStyles();
  }
  return (
    <Container className={styles.container}>
      <Box sx={{ borderBottom: " 1px solid #ABABB1", mb: 5 }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          textAlign="left"
        >
          Movie
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        columns={props.length}
        // justifyContent={"space-a"}
      >
        {movie.map((data) => (
          <Grid item xs={2} key={data.id}>
            <Link href={`/movie/${data.id}`}>
              <Card title={data.Title} image={data.Poster} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
