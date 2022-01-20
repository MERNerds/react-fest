import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions'
import { makeStyles } from '@material-ui/core/styles';
import Auth from '../../utils/auth';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { idbPromise } from "../../utils/helpers";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
            "Rgba(4,241,103,.5)"
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    paperContainer: {
        backgroundImage: `url(${"client/public/images/react-ticket-bannerv1.jpg"})`,
        marginBottom: '20px',
        boxShadow: 'none',
        animation: 'none',

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
    pricingCard: {
        border: 1
    },
    cardHeader2: {
        backgroundColor: "none"
    }

}));

const theme1 = createTheme({
    typography: {
      fontFamily: [
        'Mochiy Pop P One',
        'sans-serif'
      ].join(','),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: [
              'Mochiy Pop P One',
              'sans-serif'
            ].join(','),
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            fontFamily: [
              'Mochiy Pop P One',
              'sans-serif'
            ].join(','),
          }
        }
      }
    }})

function TicketItem(item) {
    const state = useSelector((state) => {
        return state
    });

    const dispatch = useDispatch();

    const { cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);

        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            })
        } else {
            dispatch({
                type: ADD_TO_CART,
                ticket: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 })
        }
    };

    const {
        _id,
        ticketName,
        subheader,
        price,
        description1,
        description2,
        description3,
        description4,
        buttonVariant,
        buttonText
    } = item;

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme1}>
        <Grid item key={_id} xs={12} sm={ticketName === 'Enterprise' ? 12 : 6} md={4} sx={{ p: 1 }}>
            <Card sx={{ border: 1, borderColor: 'Rgba(255, 122, 243, 1)', backgroundColor: "rgb(250,250,249)" }}>
                <CardHeader
                    title={ticketName}
                    subheader={subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center', color: '#f44336' }}
                    action={ticketName === 'Pro'}
                    className={classes.cardHeader}
                    sx={{ backgroundColor: 'rgba(2,183,221,0.5)' }}
                />
                <CardContent>
                    <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                            ${price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                        </Typography>
                    </div>
                    <ul>
                        <Typography component="li" variant="subtitle1" align="center" >
                            {description1}
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center" >
                            {description2}
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center" >
                            {description3}
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center" >
                            {description4}
                        </Typography>
                    </ul>
                </CardContent>
                <CardActions>
                    {
                        Auth.loggedIn() ?
                            <Button fullWidth variant={buttonVariant} color="primary" onClick={addToCart}>
                                {buttonText}
                            </Button>

                            :

                            <Button fullWidth variant={buttonVariant} color="primary">
                                Login To Purchase
                            </Button>
                    }
                </CardActions>
            </Card>
        </Grid>
        </ThemeProvider>
    )

                }
    export default TicketItem
