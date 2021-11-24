import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Carousel from "./carousel.jsx";
import Box from '@mui/material/Box';

export default function SimpleContainer() {
  return (
      <Container sx={{display:"flex", justifyContent:"center"}}>
      <Box sx={{width:"1200px" }}>
      <Carousel />
      </Box>
      </Container>
  );
}