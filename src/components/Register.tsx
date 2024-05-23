// Register component
// use material-ui for styling
import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Card, IconButton, Checkbox, FormControl, FormControlLabel, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import '../assets/styles/RegisterStyles.css';

function Register() {
    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const theme = useTheme();

    return (
        <div className="register" style={{ display: 'flex', justifyContent: 'center' }}>
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
                    className='paper-register'
                    sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                        position: 'relative',
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
                    <Card
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(70, 71, 89, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: '-3rem',
                            height: '10rem',
                            padding: '1rem',
                            marginBottom: '1rem',
                            borderRadius: '10px',
                            width: '90%',
                            display: 'flexbox',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                        }} variant="h4" gutterBottom>
                            Registracija
                        </Typography>
                        <div className='icons-container' style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: '2rem',
                        }}>
                            <IconButton>
                                <GoogleIcon sx={{
                                    fontSize: '18px',
                                }} />
                            </IconButton >
                            <IconButton>
                                <FacebookIcon sx={{
                                    fontSize: '18px',
                                }} />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon sx={{
                                    fontSize: '18px',
                                }} />
                            </IconButton>

                        </div>

                    </Card>
                    <TextField
                        label="Uporabniško ime"
                        variant="standard"
                        margin="normal"

                        sx={{
                            marginTop: '10rem',
                            width: '100%',
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        margin="normal"
                        type="email"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <TextField
                        label="Geslo"
                        variant="standard"
                        margin="normal"
                        type="password"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <TextField
                        label="Potrdi geslo"
                        variant="standard"
                        margin="normal"
                        type="password"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                color="default"
                            />
                        }
                        label={
                            <Typography variant="body2" color="textSecondary">
                                Strinjam se z{' '}
                            <Link to={"/"}>
                                pogoji uporabe
                            </Link>
                            {' '}in{' '}
                            <Link to="#">
                                politiko zasebnosti
                            </Link>
                            .
                            </Typography>
                             }
                        sx={{
                            width: '100%',
                            alignItems: 'center', // Aligns the entire component to the left
                            marginLeft: '0', // Adjust the margin as needed
                            marginTop: '1rem', // Add top margin to separate from text fields
                        }}
                    />
                    <Button
                        variant="contained"
                        color='inherit'
                        className='register-button'
                        sx={{
                            height: '3rem',
                            width: '100%',
                            marginTop: '3rem',
                            fontWeight: 'bold',
                        }}
                        disabled={!checked}
                    >
                        Registracija
                    </Button>
                    <Typography variant="body2" color="textSecondary" sx={{
                        marginTop: '2rem',
                        
                    }}>
                        Že imate račun?{' '}
                    <Link to="/login">
                        Prijava
                    </Link>
                    </Typography>

                </Paper>
            </Box>
        </div>
    );
}

export default Register;
