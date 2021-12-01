import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Search from "./searchbar";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Link } from "@mui/material";

export default function PrimarySearchAppBar() {
  const isLogin = useSelector((state) => state.user.isLogin);
  // console.log(props.isLogin)
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar
        position="static"
        sx={{ flexGrow: 1, backgroundColor: "#25274D" }}
      >
        <Toolbar>
          <Grid
            container
            spacing={1}
            columns={12}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={2}>
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                WatchaMovie
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Subscription
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Search />
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                noWrap
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
