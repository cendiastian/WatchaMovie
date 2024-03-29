import React, { useState, useEffect } from "react";
import Video from "../../components/video/video";
import Detail from "../../components/detail/detail";
import ListCard from "../../components/card/listCard";
import ListComment from "../../components/comment/listComment";
import { useParams } from "react-router-dom";
import useGetMovie from "../../hooks/useGetMovie";
import useGetMovieByLimit from "../../hooks/useGetMovieByLimit";
import { CircularProgress, Box } from "@mui/material";

export default function Movie() {
  const { id } = useParams();
  const { MovieById, errorMovieById, loadingMovieById } = useGetMovie(Number(id));
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (MovieById) {
      console.log(MovieById.moviedb_movie_by_pk);
      setMovie(MovieById.moviedb_movie_by_pk);
    }
  }, [MovieById]);

  const { MovieByLimit, errorMovieByLimit, loadingMovieByLimit } = useGetMovieByLimit();

  const [movieByLimit, setMovieByLimit] = useState([]);

  useEffect(() => {
    if (MovieByLimit) {
      console.log(MovieByLimit);
      setMovieByLimit(MovieByLimit.moviedb_movie);
    }
  }, [MovieByLimit]);

  const isError = errorMovieById ||
  errorMovieByLimit;

  const isLoading = loadingMovieById ||
  loadingMovieByLimit;
  return (
    <>
      {isError && (<><Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}><p>Something is Wrong</p></Box>
        </>)
      }
      {!isLoading && (
        <Box sx={{display: 'flex', flexDirection:'column', gap:'5vh'}}>
          <Video video={movie.Video} title={movie.Title}/>
          <Detail movie={movie} />
          <ListCard length={8} movie={movieByLimit}/>
        </Box>
      )}
      {isLoading && (
        <>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            style={{ width: "200px", height: "200px", color: "#white" }}
          />
        </Box>
        </>
      )}
    </>
  );
}
