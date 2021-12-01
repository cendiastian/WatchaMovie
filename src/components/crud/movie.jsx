import * as React from "react";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell from "@mui/material/TableCell";
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { useDeleteMovie } from "../../hooks/useDeleteMovie";

export default function BasicTable(props) {
  const movie = props.movie
  const { deleteMovie, loadingDelete } = useDeleteMovie();
  const UpdateMode = () => {
    console.log(movie.Genre.id)
    props.setId(movie.id)
    props.setMovie({
      Title: movie.Title,
      Released: movie.Released,
      Writer: movie.Writer,
      Plot: movie.Plot,
      Poster: movie.Poster,
      imdbID: movie.imdbID,
      Genre: movie.Genre,
      Runtime: movie.Runtime,
      Video: movie.Video,
    })
    props.updateMode(true)
  }
  const DeleteHandler = () => {
    console.log("Create genre");
    deleteMovie({
      variables: {
        id: movie.id,
      },
    })
  };
  return (
    <TableRow
      key={movie.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {movie.Title}
      </TableCell>
      <TableCell align="center">{movie.Runtime}</TableCell>
      <TableCell align="center">{movie.imdbID}</TableCell>
      <TableCell align="center">
        <Button variant="contained" onClick={UpdateMode}>Update</Button>
      </TableCell>
      <TableCell align="center">
        <Button variant="contained" onClick={DeleteHandler} color="danger">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
