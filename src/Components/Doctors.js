import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Doctors = ({ specialization }) => {
  return (
    <Link to={`/Detail/${specialization._id}`} style={{ textDecoration: 'none' }}>
      <Card key={specialization.id}>
        <CardMedia component='img' title={specialization.title} alt={specialization.title} image={specialization.image} />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div' fontWeight={600}>
            {specialization.title}
          </Typography>
        </CardContent>
        <Button variant='contained' fullWidth size='large' color='primary'>
          {specialization.doctors.length} doctors
        </Button>
      </Card>
    </Link>
  )
}

export default Doctors
