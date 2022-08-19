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
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(true);
  const [update, setUpdate] = useState(false);
  const [AllMovie, setAllMovie] = useState([]);
  const [movie, setMovie] = useState(movieData);
  const [id, setId] = useState(0);
  const { CreateMovie  } = useCreateMovie();

  const { updateMovie, loadingUpdate } = useUpdateMovie();
  function validURL(str) {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    return !!regex.test(str);
  }
  const CreateMovieHandler = () => {
    if (movie.Title === "" || movie.Video === ""){
      setMessage("Please input required data")
      setValid(false)
    } else if (movie.Poster) {
      if (!validURL(movie.Poster) && !validURL(movie.Video)){
          setMessage("Video and Poster Value is not Link")
          setValid(false)
      } else if (!validURL(movie.Poster)){
        setMessage("Poster Value is not Link")
        setValid(false)
      } else if (!validURL(movie.Video)) {
        setMessage("Video Value is not Link")
        setValid(false)
      } else {
        CreateMovie({
          variables: {
            object: movie,
          },
        });
        setMovie(movieData);
      }
    } else{
      if (!validURL(movie.Video)) {
        setMessage("Video Value is not Link")
        setValid(false)
      } else {
        CreateMovie({
          variables: {
            object: movie,
          },
        });
        setMovie(movieData);
      }
    }
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
            message={message}
            valid={valid}
            movie={movie}
            setMovie={setMovie}
            update={update}
          />
        </>
      )}
    </>
  );
}
