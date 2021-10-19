import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Doctors from '../Components/Doctors'
import Loader from '../Components/Loader'
import Specialization from '../Data/Specialization'

const HomeScreen = () => {
  const [specializations, setSpecializations] = useState(Specialization)
  useEffect(() => {
    setSpecializations(specializations)
  }, [specializations])

  return (
    <>
      <Banner
        title='Health Care'
        desc='We are careful to look for all kinds of facilities and good doctors and clinics for your well-being. We will never accept a system where the patient or clinic is at a disadvantage. We will always work for your well being. Today, we help clinics improve efficiency and better connect withtheir patients through tools like online appointments, recalls, reminders, results, new patient registration, and check-in.'
        link='/Services'
        btnTitle='Our Services'
      />
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

export default HomeScreen
