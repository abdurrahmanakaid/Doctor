import { Button, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

const Banner = ({ title, desc, link, btnTitle }) => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Box sx={{ pt: 8, pb: 6, p: 3 }}>
        <Typography component='h2' variant='h3' align='center' fontWeight={600} color='text.primary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h6' align='center' color='text.secondary' paragraph>
          {desc}
        </Typography>
        <Stack direction='row' spacing={2} justifyContent='center'>
          <Button variant='contained' component={Link} to={link}>
            {btnTitle}
          </Button>
        </Stack>
      </Box>
    </Grid>
  )
}

export default Banner
