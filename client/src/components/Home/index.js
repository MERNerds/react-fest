import React from 'react';

//importing Material UI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';
import nightBlue from '../../assets/images/night-blue.jpeg';
import dayYellow from '../../assets/images/day-yellow.jpeg';
import ubbi from '../../assets/images/ubbi.JPG';
import crowdSurf from '../../assets/images/crowd-surf.jpg';
import heartStage from '../../assets/images/heart-stage.jpeg';

//import gridBack from '../../assets/images/gridBack.png';




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
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginTop: '20px',
        marginBottom: 50,
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        boxShadow: '5px 5px 5px 5px rgba(3, 221, 94, .5)',
    },
    photoPaper: {
       // backgroundImage: `url(${gridBack})`
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
            <Grid container className={classes.photoPaper}>
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


