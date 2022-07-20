import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Pricing(tier) {
  const id = useSelector((state) => state.user.id);
  const name = useSelector((state) => state.user.name);
  const exp = useSelector((state) => state.user.expired);

  const BuySubs = () => {
    if (exp !== null) {
      console.log("masuk");
      tier.setMessage("You are still Premium");
      tier.setSucces(true);
    }else {
      axios
    .post(
      `https://f13c-110-138-82-117.ap.ngrok.io/invoice/add`,
      {
        user_id:id,
        item: tier.title,
        full_name:name,
        total: tier.price,
        expired:tier.expired,
        payment_terms:1
      },
      {
        headers: { accept: "*/*", "Content-Type": "application/json" },
      }
    )
    .then(function (response) {
      console.log(response);
      window.location.replace(response.data.data.PaymentLink);
      // tier.setSucces(true);
    })
    .catch(function (error) {
    });}

    // if (exp !== null) {
    //   console.log("masuk");
    //   setMessage("You are still Premium");
    //   setSucces(true);
    //   console.log(succes);
    // } else {
    //   updateUser({
    //     variables: {
    //       id: id,
    //       premium: true,
    //       expired: tier.expired,
    //     },
    //   });
    //   setMessage("You are Premium now");
      // setSucces(true);
    // }
    // console.log(moment(tier.expired).valueOf());
    // console.log( Date.parse(tier.expired));
    // console.log( new Date());
  };
  
  return (
    <Grid item key={tier.title} xs={12} md={4}>
      <Card
        sx={{
          borderRadius: 5,
          border: "1px solid #ABABB1",
          backgroundColor: "#212121",
          color: "white",
        }}
      >
        <CardHeader
          title={tier.title}
          titleTypographyProps={{ align: "center" }}
          sx={{
            backgroundColor: "#3E3D3D",
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="white">
              RP.{tier.price}
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="white">
            {tier.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={BuySubs} variant="contained">
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
