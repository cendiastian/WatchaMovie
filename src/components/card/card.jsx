import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import Img from "../../assets/unsplash_wMkaMXTJjlQ.png";
import { makeStyles } from '@mui/styles';
// import styles from "./styles.module.css"
const useStyles = makeStyles({
    item:{
        boxShadow:" 0px -13px 31px rgba(0, 0, 0, 0.24), 0px -4.74521px 11.3155px rgba(0, 0, 0, 0.165596), 0px -2.30371px 5.49347px rgba(0, 0, 0, 0.13351), 0px -1.12932px 2.693px rgba(0, 0, 0, 0.10649), 0px -0.446536px 1.06482px rgba(0, 0, 0, 0.0744044)",
        backgroundColor: "#181818",
        borderRadius: 5,
        maxWidth: 223,
    }});

export default function ActionAreaCard(props) {
    const styles = useStyles();
  return (
    <Card className={styles.item}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="223px"
          height="225px"
          image={props.image}
          alt="poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {props.title}
          </Typography>
          {/* <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
