import React, { useState, useEffect } from "react";
import Filter from "../../components/sidebar/filter";
import ListCard from "../../components/card/listCard";
import useGetMovieByTitle from "../../hooks/useGetMovieByTitle";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Search() {
  const { title } = useParams();
  console.log(title);
  const { MovieByTitle } =
    useGetMovieByTitle("%" + title + "%");
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (MovieByTitle) {
      console.log(MovieByTitle);
      setMovie(MovieByTitle.moviedb_movie);
    }
  }, [MovieByTitle]);

  // if (errorMovieByTitle){
  //   return 
  // }

  return (
    <>
      <Box sx={{ display: "flex", width: "95%", alignContent: "flex-start" }}>
        <Filter />
        <ListCard length={10} movie={movie} />
      </Box>
    </>
  );
}
