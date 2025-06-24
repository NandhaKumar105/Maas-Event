import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/home/logo.png'
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <>


      <Box sx={{ backgroundColor: "brown", color: "white", py: 5, px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={4} justifyContent="center" textAlign="center">

          {/* left */}

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: "30px" }}>
              <img src={logo} width={100} />
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>"Turning Dreams Into Celebration"</Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
                <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
                <IconButton sx={{ color: 'white' }}><Instagram /></IconButton>
              </Box>
            </Box>


          </Grid>

          {/* center */}

          <Grid item xs={6} sm={3} md={4} >
            <Box sx={{ textAlign: { xs: 'left', md: 'center' }, marginTop: "30px" }}>
              <Typography sx={{ fontFamily: 'Josefin Slab' }} >Home</Typography>
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>Our Services</Typography>
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>Gallery</Typography>
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>About us</Typography>
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>Contact</Typography>
            </Box>

          </Grid>

          {/* right */}

          <Grid item xs={6} sm={3} md={4}>

            <Box sx={{ textAlign: { xs: 'left' }, marginTop: "30px", }} >
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>ADDRESS:123 Dream Avenue, Event City, IN</Typography>
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>EMAIL: hello@youreventco.com</Typography>
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>PHONE: +91 9876543210</Typography>
              <Typography sx={{ fontFamily: 'Josefin Slab' }}>TIMINGS: Mon - Sat |9 AM - 7 PM</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default Footer

