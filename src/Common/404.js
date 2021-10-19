import { Grid, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height: '100vh' }}>
      <Grid item>
        <Typography variant='h2' component='h2' fontWeight='700'>
          404! This page could not be found.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default NotFound
