import React, { useState, useEffect } from "react";
import { useGetAllMovie } from "../../hooks/useGetAllMovie";
import { useUpdateMovie } from "../../hooks/useUpdateMovie";
import { useCreateMovie } from "../../hooks/useCreateMovie";
import ListMovie from "../../components/crud/listMovie";
import Form from "../../components/crud/form";
import { CircularProgress, Box } from "@mui/material";

const movieData = {
  Title: "",
  Released: "",
  Writer: "",
  Plot: "",
  Poster: "",
  imdbID: "",
  Genre: "",
  Runtime: "",
  Video: "",
};

export default function Admin() {
  const { allMovie, loadingAllMovie } = useGetAllMovie();
  const [update, setUpdate] = useState(false);
  const [AllMovie, setAllMovie] = useState([]);
  const [movie, setMovie] = useState(movieData);
  const [id, setId] = useState(0);
  const { CreateMovie  } = useCreateMovie();

  const { updateMovie, loadingUpdate } = useUpdateMovie();

  const CreateMovieHandler = () => {
    console.log("Create Movie");
    CreateMovie({
      variables: {
        object: movie,
      },
    });
    setMovie(movieData);
  };
  useEffect(() => {
    if (allMovie) {
      console.log(allMovie);
      setAllMovie(allMovie.moviedb_movie);
    }
  }, [allMovie]);

  const updateHandler = () => {
    updateMovie({
      variables: {
        id: id,
        Title: movie.Title,
        Released: movie.Released,
        Writer: movie.Writer,
        Plot: movie.Plot,
        Poster: movie.Poster,
        imdbID: movie.imdbID,
        Genre: movie.Genre,
        Runtime: movie.Runtime,
        Video: movie.Video,
      },
    });
    setMovie(movieData);
  };

  //   const isError = errorAllMovie;
  const isLoading = loadingAllMovie || loadingUpdate;
  return (
    <>
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
      {!isLoading && (
        <>
          <ListMovie
            movie={AllMovie}
            setMovie={setMovie}
            setUpdate={setUpdate}
            setId={setId}
          />
          <Form
            CreateMovie={CreateMovieHandler}
            UpdateMovie={updateHandler}
            // allGenre={genreDB}
            movie={movie}
            setMovie={setMovie}
            update={update}
          />
        </>
      )}
    </>
  );
}
