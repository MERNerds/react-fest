import React from 'react';

import { Link } from "react-router-dom";

//items needed for styling
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from 'mui-image'
import Paper from '@mui/material/Paper';
import { borderBottom } from '@mui/system';
import { CardMedia } from '@mui/material';


//copywright functions
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/home">
        React-Fest
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//importing styles
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',

    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
    "Rgba(4,241,103,.5)"
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  paperContainer: {
    backgroundImage: `url(${"client/public/images/react-ticket-bannerv1.jpg"})`,
    marginBottom: '20px',
    boxShadow: 'none',
    animation: 'none',

  },
  paperBg: {
    backgroundColor: 'Rgba(2, 183, 221, 0.4)',
    borderBottom: '10px',
    boxShadow: 0
  },
  heroImg: {
    width: "100%",
    cover: 'contain',
    alignItems: 'bottom',
    borderBottom: 'none'

  },
  pricingCard: {
    border: 1
  },
  cardHeader2: {
    backgroundColor: "none"
  }
  
}));

const tiers = [
  {
    title: 'Single-Day Pass',
    price: '100',
    description: ['21 bands each day on 3 stages', 'Food choices from local vendors', 'Bars and Merch', 'Free water stations'],
    buttonText: 'Lets',
    buttonVariant: 'outlined',
  },
  {
    title: '3 Day Pass',
    subheader: 'Limited Tickets remaining!',
    price: '250',
    description: [
      '60+ bands on 3 amazing stages',
      '30+ food vendor',
      'Bars and Merch',
      'Free Water Stations',
    ],
    buttonText: 'Get',
    buttonVariant: 'contained',
  },
  {
    title: 'VIP Pass',
    price: '500',
    description: [
      '60+ bands on 3 amazing stages',
      'Access to 2 vip lounges ',
      '3 free drink tickets daily',
      'Commemorative wristbands',
    ],
    buttonText: 'Rockin!',
    buttonVariant: 'outlined',
  },
];


export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.paperContainer} square>
        <Card className={classes.heroImg}
          src='./images/react-ticket-banner.jpg'

        >
          <CardMedia
            component="img"
            alt="ticket-banner"
            image="./images/react-ticket-banner.jpg"
            alignItems="bottom"
          />

        </Card>
      </Paper>
      <Paper className={classes.paperBg}>
        <Container maxWidth="md" component="main" >
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card sx={{ border: 2, borderColor: 'Rgba(255, 122, 243, 1)' }}>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center', color: '#f44336' }}
                    action={tier.title === 'Pro'}
                    className={classes.cardHeader}
                  />
                  <CardContent >
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Footer */}
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Paper>
      {/* End footer */}
    </React.Fragment>
  );
}