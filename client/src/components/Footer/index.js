import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, Grid, Card} from '@mui/material';
import Link from '@mui/material/Link';
import { Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import footer from '../../assets/graphics/footer.png'
import { borderColor, margin, maxHeight } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import footerImage from '../../assets/images/react-footer.png';


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
const styles ={
    paperContainer: {
        backgroundImage:`url(${footerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'

    },
    copyRight: {
        height: "300px"
    }
};


export default function Footer() {
    //const classes = useStyles();

    return (
        <Paper style={styles.paperContainer}>
        <Box 
        sx={{margin: 0, padding: 0}}
            sx={{
                py: 0,
                px: 0,
                mt: 'auto',
            }}
            >
            <Copyright />

            
            
        </Box>
        </Paper>
    );
}
{/* <Container maxWidth='xl'>
<Grid container spacing={5}>
    <Grid item ex={12}>
        <Card>
            <CardMedia
            component="img"
            alt="footer"
            image={footerImage}
            />
        </Card>
    </Grid>
</Grid>
</Container> */}
