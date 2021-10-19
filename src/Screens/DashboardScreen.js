import { Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const DashboardScreen = () => {
  const { currentUser } = useAuth()
  return (
    <Typography variant='h1' component='h1'>
      Confirm Booking Mr. {currentUser.displayName}
    </Typography>
  )
}

export default DashboardScreen
