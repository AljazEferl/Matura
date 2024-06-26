// use muitheme for styling
import React from 'react';
import { Button, TextField, Typography, Paper, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';

function Home() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5rem 1rem',
            }}
        >
            <Paper  sx={{ width: '100%', padding: '3rem', height: '100%',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
             }}>
                <Typography variant="h4" gutterBottom>
                    Home content
                </Typography>
            </Paper>

        </Box>
    );
}

export default Home;