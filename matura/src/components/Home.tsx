// use muitheme for styling
import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';

function Home() {

    return (
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
                Home
            </Typography>
            <Button variant="contained" color='inherit'>
                Home
            </Button>
        </Box>
    );
}

export default Home;