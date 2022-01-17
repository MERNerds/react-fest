// import React from 'react';
import React from 'react';
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


// const pages = ['LineUp', 'Tickets'];
// const settings = ['Profile', 'Account', "Cart", 'Logout'];

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
        if (false) {
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
                        
                        <MenuItem>
                            <Typography
                                component={Link} to={'/profile'}
                                textAlign="center">Profile
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography
                                component={Link} to={'/cart'}
                                textAlign="center">Cart
                            </Typography>
                        </MenuItem>
                        <MenuItem>
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
                </Box>
                
                
            )

        } else {
            return (
                <Box>
                    <Button component={Link} to={'/login'}color="inherit" variant="outlined" >
                        Login
                    </Button>
                    <Button component={Link} to={'/signup'} color="inherit" variant="outlined" sx={{ ml: 1 }}>
                        SignUp
                    </Button>
                </Box>
            )
        }
    }



    return (
        <React.Fragment>
        <AppBar position="sticky" sx={{backgroundColor:'Rgba(255, 122, 243, 1)' }}>
            <Container maxWidth="xl" sx={{color: "FF4DF0" }} >
                <Toolbar disableGutters sx={{color: "FF4DF0" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link  to="/">
                        React-Fest
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },color: "FF4DF0"   }}>
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
        </React.Fragment>
    );
};
export default Nav;