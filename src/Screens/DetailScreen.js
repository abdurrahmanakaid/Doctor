import { Grid } from '@mui/material'
import React from 'react'
import Doctor from '../Components/Doctor'
import Specialization from '../Data/Specialization'

const DetailScreen = ({ match }) => {
  // eslint-disable-next-line eqeqeq
  const drs = Specialization.find((fd) => fd._id == match.params.id)
  return (
    <Grid container justifyContent='center' spacing={2} sx={{ my: 10 }}>
      {drs.doctors.map((doctor) => (
        <Grid item md={6} key={doctor._id}>
          <Doctor doctor={doctor} title={drs.title} />
        </Grid>
      ))}
    </Grid>
  )
}

export default DetailScreen
