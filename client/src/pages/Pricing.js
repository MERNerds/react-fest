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
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
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
      {/* End hero unit */}
      <Paper className={classes.paperBg} sx={{pt:4}}>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end" >
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
      </Paper>
      <Cart />
      {/* End footer */}
    </React.Fragment>

  );
}