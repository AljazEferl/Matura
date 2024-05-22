// Register component
// use material-ui for styling
import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Card, IconButton, Checkbox, FormControl, FormControlLabel, Link } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/RegisterStyles.css';


function Register() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

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
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: '-3rem',
                            height: '10rem',
                            padding: '1rem',
                            marginBottom: '1rem',
                            borderRadius: '10px',
                            background: 'linear-gradient(to bottom, #5ebdf3, #1d74e6);',
                            width: '90%',
                            color: '#FFF',
                            display: 'flexbox',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#FFF',
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
                                    color: '#FFF',
                                    fontSize: '18px',
                                }} />
                            </IconButton >
                            <IconButton>
                                <FacebookIcon sx={{
                                    color: '#FFF',
                                    fontSize: '18px',
                                }} />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon sx={{
                                    color: '#FFF',
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="body2" color="textSecondary">
                                Strinjam se z{' '}
                            <Link href="#" variant="body2"
                            >
                                pogoji uporabe
                            </Link>
                            {' '}in{' '}
                            <Link href="#" variant="body2">
                                politiko zasebnosti
                            </Link>
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
                        sx={{
                            height: '3rem',
                            width: '100%',
                            marginTop: '3rem',
                            background: 'linear-gradient(to bottom, #5ebdf3, #1d74e6);',
                            color: '#FFF',
                            fontWeight: 'bold',
                        }}
                    >
                        Registracija
                    </Button>
                    <Typography variant="body2" color="textSecondary" sx={{
                        marginTop: '2rem',
                        
                    }}>
                        Že imate račun?{' '}
                    <Link href="/login" variant="body2">
                        Prijava
                    </Link>
                    </Typography>

                </Paper>
            </Box>
        </div>
    );
}

export default Register;
