import { Container, Grid, Typography } from "@mui/material";
import React from "react";
// import Nav from "../../components/navbar/navbar"
import Pricing from "../../components/pricing/pricing";
// import Card from "./components/card/card.jsx";
// import Footer from "../../components/footer/footer.jsx";
import moment from 'moment'


const tiers = [
  {
    title: "1 Day",
    price: "10.000",
    description: ["Mendapat akses untuk menonton film selama 1 hari"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    expired: moment().add(1, 'd'),
  },
  {
    title: "2 Day",
    //   subheader: 'Most popular',
    price: "20.000",
    description: ["Mendapat akses untuk menonton film selama 2 hari"],
    buttonText: "Get started",
    buttonVariant: "contained",
    expired: moment().add(2, 'd'),
  },
  {
    title: "3 Day",
    price: "30.000",
    description: ["Mendapat akses untuk menonton film selama 3 hari"],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    expired: moment().add(3, 'd'),
  },
];

export default function Home() {
  console.log(tiers);
  return (
    <>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          Subscription
        </Typography>
        <Typography variant="h5" align="center" color="white" component="p">
          Here is the list of subscription plan that can you buy
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((data) => (
            <Pricing
              title={data.title}
              price={data.price}
              description={data.description}
              buttonText={data.buttonText}
              buttonVariant={data.buttonVariant}
              expired={data.expired}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
