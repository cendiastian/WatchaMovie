import React from "react";
import Nav from "../../components/navbar/navbar"
import CRUD from "../../components/crud/listMovie"
import Form from "../../components/crud/form"
// import Card from "./components/card/card.jsx";
import Footer from "../../components/footer/footer.jsx";
export default function Home() {
    return (
      <>
        <Nav />
        <CRUD/>
        <Form/>
        <Footer/>
      </>
    );
  }