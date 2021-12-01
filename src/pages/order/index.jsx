import React, { useState, useEffect } from "react";
import Filter from "../../components/sidebar/filter";
import ListCard from "../../components/card/listCard";
import { useGetMovieByOrderDesc } from "../../hooks/useGetMovieByOrderDesc";
import { useGetMovieByOrderAsc } from "../../hooks/useGetMovieByOrderAsc";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function OrderPage( ) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  console.log( id )

    const { MovieByOrderAsc  } = useGetMovieByOrderAsc(id);
    const { MovieByOrderDesc  } = useGetMovieByOrderDesc(id);
  
  useEffect(() => {
    if (MovieByOrderAsc && id === "asc") {
      console.log(MovieByOrderAsc);
      setMovie(MovieByOrderAsc.moviedb_movie);
    }
  }, [MovieByOrderAsc, id]);
  useEffect(() => {
    if (MovieByOrderDesc && id === "desc") {
      console.log(MovieByOrderDesc);
      setMovie(MovieByOrderDesc.moviedb_movie);
    }
  }, [MovieByOrderDesc, id]);

  return (
    <>
      <Box sx={{ display: "flex", width: "95%", alignContent: 'flex-start',  }}>
        <Filter />
        <ListCard length={10} movie={movie}/>
      </Box>
    </>
  );
}
