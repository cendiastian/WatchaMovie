import React from "react";
import Nav from "../../components/navbar/navbar";
import Register from "../../components/user/regist";
// import Card from "./components/card/card.jsx";
import Footer from "../../components/footer/footer.jsx";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Nav />
      <Register />
      <Box  sx={{display:'flex', justifyContent:'center', mt:2,}}>
      <Link href="/login" color="#ABABB1" sx={{ textDecoration: "none" }}>
        Already have account?
      </Link>
      </Box>
      <Footer />
    </>
  );
}
