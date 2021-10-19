import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './Common/404'
import Footer from './Common/Footer'
import Header from './Common/Header'
import PrivateRoute from './Components/PrivateRoute'
import { AuthProvider } from './contexts/AuthContext'
import DashboardScreen from './Screens/DashboardScreen'
import DetailScreen from './Screens/DetailScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ServicesScreen from './Screens/ServicesScreen'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#ad0505',
      },
      secondary: {
        main: '#001e3c',
      },
    },
    typography: {
      fontFamily: 'Rajdhani',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  })

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Container maxWidth='lg' sx={{ mt: 10 }}>
            <Switch>
              <Route exact path='/' component={HomeScreen} />
              <Route exact path='/Services' component={ServicesScreen} />
              <Route exact path='/Detail/:id' component={DetailScreen} />
              <Route exact path='/Login' component={LoginScreen} />
              <Route exact path='/Register' component={RegisterScreen} />
              <PrivateRoute exact path='/Dashboard' component={DashboardScreen} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
