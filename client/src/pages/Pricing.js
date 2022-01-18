import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UPDATE_TICKETS, ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions'
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
import Copyright from '../components/Copyright';
import Cart from '../components/Cart'
import TicketItem from '../components/TicketItem';

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

export default function Pricing() {
  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  const { id } = useParams();

  const [currentTicket, setCurrentTicket] = useState({});

  const { loading, data } = useQuery(QUERY_TICKETS);
  const { tickets, cart } = state
  console.log(tickets);

  useEffect(() => {
    if (tickets.length) {
      setCurrentTicket(tickets.find(ticket => ticket._id === id));
    }
    else if (data) {
      dispatch({
        type: UPDATE_TICKETS,
        tickets: data.tickets
      })
    } else if (!loading) {
      dispatch({
        type: UPDATE_TICKETS,
        tickets: tickets
      })
    }
  }, [tickets, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantitiy: parseInt(itemInCart.purchaseQuantitiy) + 1
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        ticket: { ...currentTicket, purchaseQuantitiy: 1 }
      })
    }
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Paper className={classes.paperContainer} square>
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
          <Grid container spacing={5} alignItems="flex-end"> */}
            {/* {tiers.map((tier) => ( */}
              {/* <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
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
              </Grid> */}
            {/* ))}
          </Grid>
        </Container> */}
        {/* Footer */}
        {/* <Container maxWidth="md" component="footer" className={classes.footer}>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Paper> */}
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        {/* <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography> */}
      </Container> 
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {state.tickets.map((ticket) => (
            <TicketItem
              key={ticket._id}
              _id={ticket._id}
              ticketName={ticket.ticketName}
              subheader={ticket.subheader}
              price={ticket.price}
              description1={ticket.description1}
              description2={ticket.description2}
              description3={ticket.description3}
              description4={ticket.description4}
              buttonVariant={ticket.buttonVariant}
              buttonText={ticket.buttonText} />
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      <Cart />
      {/* End footer */}
    </React.Fragment>
    
  );
}