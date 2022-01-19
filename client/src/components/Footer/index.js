import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import footer from '../../assets/graphics/footer.png'
import { borderColor, margin } from '@mui/system';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" sx={{margin:'auto', textAlign: 'center', pt:2}}>
            {'Copyright © '}
            <Link color="inherit" to="/">
                React-fest
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles({
    footerBg: {
        maxWidth: 1600,
        height: 60,
        backgroundImage: `url(${footer})`,
        backgroundSize: "1600px 300px",
        backgroundPosition: 'center',
        border: 4,
        borderColor: 'pink',
        borderRadius: 2,
        margin: 0
    },
});


export default function Footer() {
    const classes = useStyles();

    return (
        <Box component="footer" sx={{margin: 0, padding: 0}}
            sx={{
                py: 0,
                px: 0,
                mt: 'auto',
            }}>
            <Paper className={classes.footerBg}>
                <Copyright  />
            </Paper>
        </Box>
    );
}