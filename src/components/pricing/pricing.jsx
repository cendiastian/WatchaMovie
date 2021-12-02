import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { useSelector } from "react-redux";
import moment from "moment";
import { Modal } from "@mui/material";

export default function Pricing(tier) {
  const { updateUser } = useUpdateUser();
  const [succes, setSucces] = useState(false);
  const [message, setMessage] = useState("");

  const id = useSelector((state) => state.user.id);
  const exp = useSelector((state) => state.user.expired);
  const handeleClose = () => {
    setSucces(false);
  };
  const BuySubs = () => {
    if (exp !== null) {
      console.log("masuk");
      setMessage("You are still Premium");
      setSucces(true);
      console.log(succes);
    } else {
      updateUser({
        variables: {
          id: id,
          premium: true,
          expired: tier.expired,
        },
      });
      setMessage("You are Premium now");
      setSucces(true);
    }
    console.log(moment(tier.expired).valueOf());
    // console.log( Date.parse(tier.expired));
    // console.log( new Date());
  };
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
