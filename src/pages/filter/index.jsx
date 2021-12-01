import React, { useState, useEffect } from "react";
import Filter from "../../components/sidebar/filter";
import ListCard from "../../components/card/listCard";
import useGetMovieByGenre from "../../hooks/useGetMovieByGenre";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function FilterPage( ) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const { MovieByGenre  } = useGetMovieByGenre(Number(id));
  
  useEffect(() => {
    if (MovieByGenre) {
      console.log(MovieByGenre);
      setMovie(MovieByGenre.moviedb_movie);
    }
  }, [MovieByGenre]);
  return (
    <>
      <Box sx={{ display: "flex", width: "95%", alignContent: 'flex-start',  }}>
        <Filter />
        <ListCard length={10} movie={movie} />
      </Box>
    </>
  );
}
