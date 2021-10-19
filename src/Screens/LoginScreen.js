import GoogleIcon from '@mui/icons-material/Google'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert, Avatar, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  const { login } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(email, password)
      history.push('/')
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError('Failed to Login')
    }
  }

  const handleGoogleSignIn = () => {
    login.signInWithGoogle().then((res) => {
      console.log(res)
      history.replace('/')
    })
  }

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item md={4}>
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>

          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} autoComplete='off'>
            {error && (
              <Alert variant='filled' severity='error'>
                {error}
              </Alert>
            )}
            <TextField
              margin='normal'
              fullWidth
              size='small'
              id='email'
              required
              label='Email Address'
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              fullWidth
              size='small'
              required
              label='Password'
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />

            <Button disabled={loading} type='submit' fullWidth variant='contained' sx={{ my: 1 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/Register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Button fullWidth variant='contained' color='secondary' onClick={handleGoogleSignIn} sx={{ my: 2 }}>
            <GoogleIcon /> Google
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginScreen
