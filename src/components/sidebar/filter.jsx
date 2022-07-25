import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Container,
//   FormControl,
//   RadioGroup,
//   Radio,
} from "@mui/material";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "@mui/material";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { useGetAllGenre } from "../../hooks/useGetAllGenre";

export default function BasicTextFields() {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState("");
  const [genre, setGenre] = useState("");
  let params = {
    title: searchParams.get("title"),
    order: order,
    genre: genre,
  };
  const navigate = useNavigate();
  const ClickHandler = (e) => {
      console.log("masuk" + e.target.name + e.target.value)
    if (e.target.name === "order") {
      setOrder(e.target.value)
    } else {
      setGenre(e.target.value)
    }
    navigate({
    pathname: "/search",
    search: `?${createSearchParams(params)}`,
    });
  };
  const [genreDB, setGenreDB] = useState([]);

  const { allGenre, errorAllGenre, loadingAllGenre } = useGetAllGenre();

  useEffect(() => {
    if (allGenre) {
      setGenreDB(allGenre.moviedb_genre);
    }
  }, [allGenre]);

  return (
    <Container
      sx={{
        width: "12.5%",
        padding: 2,
        bgcolor: "#212121",
        borderRadius: 5,
        height: "fit-content",
      }}
    >
      <Box sx={{ borderBottom: " 1px solid #ABABB1" }}>
        <Typography gutterBottom variant="h4" component="div" color="white">
          Filter
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: 2,
          borderBottom: " 1px solid #ABABB1",
        }}
      >
        <Typography gutterBottom variant="h6" component="div" color="white">
          Order
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="button"
          sx={{background:"none", border:"none",}}
          color="white"
          name="order"
          value="desc"
          onClick={ClickHandler}
        >
          Oldest 
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="button"
          sx={{background:"none", border:"none",}}
          color="white"
          name="order"
          value="asc"
          onClick={ClickHandler}
        >
          Newest
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", pt: 2 }}
      >
        <Typography gutterBottom variant="h6" component="div" color="white">
          Genre
        </Typography>
        {genreDB.map((genre) => (
          <Typography
            key={genre.id}
            gutterBottom
            variant="subtitle1"
            component="button"
            sx={{background:"none", border:"none",}}
            color="white"
            name="genre"
            value={genre.id}
            onClick={ClickHandler}
          >
            {genre.name}
          </Typography>
        ))}
      </Box>
    </Container>
  );
}
