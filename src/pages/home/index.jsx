import React, { useState, useEffect} from "react";
// import Nav from "../../components/navbar/navbar"
import Banner from "../../components/banner/banner"
import ListCard from "../../components/card/listCard"
import { useGetAllMovie } from "../../hooks/useGetAllMovie";

export default function Home() {
  const { allMovie  } = useGetAllMovie();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (allMovie) {
      console.log(allMovie);
      setMovie(allMovie.moviedb_movie);
    }
  }, [allMovie]);
    return (
      <>
        {/* <Nav /> */}
        <Banner/>
        <ListCard movie ={movie} length={10}/>
        {/* <Footer/> */}
      </>
    );
  }