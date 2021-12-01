import React, { useState, useEffect } from "react";
import Filter from "../../components/sidebar/filter";
import ListCard from "../../components/card/listCard";
import useGetMovieByGenre from "../../hooks/useGetMovieByGenre";
// import {useGetMovieByOrderAsc , useGetMovieByOrderDesc} from "../../hooks/useGetMovieByOrder";
// import { useGetAllMovie } from "../../hooks/useGetAllMovie";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function FilterPage( ) {
  const { id } = useParams();
  // const [order, setOrder] = useState("");
  // const [genre, setGenre] = useState(0);
  const [movie, setMovie] = useState([]);
  // if (Number(id) === Number.Nan){
    // setOrder(id)
  // } else {
    // setGenre(Number(id))
  // }
  const { MovieByGenre  } = useGetMovieByGenre(Number(id));
  // const { allMovie, errorAllMovie, loadingAllMovie } = useGetAllMovie();
  
  useEffect(() => {
    if (MovieByGenre) {
      console.log(MovieByGenre);
      setMovie(MovieByGenre.moviedb_movie);
    }
  }, [MovieByGenre]);

  // useEffect(() => {
  //   if (order) {
  //     console.log(allMovie);
  //     setMovie(allMovie.moviedb_movie);
  //   }
  // }, [order]);

  return (
    <>
      {/* <Nav /> */}
      <Box sx={{ display: "flex", width: "95%", alignContent: 'flex-start',  }}>
        <Filter />
        <ListCard length={10} movie={movie} />
      </Box>
      {/* <Footer /> */}
    </>
  );
}
