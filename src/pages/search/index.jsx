import React, { useState, useEffect } from "react";
import Filter from "../../components/sidebar/filter";
import ListCard from "../../components/card/listCard";
import useGetMovieByCond from "../../hooks/useGetMovieByCond";
import { Box } from "@mui/material";
import { useSearchParams,useParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const { title } = useParams();
  const genre = searchParams.get("genre")
  let order = searchParams.get("order")
  console.log(order)
  if (order === null) {
    order = "desc"
  }
  // console.log(title);
  const { MovieByCond, errorMovieByCond} =
  useGetMovieByCond(title,genre,order);
  const [movie, setMovie] = useState([]);
console.log(errorMovieByCond)
  useEffect(() => {
    if (MovieByCond) {
      console.log(MovieByCond);
      setMovie(MovieByCond.moviedb_movie);
    }
  }, [MovieByCond]);

  // if (errorMovieByTitle){
  //   return 
  // }

  return (
    <>
      <Box sx={{ display: "flex", width: "95%", alignContent: "flex-start" }}>
        <Filter title={title}/>
        <ListCard length={10} movie={movie} />
      </Box>
    </>
  );
}
