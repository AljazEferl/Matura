// Register component
// use material-ui for styling
import React from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';


function Login() {

    return (
        <div className="login">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50vh',
                        width: '30vh',
                        padding: '2rem',
                        borderRadius: '1rem',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        label="Username"
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
                        Login
                    </Button>
                </Paper>
            </Box >
        </div>
    );
}

export default Login;