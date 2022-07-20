import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
// import Nav from "../../components/navbar/navbar"
import Pricing from "../../components/pricing/pricing";
// import Card from "./components/card/card.jsx";
// import Footer from "../../components/footer/footer.jsx";
import moment from 'moment'
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import {  useNavigate  } from "react-router-dom";


const tiers = [
  {
    title: "1 Day",
    price: 10000,
    description: ["Mendapat akses untuk menonton film selama 1 hari"],
    // buttonText: "Sign up for free",
    buttonVariant: "outlined",
    expired: 1,
  },
  {
    title: "10 Day",
    //   subheader: 'Most popular',
    price: 100000,
    description: ["Mendapat akses untuk menonton film selama 10 hari"],
    // buttonText: "Get started",
    buttonVariant: "contained",
    expired: 10,
  },
  {
    title: "30 Day",
    price: 300000,
    description: ["Mendapat akses untuk menonton film selama 30 hari"],
    // buttonText: "Contact us",
    buttonVariant: "outlined",
    expired: 30,
  },
];

export default function Home() {
  const [searchParams] = useSearchParams();
  const [succes, setSucces] = useState(false);
  const [message, setMessage] = useState("");
  const id = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const order_id = searchParams.get("order_id")
  const { updateUser } = useUpdateUser();
  const handeleClose = () => {
    setSucces(false);
    navigate('/');
  };
  useEffect(() => {
    if (order_id){ 
      axios
      .get(
        `https://f13c-110-138-82-117.ap.ngrok.io/invoice/?id=${order_id}&user_id=${id}`,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        updateUser({
          variables: {
            id: id,
            premium: true,
            expired: moment().add(response.data.data.Expired, 'd'),
          },
        });
        setMessage("You are Premium now");
        setSucces(true);
      })

    }
  }, [order_id])

  if (succes === true) {
    return (
      <>
        <Modal
          open={succes}
          onClose={handeleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "25%",
              height: "25%",
              backgroundColor: "#212121",
              borderRadius: 10,
              border: " 1px solid #ABABB1"
            }}
          >
            <Typography variant="h4" component="div" color="white" textAlign="center">
              {message}
            </Typography>
          </Box>
        </Modal>
      </>
    );
  }
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
              setSucces={setSucces}
              setMessage={setMessage}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
