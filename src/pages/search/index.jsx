import React from "react";
// import Nav from "../../components/navbar/navbar";
import Filter from "../../components/sidebar/filter";
import ListCard from "../../components/card/listCard";
// import Card from "./components/card/card.jsx";
// import Footer from "../../components/footer/footer.jsx";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <Box sx={{ display: "flex", width: "95%", alignContent: 'flex-start',  }}>
        <Filter />
        <ListCard length={10} />
      </Box>
      {/* <Footer /> */}
    </>
  );
}
