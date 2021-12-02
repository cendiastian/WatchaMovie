import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Search from "./searchbar";
import { useSelector } from "react-redux";
import { Container, Link } from "@mui/material";

export default function Nav() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar
        position="static"
        sx={{ flexGrow: 1, backgroundColor: "#25274D" }}
      >
        <Toolbar>
          <Container
            container
            spacing={1}
            columns={12}
            sx={{ alignItems: "center", display: "flex", flexWrap:"nowarp" }}
          >
            <Box sx={{ alignItems: "center", display: "flex", flexWrap:"nowarp", columnGap:2 }}>
            {/* <Grid item xs={2}> */}
            <Box sx={{width:"80%"}}>
              <Link href="/" sx={{ color: "#ffff", textDecoration: "none" }}>
                <Typography
                  variant="h4"
                  // noWrap
                  component="div"
                  // sx={{ display: { xs: "none", sm: "block" } }}
                >
                  WatchaMovie
                </Typography>
              </Link>
              </Box>
            {/* </Grid> */}
            {/* </Box> */}
            {/* <Box> */}
            {/* <Grid item xs={1}> */}
            <Box sx={{width:"80%"}}>
              <Link href="/pricing" sx={{ color: "#ffff", textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  // noWrap
                  component="div"
                  // sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Subscription
                </Typography>
              </Link>
              </Box>
            {/* </Grid> */}
            </Box>
            <Box sx={{width:"30%",}}>
            {/* <Grid item xs={3}> */}
              <Search />
            {/* </Grid> */}
            </Box>
          </Container>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display:"flex"}}>
            {isLogin && (
              <Link
                href="/user"
                sx={{ color: "#ffff", textDecoration: "none" }}
              >
                <AccountCircle />
              </Link>
            )}
            {!isLogin && (
              <Link
                variant="h6"
                // noWrap
                component="a"
                // color="primary.typography"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    color: "#ffff",
                    textDecoration: "none",
                  },
                }}
                href="/login"
              >
                Login
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
