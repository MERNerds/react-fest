import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function SignUp(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        // const token = mutationResponse.data.addUser.token;
        // Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <Box>
            <Link to="/login">← Go to Login</Link>
            <Typography variant="h2">
                SignUp
            </Typography>
            <div onSubmit={handleFormSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    defaultValue="required"
                    onChange={handleChange}
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue="required"
                    onChange={handleChange}
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Email:"
                    defaultValue=""
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <Button variant="outlined" type="submit">Submit</Button>
            </div>

        </Box>
    )
}

export default SignUp