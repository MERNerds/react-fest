import * as React from 'react';
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { margin } from '@mui/system';


const useStyles = makeStyles((theme) => ({

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',

    },
  },
  lineupCard: {
    padding: "10px",
    marginTop: '20px',
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto"
    
  },
  paperDiv:{
    backgroundColor: 'Rgba(2, 183, 221, 0.4)',
    borderBottom: 0,
    boxShadow: 0,
    disableGutters: true,
    marginLeft: "auto"

  }

}));

export default function LineUp() {
 const classes = useStyles();
 
  return (

    <Paper className={classes.paperDiv}>
      <Card className={classes.lineupCard}>
        <CardMedia
          component="img"
          alt="Day 1"
          height="400"
          width="800"
          image="./images/Day-1.jpg"
        />
      </Card>
      <Card className={classes.lineupCard}>
        <CardMedia
          component="img"
          alt="Day 1"
          height="400"
          image="./images/react-ticket-banner.jpg"
        />
      </Card>
      <Card className={classes.lineupCard}>
        <CardMedia
          component="img"
          alt="Day 1"
          height="400"
          image="./images/react-ticket-banner.jpg"
        />
      </Card>
      <Button size="large" component={Link} to>Tickets</Button>
    </Paper>
  );
}