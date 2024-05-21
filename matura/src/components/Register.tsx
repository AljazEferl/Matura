// Register component
// use material-ui for styling
import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';


function Register() {

    return (
        <div className="register">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                />
                <Button variant="contained">
                    Register
                </Button>
            </Box>
        </div>
    );
}

export default Register;