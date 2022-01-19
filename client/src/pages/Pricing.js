import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UPDATE_TICKETS, ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions'
//items needed for styling
import  Button  from '@mui/material/Button';
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
import Copyright from '../components/Copyright';
import Cart from '../components/Cart'
import TicketItem from '../components/TicketItem'

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
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  //will be put in a footer component
//   footer: {
//     borderTop: `1px solid ${theme.palette.divider}`,
//     marginTop: theme.spacing(8),
//     paddingTop: theme.spacing(3),
//     paddingBottom: theme.spacing(3),
//     [theme.breakpoints.up('sm')]: {
//       paddingTop: theme.spacing(6),
//       paddingBottom: theme.spacing(6),
//     },
//   },
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
  console.log(cart);

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

            // Enterprise card is full width at sm breakpoint
            // <Grid item key={ticket._id} xs={12} sm={ticket.ticketName === 'Enterprise' ? 12 : 6} md={4}>
            //   <Card>
            //     <CardHeader
            //       title={ticket.ticketName}
            //       subheader={ticket.subheader}
            //       titleTypographyProps={{ align: 'center' }}
            //       subheaderTypographyProps={{ align: 'center', color: '#f44336' }}
            //       action={ticket.ticketName === 'Pro'}
            //       className={classes.cardHeader}
            //     />
            //     <CardContent>
            //       <div className={classes.cardPricing}>
            //         <Typography component="h2" variant="h3" color="textPrimary">
            //           ${ticket.price}
            //         </Typography>
            //         <Typography variant="h6" color="textSecondary">
            //         </Typography>
            //       </div>
            //       <ul>
            //           <Typography component="li" variant="subtitle1" align="center" >
            //             {ticket.description1}
            //           </Typography>
            //           <Typography component="li" variant="subtitle1" align="center" >
            //             {ticket.description2}
            //           </Typography>
            //           <Typography component="li" variant="subtitle1" align="center" >
            //             {ticket.description3}
            //           </Typography>
            //           <Typography component="li" variant="subtitle1" align="center" >
            //             {ticket.description4}
            //           </Typography>
            //       </ul>
            //     </CardContent>
            //     <CardActions>
            //     <Button fullWidth variant={ticket.buttonVariant} color="primary" onClick={addToCart}>
            //         {ticket.buttonText}
            //       </Button>
            //     </CardActions>
            //   </Card>
            // </Grid>
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