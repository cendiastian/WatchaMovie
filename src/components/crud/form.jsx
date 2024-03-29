import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Typography,
  Container,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Alert,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// import Line from "../../assets/Line 13.png";
import { makeStyles } from "@mui/styles";
import { useCreateGenre } from "../../hooks/useCreateGenre";
import { useGetAllGenre } from "../../hooks/useGetAllGenre";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    width: "65%",
    backgroundColor: "#212121",
    borderRadius: 15,
    padding: (20, 20, 20, 20),
  },
});

export default function BasicTextFields(props) {
  const movie = props.movie;
  const styles = useStyles();
  const [genre, setGenre] = useState("");
  const [genreDB, setGenreDB] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [AddGenre, setAddGenre] = useState(false);
  const { CreateGenre, loadingCreateGenre } = useCreateGenre();
  const { allGenre } = useGetAllGenre();

  useEffect(() => {
    if (allGenre) {
      setGenreDB(allGenre.moviedb_genre);
    }
  }, [allGenre]);

  if (loadingCreateGenre) {
    setIsLoading(true);
  }
  //   const CreateMovieHandler = () => {
  //     props.CreateMovieHandler
  //   }
  const onChange = (e) => {
    console.log(e.target.name + " " + e.target.value);

    if (e.target.name === "newgenre") {
      setGenre(e.target.value);
    } else {
      props.setMovie({
        ...props.movie,
        [e.target.name]: e.target.value,
      });
    }
  };
  const NewGenre = () => {
    console.log("masuk genre");
    setAddGenre(!AddGenre);
  };
  const CreateGenreHandler = () => {
    console.log("Create genre");
    CreateGenre({
      variables: {
        name: genre,
      },
    });
    setGenre("");
  };

  return (
    <Container className={styles.container} sx={{ marginTop: 5 }}>
      <Box sx={{ borderBottom: " 1px solid #ABABB1" }}>
        {!props.update && (
          <Typography gutterBottom variant="h4" component="div" color="white">
            Create
          </Typography>
        )}
        {props.update && (
          <Typography gutterBottom variant="h4" component="div" color="white">
            Update
          </Typography>
        )}
      </Box>
      <FormControl
        component="form"
        sx={{
          //   "& > :not(style)": { m: 1, width: "50%" },
          width: "80%",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          //   textAlign:'right',
        }}
        noValidate
        autoComplete="off"
      >
        {/* <Grid container rowSpacing={2}> */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Imdb Id
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="imdbID"
            id="outlined-basic"
            
            value={movie.imdbID}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
          {/* </Grid> */}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Title
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="Title"
            id="outlined-required"
            required
            label="Required"
            value={movie.Title}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
          {/* </Grid> */}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Genre
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <FormControl sx={{ width: "50%" }}>
            <InputLabel id="genre" color="outline">
              Genre
            </InputLabel>
            <Select
              variant="outlined"
              color="outline"
              labelId="genre"
              name="Genre"
              id="outlined-basic"
              value={movie.Genre}
              label="Genre"
              onChange={onChange}
              // color="outline"
            >
              {genreDB.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={NewGenre} variant="contained">
            Add
          </Button>
        </Box>
        {AddGenre && (
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}
          >
            {/* <Grid item xs={3}> */}
            <Box sx={{ width: "20%" }}>
              <Typography gutterBottom variant="h6" component="p" color="white">
                New Genre
              </Typography>
            </Box>
            {/* </Grid> */}
            {/* <Grid item xs={7}> */}
            <TextField
              sx={{ width: "50%" }}
              name="newgenre"
              id="outlined-basic"
              
              value={genre}
              onChange={onChange}
              variant="outlined"
              color="outline"
            />
            {isLoading && (
              <LoadingButton onClick={CreateGenreHandler} variant="contained">
                Create
              </LoadingButton>
            )}
            {!isLoading && (
              <Button onClick={CreateGenreHandler} variant="contained">
                Create
              </Button>
            )}
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Released
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="Released"
            id="outlined-basic"
            
            value={movie.Released}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
          {/* </Grid> */}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Writer
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="Writer"
            id="outlined-basic"
            
            value={movie.Writer}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Plot
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="Plot"
            id="outlined-basic"
            
            value={movie.Plot}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Runtime
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="Runtime"
            id="outlined-basic"
            
            value={movie.Runtime}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Poster
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="Poster"
            type="url"
            id="outlined-basic"
            
            value={movie.Poster}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, padding: 2 }}>
          {/* <Grid item xs={3}> */}
          <Box sx={{ width: "20%" }}>
            <Typography gutterBottom variant="h6" component="p" color="white">
              Video
            </Typography>
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={7}> */}
          <TextField
            sx={{ width: "50%" }}
            name="Video"
            type="url"
            id="outlined-required"
            required
            label="Required"
            
            value={movie.Video}
            onChange={onChange}
            variant="outlined"
            color="outline"
          />
        </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-start", gap: 5, padding: 1 }}
          >
        {!props.update && (<>

            {isLoading && (
              <LoadingButton variant="contained" sx={{ width: "20%" }}>
                Create
              </LoadingButton>
            )}
            {!isLoading && (
              <Button
                onClick={props.CreateMovie}
                variant="contained"
                sx={{ width: "20%" }}
              >
                Create
              </Button>
            )}
        </>
        )}
        {props.update && (
          <>
            {isLoading && (
              <LoadingButton variant="contained" sx={{ width: "20%" }}>
                Update
              </LoadingButton>
            )}
            {!isLoading && (
              <Button
                onClick={props.UpdateMovie}
                variant="contained"
                sx={{ width: "20%" }}
              >
                Update
              </Button>
            )}
          </>
        )}
            {!props.valid && (
              <Alert variant="standard" severity="error">
            {props.message}
          </Alert>)}
          </Box>
      </FormControl>
    </Container>
  );
}
