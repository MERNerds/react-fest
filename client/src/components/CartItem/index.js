import React from "react";
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';


const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });

            idbPromise('cart', 'delete', { ...item });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });

            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
        }
    };

    return (
        <Grid 
            container
            justifyContent='center'
            sx={{ borderBottom: 'solid' }} >
            <Grid item xs={10} sx={{ pb: 1, pt: 3 }}>
                <Typography variant='h5' sx={{ color: 'black' }}>
                    Ticket: {item.ticketName}
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ py: 1 }}>
                <Typography variant='h5' sx={{ color: 'black' }}>
                    Price: ${item.price}
                </Typography>
            </Grid>
            <Grid item xs={3} sx={{ pt: 1, pb: 3 }}>
                <Typography variant='h5' sx={{ color: 'black' }}>Qty:
                    <Input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                        sx={{ width: '50px', px: 1 }}
                    />
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <IconButton aria-label='remove' onClick={() => removeFromCart(item)}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default CartItem;