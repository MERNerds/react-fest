//import react
import React from "react";
import Typography from "@mui/material/Typography"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    

    return (
        <div >
            <Link to="/signup">← Go to Signup</Link>

            <Typography variant="h2">
                Login
            </Typography>
            <div onSubmit={handleFormSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="Email:"
                    defaultValue=""
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <Button variant="outlined" type="submit">Submit</Button>
            </div>
        </div>
    )
}

export default Login