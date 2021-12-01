import React from "react";
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
import moment from 'moment'

export default function Pricing(tier) {
  const { updateUser} = useUpdateUser();
  // const tier = props;

  const id = useSelector((state) => state.user.id);

  const BuySubs = () => {
    updateUser({
      variables: {
        id: id,
        premium: true,
        expired: tier.expired,
      },
    });
    console.log(moment(tier.expired).valueOf() );
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