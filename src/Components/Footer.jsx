import { Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useRef } from 'react'
import logo from '../assets/home/logo.png'
import { WhatsApp, Instagram } from '@mui/icons-material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { motion, useInView } from 'framer-motion';

const Footer = () => {

  const ref = useRef(null)
  const isInView = useInView(ref,
    {
      once: false
    }
  )

  return (
    <>

      <motion.div initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>

        <Box ref={ref} sx={{ backgroundColor: "#A00705", color: "white", py: 5, px: { xs: 2, sm: 4 } }}>
          <Grid container spacing={4} justifyContent="center" textAlign="center">

            {/* left */}

            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: "30px",marginLeft:{md:"30px",sm:"10px"} }}>
                <img src={logo} width={100} />
                <Typography sx={{ fontFamily: 'Josefin Slab' }}>"Turning Dreams Into Celebration"</Typography>
                <Box sx={{ mt: 2 }}>
                  <IconButton> <a href="https://qr.me-qr.com/link-list/yxPPXf8Z/show" target='blank' style={{ color: "white" }}><WhatsApp /></a></IconButton>
                  <IconButton>  <a href="https://qr.me-qr.com/link-list/yxPPXf8Z/show" target='blank' style={{ color: "white" }}> <Instagram /> </a></IconButton>
                  <IconButton> <a href="https://qr.me-qr.com/link-list/yxPPXf8Z/show" target='blank' style={{ color: "white" }}> <RateReviewIcon /></a></IconButton>
                </Box>
              </Box>


            </Grid>

            {/* center */}

            <Grid item xs={6} sm={3} md={4} >
              <Box sx={{ textAlign: { xs: 'left', md: 'center' }, marginTop: "30px",marginLeft:{xl:"100px",sm:"16px",md:"40px"} }}>

                <section id="home"> <Typography sx={{ fontFamily: 'Josefin Slab', cursor: "pointer" }}
                  onClick={() => { document.getElementById("home").scrollIntoView({ behavior: "smooth" }) }}>Home</Typography></section>

                <section id="service">  <Typography sx={{ fontFamily: 'Josefin Slab', cursor: "pointer" }}
                  onClick={() => { document.getElementById("service").scrollIntoView({ behavior: "smooth" }) }}>Events</Typography></section>

                <section id="gallery">  <Typography sx={{ fontFamily: 'Josefin Slab', cursor: "pointer" }}
                  onClick={() => { document.getElementById("gallery").scrollIntoView({ behavior: "smooth" }) }}>Gallery</Typography></section>

                <section id="team">  <Typography sx={{ fontFamily: 'Josefin Slab', cursor: "pointer" }}
                  onClick={() => { document.getElementById("team").scrollIntoView({ behavior: "smooth" }) }}>Team</Typography></section>

                <section id="testimonial">  <Typography sx={{ fontFamily: 'Josefin Slab', cursor: "pointer" }}
                  onClick={() => { document.getElementById("testimonial").scrollIntoView({ behavior: "smooth" }) }}>Testimonial</Typography></section>

                <Typography sx={{ fontFamily: 'Josefin Slab', cursor: "pointer" }}>Contact Us</Typography>
              </Box>


            </Grid>

            {/* right */}

            <Grid item xs={6} sm={3} md={4}>

              <Box sx={{ textAlign: { xs: 'left' }, marginTop: "30px",marginLeft:{xl:"80px",sm:"0px",md:"50px"} }} >
                <Typography sx={{ fontFamily: 'Josefin Slab' }}>ADDRESS:123 Dream Avenue, Event City, IN</Typography>
                <Typography sx={{ fontFamily: 'Josefin Slab' }}>EMAIL: hello@youreventco.com</Typography>
                <Typography sx={{ fontFamily: 'Josefin Slab' }}>PHONE: +91 9876543210</Typography>
                <Typography sx={{ fontFamily: 'Josefin Slab' }}>TIMINGS: Mon - Sat |9 AM - 7 PM</Typography>
              </Box>
            </Grid>


            <Grid size={12}>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontFamily: "Josefin Slab" }}> © 2025 YourEventCo. All rights reserved</Typography>
                <Typography sx={{ fontFamily: "Josefin Slab" }}> Privacy Policy | Terms & Conditions </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  )
}

export default Footer

