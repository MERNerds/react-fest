import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UPDATE_TICKETS } from '../utils/actions'
import { idbPromise } from '../utils/helpers';
//items needed for styling
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TicketItem from '../components/TicketItem'
import bannerTickets from '../assets/images/react-ticket-banner.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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


const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'Rgba(4, 241, 103, 0.4)'
        }
      }
    },
  }
});


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
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Paper >
          <Card
          >
            <CardMedia
              component="img"
              alt="ticket-banner"
              image={bannerTickets}
              sx={{ alignItems: "bottom" }}
            />
          </Card>
        </Paper>
        {/* End hero unit */}
        <Paper className={classes.paperBg} sx={{ pt: 4,pb:2}}>
          <Container maxWidth="md" component="main">
            <Grid container spacing={5} sx={{ alignItems: "flex-end" }} >
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
        </Paper>
      </React.Fragment>
    </ThemeProvider>

  );
}