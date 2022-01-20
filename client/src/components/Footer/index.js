import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import { Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import footerImage from '../../assets/images/react-footer.png';
//import { BackgroundColor } from 'chalk';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundImage: `url(${footerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: {xs:'59px', md:'270px'},
        paddingTop: '40px'
        
    }
}));


function Footer() {
    const classes = useStyles();

    return (
        <Paper>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                className={classes.paperContainer}>
                <Grid>
                    <Typography variant="body2" align="center" sx={{mt:{xs:'-30px', md:'0px'}}}>
                        {'Copyright © '}
                        <Link color="inherit" to="https://mui.com/">
                            React Fest
                        </Link>{' '}
                        {new Date().getFullYear()}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Footer;
