import React from 'react';
import './App.css';
import { Button, ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

// Create dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B9DFFD',
      dark: '#648dae',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1C364B',
      dark: '#004ba0',
    },
  },

});

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  React.useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
      <div className="background" 
      style={{
        background: darkMode ? '#000' : '#fff',
        color: darkMode ? '#fff' : '#000'
      }}
      ></div> 
        <div className='App'>
          <header>
            <Navigation setDarkMode={setDarkMode} darkMode={darkMode} />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
