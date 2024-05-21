// Register component
// use material-ui for styling
import React, { useEffect } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
// import css file
import '../assets/styles/RegisterStyles.css';


function Register() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState(false);
    useEffect(() => {
        if (password.length < 8) {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }
    }, [username, email, password]);

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
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50vh',
                        width: '50vh',
                        padding: '2rem',
                        borderRadius: '1rem',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Register
                    </Typography>
                    <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        error={errorPassword}
                        sx={{
                            width: '100%',
                        }}
                    />
                    <Button color='inherit' variant="contained"
                        sx={{
                            marginTop: '1rem',
                            width: '100%',
                        }}
                        disabled={errorPassword}
                    >
                        Register
                    </Button>
                </Paper>
            </Box>
        </div >
    );
}

export default Register;