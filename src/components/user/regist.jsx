import * as React from "react";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    width: 800,
    backgroundColor: "#212121",
    borderRadius: 15,
    padding: (20, 20, 20, 20),
    // mt:2,
  },
  white: {
    color: "#fffff",
  },
});

export default function Login() {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <Box>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          //   sx={{ textAlign: "center" }}
        >
          Create Account
        </Typography>
      </Box>
      <Box component="form" noValidate >
      <TextField
          margin="normal"
          fullWidth
          required
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
          color="outline"
          variant="outlined"
        />
        <TextField
          margin="normal"
          fullWidth
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          color="outline"
          variant="outlined"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          //   type="password"
          id="password"
          autoComplete="current-password"
          color="outline"
          variant="outlined"
        />
        {/* <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs>
            <FormControlLabel
              control={<Checkbox value="remember" color="outline" />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Link
              href="#"
              color="#ABABB1"
              sx={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Forgot password?
            </Link>
          </Grid>
        </Grid> */}
        <Box  sx={{display:'flex', justifyContent:'center', }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2,}}
        >
          Sign In
        </Button>
        </Box>
      </Box>
    </Container>
  );
}
