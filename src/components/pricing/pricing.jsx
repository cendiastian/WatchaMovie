import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "1 Day",
    price: "10.000",
    description: ["Mendapat akses untuk menonton film selama 1 hari"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "2 Day",
    //   subheader: 'Most popular',
    price: "20.000",
    description: ["Mendapat akses untuk menonton film selama 2 hari"],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "3 Day",
    price: "30.000",
    description: ["Mendapat akses untuk menonton film selama 3 hari"],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6, }}
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
        <Typography
          variant="h5"
          align="center"
          color="white"
          component="p"
        >
          Here is the list of subscription plan that can you buy 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              md={4}
            >
              <Card sx={{ borderRadius: 5, border: "1px solid #ABABB1",  backgroundColor: "#212121", color:"white", }}>
                <CardHeader
                  title={tier.title}
                  //   title={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                //   color="white"
                  sx={{
                    backgroundColor: "#3E3D3D"
                    //   theme.palette.mode === "light"
                        // ? theme.palette.grey[200]
                        // : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    //   backgroundColor: "#212121"
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="white"
                    >
                      RP.{tier.price}
                    </Typography>
                  </Box>
                  {/* <ul> */}
                  {/* {tier.description.map((line) => ( */}
                  <Typography
                    // component="li"
                    variant="subtitle1"
                    color="white"
                    // align="center"
                  >
                    {tier.description}
                  </Typography>
                  {/* ))} */}
                  {/* </ul> */}
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
export default function Pricing() {
  return <PricingContent />;
}
