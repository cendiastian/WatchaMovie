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
// import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { useGetAllGenre } from "../../hooks/useGetAllGenre";

export default function BasicTextFields() {
//     const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const ClickHandler = (e) => {
//       console.log("masuk" + e.target.name + e.target.value)
//     if (e.target.name === "order") {
//         console.log("masuk order")
//       navigate({
//         pathname: "/search",
//         order: `?${createSearchParams(e.target.value)}`,
//       });
//     } else {
//         console.log("masuk genre")
//       navigate({
//         pathname: "/search",
//         genre: `?${createSearchParams(e.target.value)}`,
//       });
//     }
//   };
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
        <Link href={`/order/asc`}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="button"
          sx={{background:"none", border:"none",}}
          color="white"
          name="order"
          value="oldest"
        //   onClick={ClickHandler}
        >
          Oldest 
        </Typography>
        </Link>
        <Link href={`/order/desc`}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="button"
          sx={{background:"none", border:"none",}}
          color="white"
          name="order"
          value="newest"
        //   onClick={ClickHandler}
        >
          Newest
        </Typography>
        </Link>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", pt: 2 }}
      >
        <Typography gutterBottom variant="h6" component="div" color="white">
          Genre
        </Typography>
        {genreDB.map((genre) => (
            <Link href={`/filter/${genre.id}`}>
          <Typography
            key={genre.id}
            gutterBottom
            variant="subtitle1"
            component="button"
            sx={{background:"none", border:"none",}}
            color="white"
            name="genre"
            value={genre.name}
            // onClick={ClickHandler}
          >
            {genre.name}
          </Typography>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
