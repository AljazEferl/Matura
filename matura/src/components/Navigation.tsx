// navigation component
// use material-ui for styling
import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: '10vh',
            }}
        >
            <Link to="/">
                <Button>
                    Home
                </Button>
            </Link>
            <Link to="/register">
                <Button>
                    Register
                </Button>
            </Link>
            <Link to="/login">
                <Button>
                    Login
                </Button>
            </Link>
        </Box>
    );
}

export default Navigation;