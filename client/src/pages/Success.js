import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ORDER } from '../utils/mutations';
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

import Cart from '../components/Cart'
import TicketItem from '../components/TicketItem'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import  success from '../assets/graphics/react-success-banner-2.png';


function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const tickets = cart.map((item) => item._id);

      if (tickets.length) {
        const { data } = await addOrder({ variables: { tickets } });
        const productData = data.addOrder.tickets;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);
  
  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    paperBg: {
      backgroundColor: 'Rgba(2, 183, 221, 0.4)',
      // borderBottom: '100px',
      boxShadow: 0,
      paddingBottom: '10px'
    },
    heroImg: {
      width: "100%",
      cover: 'contain',
      alignItems: 'bottom',
      // borderBottom: '100px'
  
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
  });const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Paper class={classes.paperBg}> 
          <Card className={classes.heroImg}          >
            <CardMedia
              component="img"
              alt="ticket-banner"
              image={success}
              alignItems="bottom"
            />
          </Card>
        </Paper>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Success;