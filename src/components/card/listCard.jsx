import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "./card";
// import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 1200,
    backgroundColor: "#212121",
    borderRadius:15,
    paddingBottom: 15,
  },
});

export default function BasicGrid() {
  const styles = useStyles();
  return (
    <Container
      className={styles.container}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        color="white"
        textAlign="left"
      >
        Movie Title
      </Typography>
      <Box>
        <Grid container spacing={1} justifyContent={"space-between"}>
          <Grid item md={2.3}>
            <Card />
          </Grid>
          <Grid item md={2.3}>
            <Card />
          </Grid>
          <Grid item md={2.3}>
            <Card />
          </Grid>
          <Grid item md={2.3}>
            <Card />
          </Grid>
          <Grid item md={2.3}>
            <Card />
          </Grid>
        </Grid>
        
      </Box>
    </Container>
  );
}
