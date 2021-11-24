import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Data } from './data'
import Line from "../../assets/Line 2.png";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



function Footer() {
  return (
    <Container
        maxWidth="full"
        component="footer"
        
        sx={{
            backgroundColor:"#212121",
            paddingTop:15,
            paddingBottom:5,
            color:"white",
        //   borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        //   mt: 8,
        //   py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="flex-start">
            <Grid item xs={6} sm={3}>
            <Typography variant="h4" color="white" gutterBottom>
                WatchaMovie
            </Typography>
            <Typography variant="subtitle1" color="white" gutterBottom>
               Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun 
            </Typography>
            </Grid>
            {/* <Grid item xs={1} sm={1}><img src={Line} alt="line" /></Grid> */}
          {Data.map((data) => (
            <React.Fragment key={data.title}>
            <Grid item xs={1} sm={1}><img src={Line} alt="line" /></Grid>
            <Grid item xs={6} sm={3} key={data.title} justifyContent="center">
              <Typography variant="h5" color="white" gutterBottom>
                {data.title}
              </Typography>
              {/* <ul> */}
                {data.items.map(({ Icon, item }, i) => (
                  <div key={i}>
                    <Link href="#" variant="subtitle1" color="#fffff" sx={{textDecoration:"none", color:"white"}}>
                      {/* {item} */}
                      {Icon && <Icon />} {item}
                    </Link>
                  </div>
                ))}
              {/* </ul> */}
            </Grid>
            </React.Fragment>
          ))}
        </Grid>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>  
  );
}

export default Footer;