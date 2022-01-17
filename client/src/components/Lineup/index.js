import * as React from 'react';
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { margin } from '@mui/system';
import { Container } from '@mui/material';


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
  paperDiv: {
    backgroundColor: 'Rgba(4, 241, 103, 0.4)',
    borderBottom: 0,
    boxShadow: 0,
    disableGutters: true,
    marginLeft: "auto",
    marginTop: '-10px',
    paddingTop: '20px'
  },
  buttonClass: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    width: '50%',
    height: '50%',
    backgroundColor: 'Rgba(255, 112, 243, 1)',
    color: 'Rgba(29, 39, 155, 1)',
    fontSize: '1.5rem',
    fontWeight: "bold"
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
      <Box  sx={{
        width: '100%',
        height: 100,
        textAlign: 'center'
      }} >
        <Button
          variant="contained"
          className={classes.buttonClass}
          size="large"
          component={Link} to="/tickets" 
           sx={{'&:hover': {
            backgroundColor: 'Rgba(255, 112, 243, .5)',
          }
        }}
        >Tickets
        </Button>
      </Box>
    </Paper>
  );
}