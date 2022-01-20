import React from 'react';
// import coverImage from '../../assets/images/react-lineup.jpg';
// import ticketBanner from '../../assets/images/react-ticket-banner.jpg';

//importing Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { margin } from '@mui/system';
import { Container, Grid } from '@mui/material';
import { Image } from 'mui-image';
import Pricing from '../../pages/Pricing';
import nightBlue from '../../assets/images/night-blue.jpeg';
import dayYellow from '../../assets/images/day-yellow.jpeg';
import ubbi from '../../assets/images/ubbi.JPG';
import crowdSurf from '../../assets/images/crowd-surf.jpg';
import heartStage from '../../assets/images/heart-stage.jpeg';




const useStyles = makeStyles((theme) => ({
    lineupHero: {
        component: "img",
        backgroundImage: "client/public/images/react-lineup.jpg",
        image: "client/public/images/react-lineup.jpg",
        width: '100%',
        height: '400vh',
    },
    lineupCard: {
        padding: "0px",
        marginTop: '0px',
        maxWidth: '100%',
        marginLeft: "auto",
        marginRight: "auto",
        height: "100%",
    },
    photoGrid: {
        //paddingBottom: "10px",
        marginTop: '20px',
        marginBottom: 50,
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        boxShadow: '5px 5px 5px 5px rgba(3, 221, 94, .5)',
    },
    photoPaper: {
        marginBottom: "40px"
    }

}));

export default function Home() {
    const classes = useStyles();

    return (
        <Paper>
            <Card className={classes.lineupCard}>
                <CardMedia
                    component="img"
                    alt="Festival-Lineup"
                    width="100%"
                    image="/images/react-lineup.jpg"

                />
            </Card>
            <Grid container className={classes.photo}>
                <Card className={classes.photoGrid}>
                    <CardMedia
                        component="img"
                        alt="photogrid"
                        image={nightBlue}
                    />
                </Card>
                <Card className={classes.photoGrid}>
                    <CardMedia
                    component="img"
                    width="50%"
                    alt="photo"
                    image={crowdSurf}
                    />
                </Card>
                <Card className={classes.photoGrid}>
                    <CardMedia
                    component="img"
                    width="100%"
                    height="100%"
                    alt="photo"
                    image={ubbi}
                    />
                </Card>
                <Card className={classes.photoGrid}>
                    <CardMedia
                    component="img"
                    alt="photo"
                    image={heartStage}
                    />
                </Card>
                <Card className={classes.photoGrid}>
                    <CardMedia
                    component="img"
                    width="100%"
                    height="100%"
                    alt="photo"
                    image={dayYellow}
                    />
                </Card>
                </Grid>     
        </Paper>

    )
}


