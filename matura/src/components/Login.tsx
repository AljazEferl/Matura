// Register component
// use material-ui for styling
import React from 'react';
import { Button, TextField, Typography, Paper, Card, Switch, FormControlLabel, IconButton, Divider } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/LoginStyles.css';

function Login() {
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
                            backgroundColor: '#19063D',
                            width: '80%',
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
                            Prijava
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
                                }}/>
                            </IconButton > 
                            <IconButton>
                                <FacebookIcon sx={{
                                    fontSize: '18px',
                                }}/>
                            </IconButton>
                            <IconButton>
                                <TwitterIcon sx={{
                                    fontSize: '18px',
                                }}/>
                            </IconButton>
                            
                        </div>

                    </Card>
                    <TextField
                        label="Uporabniško ime"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <TextField
                        label="Geslo"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <FormControlLabel
                        sx={{
                            width: '100%',
                            alignItems: 'center', // Aligns the entire component to the left
                            marginLeft: '0', // Adjust the margin as needed
                            marginTop: '1rem', // Add top margin to separate from text fields
                        }}
                        control={<Switch defaultChecked />}
                        label="Zapomni si me"
                    />
                    <Button
                        variant="contained"
                        color='inherit'
                        sx={{
                            width: '100%',
                            marginTop: '4rem',
                        }}
                    >
                        Prijava
                    </Button>
                </Paper>
            </Box>
        </div>
    );
}

export default Login;
