import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'

const Doctor = ({ doctor, title }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='subtitle1' fontWeight={600}>
            {title}
          </Typography>
          <Typography variant='h5' color='text.secondary' component='div' fontWeight={600}>
            {doctor.name}
          </Typography>
          <Divider />
          <Typography variant='subtitle1' color='text.secondary' component='div' sx={{ my: 2 }}>
            {doctor.description}
          </Typography>
          <Typography variant='h6' color='text.secondary' component='div' paragraph>
            {doctor.gender} Doctor || Fee: ${doctor.price}
          </Typography>

          <Rating value={doctor.rating} text={` ${doctor.numReviews} Reviews`} />
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant='contained' color='primary' component={Link} to='/Dashboard'>
            Book Now
          </Button>
        </Box>
      </Box>
      <CardMedia component='img' sx={{ width: 151 }} image={doctor.image} alt='Live from space album cover' />
    </Card>
  )
}

export default Doctor
