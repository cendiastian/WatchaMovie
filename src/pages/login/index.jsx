import React from "react";
// import Nav from "../../components/navbar/navbar";
import Login from "../../components/user/login";
// import Card from "./components/card/card.jsx";
// import Footer from "../../components/footer/footer.jsx";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      {/* <Nav /> */}

      <Login />
      <Box  sx={{display:'flex', justifyContent:'center', mt:2,}}>
      <Link href="#" color="#ABABB1" sx={{ textDecoration: "none" }}>
        Or create an account
      </Link>
      </Box>
      {/* <Footer /> */}
    </>
  );
}
