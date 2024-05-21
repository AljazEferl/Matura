// navigation component
// use material-ui for styling
import React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import "../assets/styles/NavigationStyles.css";
function Navigation() {

    return (
        <div className="navigation">
            <Paper className='nav-paper'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
            </Paper>
        </div>
    );
}

export default Navigation;