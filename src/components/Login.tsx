// Register component
// use material-ui for styling
import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Card, IconButton, Checkbox, FormControl, FormControlLabel, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/LoginStyles.css';


function Register() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const theme = useTheme();

    return (
        <div className="login" style={{ display: 'flex', justifyContent: 'center' }}>
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
                    className='paper-login'
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
                            transform: 'translateX(-0.5rem)',
                        }} variant="h4" gutterBottom>
                            Login
                        </Typography>
                        <div className='icons-container' style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: '2rem',
                        }}>
                            <IconButton
                            sx={{
                                marginRight: '1rem',
                            
                            }}>
                                <GoogleIcon sx={{
                                    fontSize: '24px',
                                }} />
                            </IconButton >
                            <IconButton
                            sx={{
                                marginRight: '1rem',
                            
                            }}>
                                <FacebookIcon sx={{
                                    fontSize: '24px',
                                }} />
                            </IconButton>
                            <IconButton
                            sx={{
                                marginRight: '1rem',
                            
                            }}>
                                <TwitterIcon sx={{
                                    fontSize: '24px',
                                }} />
                            </IconButton>

                        </div>

                    </Card>
                    <TextField
                        label="Uporabniško ime ali email"
                        variant="standard"
                        margin="normal"

                        sx={{
                            marginTop: '10rem',
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color='default'
                            />
                        }
                        label={
                            <Typography variant="body2" color="textSecondary">
                            Zapomni si me
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
                        className='login-button'
                        sx={{
                            height: '2rem',
                            width: '100%',
                            marginTop: '10rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Prijava
                    </Button>
                    <Typography variant="body2" color="textSecondary" sx={{
                        marginTop: '1rem',
                    }}>
                        <Link to={"/"}>
                            Pozabljeno geslo?
                        </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{
                        marginTop: '2rem',
                        
                    }}>
                        Še nimate računa?{' '}
                    <Link to="/register">
                        Registracija
                    </Link>
                    </Typography>
                </Paper>
            </Box>
        </div>
    );
}

export default Register;
