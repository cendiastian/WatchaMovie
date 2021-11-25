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

import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

export default function BasicTable(row) {
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
          // {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.duration}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">                  
              <Button variant="contained">
                Update
              </Button>
              </TableCell>
              <TableCell align="center">
              <Button variant="contained" color="danger">
                Delete
              </Button>
              </TableCell>
            </TableRow>
          // ))}
        /* </TableBody>
      </Table>
    </TableContainer> */
  );
}
