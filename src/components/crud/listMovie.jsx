import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Movie from "./movie";
import {  Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { useGetAllMovie } from "../../hooks/useGetAllMovie";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 800,
    backgroundColor: "#212121",
    borderRadius: 15,
    padding: (20, 20, 20, 20),
  },
});

export default function BasicTable(props) {
  const movie = props.movie
  const styles = useStyles();
  return (
    <Container className={styles.container}>
    <Box sx={{borderBottom:' 1px solid #ABABB1'}}>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        color="white"
        textAlign="left"
      >
        Movie
      </Typography>
      </Box>
      {/* <div item xs={1} sm={1}>
        <img src={Line} alt="line" />
      </div> */}
      {/* <TableContainer component={Paper} sx={{ width:'80%', }} > */}
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */} 
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Runtime</TableCell>
              <TableCell align="center">imdbID</TableCell>
              <TableCell align="center" colSpan={2}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movie.map((movie) => (
              <Movie setId={props.setId}updateMode={props.setUpdate} setMovie={props.setMovie} movie={movie} />
            ))}
          </TableBody>
        </Table>
    </Container>
  );
}
