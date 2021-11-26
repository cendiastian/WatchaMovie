import React from "react";
import Nav from "../../components/navbar/navbar";
import Profil from "../../components/user/profil";
import SideBar from "../../components/sidebar/user";
// import Card from "./components/card/card.jsx";
import Footer from "../../components/footer/footer.jsx";
// import Link from "@mui/material/Link";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Nav />
      <Container
        sx={{ display: "flex", justifyContent: "space-between", ml: 5, mr: 5 }}
      >
        <SideBar />
        <Profil />
      </Container>
      <Footer />
    </>
  );
}
