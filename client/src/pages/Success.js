import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

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

      // setTimeout(() => {
      //   window.location.assign('/');
      // }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Box sx={{ backgroundColor: 'var(--tertiary)' }}>
      <Grid>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Grid>
    </Box>
  );
}

export default Success;