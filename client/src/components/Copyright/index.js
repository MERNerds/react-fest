import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

// copyright
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="https://mui.com/">
                React Fest
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;