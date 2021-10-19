import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const RegisterScreen = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState('')

  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  const { signup } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!")
    }

    try {
      setError('')
      setLoading(true)
      await signup(email, password, userName)
      history.push('/')
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError('Failed to create an account!')
    }
  }

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item sm={8} md={4}>
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Create An Account
          </Typography>

          <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit} autoComplete='off'> 
            <TextField
              margin='normal'
              fullWidth
              size='small'
              id='name'
              required
              label='Full Name'
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
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
            <TextField
              margin='normal'
              fullWidth
              size='small'
              label='Confirm Password'
              type='password'
              required
              id='ConfirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              value={agree}
              onChange={(e) => setAgree(e.target.value)}
              label='I agree to the Terms &amp; Conditions'
            />
            {error && <Typography color='red'>{error}</Typography>}
            <Button type='submit' disabled={loading} fullWidth variant='contained' sx={{ my: 1 }}>
              Register
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/Login' variant='body2'>
                  {'have an account? Sing In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RegisterScreen
