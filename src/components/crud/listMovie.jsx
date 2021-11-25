// import ListItem from "./ListItem";
// const ListPassenger = (props) => {
//   if (props.data.length === 0) {
//     return <p>Not Found</p>;
//   }
//   return (
//     <div>
//       <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
//         <thead bgcolor="red">

//         </thead>
//         <tbody>
//           {props.data.map((item) => (
//             <ListItem
//               key={item.id}
//               data={item}
//               onEdit={props.onEdit}
//               hapusPengunjung={props.onDelete}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListPassenger;

// import "./Home.css";
// const ListItem = (props) => {
//   const { id, nama, umur, jenis_kelamin } = props.data;
//   const editHandler = () => {
//     props.onEdit({
//       nama,
//       umur,
//       jenis_kelamin,
//       id,
//     });
//   };
//   return (
//     <tr>
//       <td>{nama}</td>
//       <td>{umur}</td>
//       <td>{jenis_kelamin}</td>
//       <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
//         <button>Hapus</button>
//       </td>
//       <td className="removeBorder" onClick={editHandler}>
//         <button>Edit</button>
//       </td>
//     </tr>
//   );
// };

// export default ListItem

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Movie from "./movie";
import { Button, Container, Typography } from "@mui/material";
import Line from "../../assets/Line 13.png";
import { makeStyles } from "@mui/styles";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {
    index: 1,
    title: "Arcu dui blandit.",
    // image:  Img ,
  },
  {
    index: 2,
    title: "Arcu dui blandit.",
    // image:  Img ,
  },
  {
    index: 3,
    title: "Arcu dui blandit.",
    // image:  Img ,
  },
  {
    index: 4,
    title: "Arcu dui blandit.",
    // image:  Img ,
  },
  {
    index: 5,
    title: "Arcu dui blandit.",
    // image:  Img ,
  },
];

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

export default function BasicTable() {
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
              <TableCell align="center">Duration</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center" colSpan={2}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Movie title={row.title} duration={row.title} size={row.title} />
            ))}
            {/* <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            > */}
            {/* </TableRow> */}
          </TableBody>
              <Button variant="contained" color='primary'>New Movie</Button>
        </Table>
      {/* </TableContainer> */}
    </Container>
  );
}
