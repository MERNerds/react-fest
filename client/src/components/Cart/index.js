import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'


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

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

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

  // if (!state.cartOpen) {
  //   return (
  //     <div className='cart-closed' onClick={toggleCart}>
  //       <span role="img" aria-label='cart' ></span>
  //     </div>
  //   );
  // }


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {state.cart.length ? (
        <Grid>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <Grid>
            <Grid>
              Total: ${calculateTotal()}
            </Grid>
            <Grid>
              <Button onClick={submitCheckout}>
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (<h3>
        <span role="img" aria-label="shocked">
          😱
        </span>
        You haven't added anything to your cart yet!
      </h3>
      )}
    </Box>
  );
};

export default Cart;