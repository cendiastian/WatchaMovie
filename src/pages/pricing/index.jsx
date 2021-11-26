import React from "react";
import Nav from "../../components/navbar/navbar"
import Pricing from "../../components/pricing/pricing"
// import Card from "./components/card/card.jsx";
import Footer from "../../components/footer/footer.jsx";
export default function Home() {
    return (
      <>
        <Nav />
        <Pricing/>
        <Footer/>
      </>
    );
  }