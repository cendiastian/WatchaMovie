import React from "react";
import Profil from "../../components/user/profil";
import SideBar from "../../components/sidebar/user";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";

export default function Home() {
    const user = useSelector((state) => state.persistedReducer.user);
    return (
    <>
      {/* <Nav /> */}
      <Container
        sx={{ display: "flex", justifyContent: "space-between", ml: 5, mr: 5 }}
      >
        <SideBar />
        <Profil data={user}/>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
