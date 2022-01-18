import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UPDATE_TICKETS } from '../utils/actions'
import { idbPromise } from '../utils/helpers';
//items needed for styling
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
  const { tickets } = state
  // console.log(tickets);
  // console.log(cart);
  console.log(currentTicket);

  useEffect(() => {
    if (tickets.length) {
      setCurrentTicket(tickets.find(ticket => ticket._id === id));
    }
    else if (data) {
      dispatch({
        type: UPDATE_TICKETS,
        tickets: data.tickets
      });

      data.tickets.forEach((ticket) => {
        idbPromise('tickets', 'put', ticket);
      });
    } else if (!loading) {
      idbPromise('tickets', 'get').then((indexedTickets) => {
        dispatch({
          type: UPDATE_TICKETS,
          tickets: indexedTickets
        });
      });
    }
  }, [tickets, data, loading, dispatch, id]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
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