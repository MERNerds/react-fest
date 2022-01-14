// import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

// //imported for material UI 
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/icons/StarBorder';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

// const useStyles = makeStyles((theme) => ({
//     '@global': {
//         ul: {
//             margin: 0,
//             padding: 0,
//             listStyle: 'none',
//         },
//     },
//     appBar: {
//         borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//     toolbar: {
//         flexWrap: 'wrap',
//     },
//     toolbarTitle: {
//         flexGrow: 1,
//     },
//     link: {
//         margin: theme.spacing(1, 1.5),
//     },
// })
// );

// function Nav() {
//     const classes = useStyles();

//     function showNavigation() {
//         if (Auth.loggedIn()) {
//             return (
//                 <nav>
//                     <Link variant="button" color="textPrimary" to="/myAccount" className={classes.link} >
//                         My Account
//                     </Link>
//                     <Link variant="button" color="textPrimary" to='/mySchedule' className={classes.link}>
//                         My Schedule
//                     </Link>
//                     <Link variant="button" color="textPrimary" to="/cart" className={classes.link}>
//                         Cart
//                     </Link>
//                     <Button to='/' color="primary" variant="outlined" className={classes.link} onClick={() => Auth.logout()}>
//                         Logout
//                     </Button>
//                 </nav>
//             )
//         } else {
//             <nav>
//                 <Button to="/login" color="primary" variant="outlined" className={classes.link}>
//                     Login
//                 </Button>
//                 <Button to="/signup" color="primary" variant="outlined" className={classes.link}>
//                     SignUp
//                 </Button>
//             </nav>

//         }

//     }

//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
//                 <Toolbar className={classes.toolbar}>
//                     <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
//                         React-Fest
//                     <Link variant="button" color="textPrimary" to='/lignup' className={classes.link}>
//                         Lignup
//                     </Link>
//                     <Link variant="button" color="textPrimary" to="/tickets" className={classes.link}>
//                         Tickets
//                     </Link>
//                     </Typography>
//                     {showNavigation()}
//                 </Toolbar>
//             </AppBar>
//         </React.Fragment>
//     )
// }

// export default Nav;


import React from 'react';
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

const pages = ['LineUp', 'Tickets'];
const settings = ['Profile', 'Account', "Cart", 'Logout'];

function Nav() {

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

    function showNavigation() {
        if (Auth.loggedIn) {
            return (
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="" src="" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
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
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            )

        } else {
            return (
                <Box>
                    <Button to="/login" color="primary" variant="outlined" >
                        Login
                    </Button>
                    <Button to="/signup" color="primary" variant="outlined" >
                        SignUp
                    </Button>
                </Box>
            )
        }
    }


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        React-Fest
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                display: { xs: 'block', md: 'none' },
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
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                    <Link to={page}></Link>
                                </MenuItem>
                            ))} */}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        React-Fest
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            // onClick={handleCloseNavMenu}
                            component={Link} to={'/lineup'}
                            // containerElement={<Link to="/lineup" />}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >Lineup
                        </Button>
                        <Button
                            // onClick={handleCloseNavMenu}
                            component={Link} to={'/tickets'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >Tickets
                        </Button>

                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                    </Box>
                    <Box>
                        {showNavigation()}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Nav;