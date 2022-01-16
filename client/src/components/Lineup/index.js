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


const useStyles = makeStyles((theme) => ({

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',

    },
  },
  lineupCard: {
    padding: 10,
    margin: 20,
    maxWidth: 800,
    
  }

}));

export default function LineUp() {
 const classes = useStyles();
 
  return (

    <Paper >
      <Card className={classes.lineupCard}>
        <CardMedia
          component="img"
          alt="Day 1"
          height="400"
          width="800"
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