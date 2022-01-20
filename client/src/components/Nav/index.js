import React from 'react';
import { useSelector } from 'react-redux'
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Cart from '../Cart'
import '@fortawesome/fontawesome-free'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';


const theme = createTheme({
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(2,183,221)'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    color: 'white'
                }
            }
        },
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
    }
});

// This isn't being called anywhere so I am commenting it out incase it was meant to be used. 
// const useStyles = makeStyles({
//     logo: {
//         maxWidth: 160,
//     },
// });

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(0),
    }
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        // color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function Nav() {
    const state = useSelector((state) => {
        return state
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handlePageChange = () => {
        window.location.href = "/"
    }

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip sx={{ color: '#02B7DD' }} title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: '#02B7DD' }}>
                            <Badge badgeContent={state.cart.length} color='error'>
                                <Avatar alt="" src="">
                                    <MusicNoteIcon sx={{ fontSize: 30, color: '#04F167' }} />
                                </Avatar>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px', }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >

                        <MenuItem >
                            <Typography
                                underline="hover"
                                component={Link} to={'/myschedule'}
                                textAlign="center">Schedule
                            </Typography>
                        </MenuItem>
                        <MenuItem >
                            <Grid container justifyContent='space-between' alignItems='center'>
                                <Typography
                                    sx={{ underline: 'none', textTransform: 'none' }}
                                    component={Link} to='#' variant='text' onClick={handleClickOpen}
                                    textAlign="center">Cart
                                </Typography>
                                <Badge badgeContent={state.cart.length} color='error' sx={{ px: 1 }} />
                            </Grid>
                        </MenuItem>
                        <MenuItem >
                            <Typography
                                component={Link} to={'/'}
                                onClick={() => Auth.logout()}
                                textAlign="center">Logout
                            </Typography>
                        </MenuItem>
                        {/* {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))} */}
                    </Menu>
                    <BootstrapDialog
                        fullWidth={true}
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <BootstrapDialogTitle sx={{ color: 'black', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--secondary)' }} onClose={handleClose}>
                            Smash That Checkout Button!
                        </BootstrapDialogTitle>
                        <DialogContent >
                            <Cart />
                        </DialogContent>
                    </BootstrapDialog>
                </Box>


            )

        } else {
            return (
                <Box>
                    <Button component={Link} to={'/login'} color="inherit" variant="outlined" sx={{ borderColor: 'Rgb(29, 38, 155)' }}>
                        Login
                    </Button>
                    <Button component={Link} to={'/signup'} color="inherit" variant="outlined" sx={{ ml: 1, borderColor: 'Rgb(29, 38, 155)' }}>
                        SignUp
                    </Button>
                </Box>
            )
        }
    }



    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <AppBar position="sticky" sx={{ backgroundColor: 'Rgba(255, 122, 243, 1)' }}>
                    <Container maxWidth="xl" sx={{ color: "FF4DF0" }} >
                        <Toolbar disableGutters sx={{ color: "FF4DF0" }}>
                            <Box
                                component="img"
                                sx={[{
                                    height: 80,
                                    pr: 2,
                                    display: { xs: ' none', md: 'flex' },

                                },{'&:hover':{
                                    cursor:'pointer'
                                }}]
                                }
                                alt="Your logo."
                                src={"./images/header-reactFest.png"}
                                onClick={handlePageChange}
                            />
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "FF4DF0" }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none', color: "FF4DF0" },
                                    }}
                                >
                                    <MenuItem>
                                        <Link to="./lineup">
                                            <Typography textAlign="center">Lineup</Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="./tickets">
                                            <Typography textAlign="center">Tickets</Typography>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Box
                                component="img"
                                alt="Your logo."
                                src={"./images/header-reactFest.png"}
                                onClick={handlePageChange}
                                sx={[{
                                    pr: 10,
                                    pt: 1,
                                    height: 80,
                                    width: 60,
                                    flexGrow: 1,
                                    display: { xs: 'flex', md: 'none' }
                                },{'&:hover':{
                                    cursor:'pointer'
                                }}]}
                            >
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button variant="outlined"
                                    // onClick={handleCloseNavMenu}
                                    component={Link} to={'/lineup'}
                                    // containerElement={<Link to="/lineup" />}
                                    sx={{ my: 2, color: 'white', display: 'block', mr: 1, borderColor: 'Rgb(29, 38, 155)' }}
                                >Lineup
                                </Button>
                                <Button variant="outlined"
                                    // onClick={handleCloseNavMenu}
                                    component={Link} to={'/tickets'}
                                    sx={{ my: 2, color: 'white', display: 'block', mr: 1, borderColor: 'Rgb(29, 38, 155)' }}
                                >Tickets
                                </Button>
                            </Box>
                            <Box>
                                {showNavigation()}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </React.Fragment>
        </ThemeProvider>
    );
};
export default Nav;