import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

//imported for material UI 
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
})
);

export default function Nav() {
    const classes = useStyles();

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <nav>
                    <Link variant="button" color="textPrimary" to="/myAccount" className={classes.link} >
                        My Account
                    </Link>
                    <Link variant="button" color="textPrimary" to='/mySchedule' className={classes.link}>
                        My Schedule
                    </Link>
                    <Link variant="button" color="textPrimary" to="/cart" className={classes.link}>
                        Cart
                    </Link>
                    <Button to='/' color="primary" variant="outlined" className={classes.link} onClick={() => Auth.logout()}>
                        Logout
                    </Button>
                </nav>
            )
        } else {
            <nav>
                <Button to="/login" color="primary" variant="outlined" className={classes.link}>
                    Login
                </Button>
                <Button to="/signup" color="primary" variant="outlined" className={classes.link}>
                    SignUp
                </Button>
            </nav>

        }

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        React-Fest
                    </Typography>
                    <Link variant="button" color="textPrimary" to='/lignup' className={classes.link}>
                        Lignup
                    </Link>
                    <Link variant="button" color="textPrimary" to="/tickets" className={classes.link}>
                        Tickets
                    </Link>
                    {showNavigation()}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Nav;