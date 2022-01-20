import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
//items needed for styling
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
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
      paddingBottom: '10px',
      height:'100vh'
    },
    heroImg: {
      width: "100%",
      cover: 'contain',
      alignItems: 'bottom',
      // borderBottom: '100px',
      height:'100vh'
  
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
    },
    typography: {
      fontFamily: [
        'Mochiy Pop P One',
        'sans-serif'
      ].join(','),
    }
  });
  
  const classes = useStyles();

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
              sx={{mt: '25px'}}
            />
          <Typography sx={{textAlign:"center", mt: 3, fontSize: '30px'}}>
            You are now being redirected!
          </Typography>
          </Card>
        </Paper>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Success;