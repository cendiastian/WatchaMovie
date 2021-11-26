import React from "react";
import Nav from "../../components/navbar/navbar"
import Banner from "../../components/banner/banner"
import ListCard from "../../components/card/listCard"
// import Card from "./components/card/card.jsx";
import Footer from "../../components/footer/footer.jsx";
export default function Home() {
    return (
      <>
        <Nav />
        <Banner/>
        <ListCard length={10}/>
        <Footer/>
      </>
    );
  }