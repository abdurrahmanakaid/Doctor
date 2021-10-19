import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Doctors from '../Components/Doctors'
import Loader from '../Components/Loader'
import Specialization from '../Data/Specialization'

const ServicesScreen = () => {
  const [specializations, setSpecializations] = useState(Specialization)
  useEffect(() => {
    setSpecializations(specializations)
  }, [specializations])

  return (
    <>
      <Banner title='Our Services' desc='Book your Favorite doctor faster using the Health Care Software.' link='/' btnTitle='Home' />
      <Box>
        <Typography variant='h4' component='div' gutterBottom fontWeight={600}>
          FIND BY SPECIALIZATION
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {specializations === 0 && <Loader />}

        {specializations.map((specialization) => (
          <Grid item md={3} key={specialization._id}>
            <Doctors specialization={specialization} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ServicesScreen
