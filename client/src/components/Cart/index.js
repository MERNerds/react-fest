import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({
        type: ADD_MULTIPLE_TO_CART,
        tickets: [...cart]
      });
    };

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data])

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const ticketIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        ticketIds.push(item._id);
      }
    });

    getCheckout({
      variables: { tickets: ticketIds }
    });
  }


  return (
    <Box >
      {state.cart.length ? (
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }} >
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <Grid
            container
            direction="row"
            justifyContent='space-between'
            alignItems='center'
            sx={{ p: 3 }}
          >
            <Grid >
              <Typography variant='h5' sx={{ color: 'black' }}>
                Total: ${calculateTotal()}
              </Typography>
            </Grid>
            <Grid >
              <Button variant="contained" sx={{ color: 'black', backgroundColor: 'var(--tertiary)', '&:hover': { backgroundColor: 'var(--bright)' } }} onClick={submitCheckout}>
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (<Grid
        container
        justifyContent='center'
        sx={{ py: 5 }}>
        <Grid item xs={8}>
          <Typography variant='h5' sx={{ color: 'black' }}>How can you if you haven't added anything to your cart yet?!</Typography>
        </Grid>
      </Grid>
      )}
    </Box>
  );
};

export default Cart;