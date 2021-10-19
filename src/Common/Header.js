import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import MUISwitch from './LighDarkMode'

const Header = ({ darkMode, setDarkMode }) => {
  const { currentUser, logout } = useAuth()

  console.log(currentUser)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' elevation={0} color='primary'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
            <LocalHospitalIcon />
          </IconButton>
          <Typography variant='h6' color='lightcyan' component={Link} to='/' sx={{ flexGrow: 1, textDecoration: 'none' }}>
            Health Care
          </Typography>
          <Button color='inherit' component={Link} to='/Services'>
            <LocalHospitalIcon sx={{ mr: 1 }} /> Services
          </Button>

          {currentUser ? (
            <>
              <Button color='inherit'>
                <AccountCircleIcon sx={{ mr: 1 }} /> {currentUser.displayName}
              </Button>

              <Button color='inherit' onClick={logout}>
                <LogoutIcon sx={{ mr: 1 }} /> Logout
              </Button>
            </>
          ) : (
            <Button color='inherit' component={Link} to='/Login'>
              <LoginIcon sx={{ mr: 1 }} /> Login
            </Button>
          )}

          <MUISwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
