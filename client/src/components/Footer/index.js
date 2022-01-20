import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, Grid, Card} from '@mui/material';
import Link from '@mui/material/Link';
import { Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import footer from '../../assets/graphics/footer.png'
import { borderColor, margin } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import footerImage from '../../assets/images/react-footer.png';
import "./footer.css"

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
// const useStyles = makeStyles({
//     footerBg: {
//         maxWidth: "100wv",
//         maxHeight: "30hv",
//         //backgroundImage: {footerImage},
//         //backgroundSize: "1600px 300px",
//         //backgroundPosition: 'center',
//         border: 4,
//         borderColor: 'pink',
//         borderRadius: 2,
//         marginTop: "20px",
//         //paddingTop: "40px"
//     },
// });


export default function Footer() {
    //const classes = useStyles();

    return (
        <Box className="main-footer" 
        sx={{margin: 0, padding: 0}}
            sx={{
                py: 0,
                px: 0,
                mt: 'auto',
            }}>
            <Grid>
        
            <CardMedia
            component="img"
            alt="footer"
            backgroundImage={footerImage}
            />
            <Copyright  />
        
    </Grid>
            
            
        </Box>
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
