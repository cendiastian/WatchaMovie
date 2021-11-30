import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Video(data) {
    const movie = data.movie
    console.log(movie)
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
      <Box sx={{ borderBottom: " 1px solid #ABABB1", mb: 3 }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          // color="white"
          textAlign="left"
        >
          Movie Title
        </Typography>
      </Box>
      <Grid container spacing={1} justifyContent={"flex-start"} sx={{ gap: 2 }}>
        <Grid item md={3}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            loading="lazy"
            width="218"
            height="233"
          />
        </Grid>
        <Grid item md={6} sx={{ textAlign: "left", width: "100%" }}>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "20%" }}
            >
              Title
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "70%" }}
            >
              : {movie.Title}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "20%" }}
            >
              Released
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "70%" }}
            >
              : {movie.Released}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "20%" }}
            >
              Genre
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "70%" }}
            >
               : {movie.genreByGenre.name}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "20%" }}
            >
              Runtime
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "70%" }}
            >
              : {movie.Runtime}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "20%" }}
            >
              Writer
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "70%" }}
            >
              : {movie.Writer}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "20%" }}
            >
              Plot
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ width: "70%" }}
            >
              : {movie.Plot}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
