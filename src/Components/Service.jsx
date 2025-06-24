import React, { useRef, useState } from 'react';
import { AppBar, Box, Button, Card, CardContent, Drawer, duration, IconButton, List, ListItem, ListItemText, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, px, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import s1 from '../assets/service/s1.png'
import s2 from '../assets/service/s2.png'
import s3 from '../assets/service/s3.png'
import s4 from '../assets/service/s4.png'
import s5 from '../assets/service/s5.png'
import s6 from '../assets/service/s6.png'
import s7 from '../assets/service/s7.png'
import s8 from '../assets/service/s8.png'
import s9 from '../assets/service/s9.png'
import s10 from '../assets/service/s10.png'
import s11 from '../assets/service/s11.png'
import s12 from '../assets/service/s12.png'


const Service = () => {

  // service event
  const service = [
    { img: s1 }, { img: s2 }, { img: s3 }, { img: s4 }, { img: s5 }, { img: s6 }, { img: s7 }, { img: s8 }, { img: s9 }, { img: s10 }, { img: s11 }, { img: s12 }];

  // Split array into 2 rows
  const firstrow = service.slice(0, 6);
  const secondrow = service.slice(6, 12);

  const ServiceImage = ({ a, i }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      threshold: 1.0, // Trigger when 100% of image is visible
      triggerOnce: false // Set to true if you want animation only once
    })

    // animation for royal service

    return (

      <motion.div
        ref={ref}
        key={i}
        initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
        animate={isInView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
        transition={{ duration: 0.3, delay: i * 0.2 }}
        style={{
          flex: '0 0 auto',
          margin: '10px'
        }}>

        <img src={a.img} alt={`service-${i}`} style={{ width: "170px", height: "auto" }} />
      </motion.div>
    )
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>

      <Box>
        <Typography variant='h6' sx={{
          fontFamily: "Malevolent",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "6rem" },
          color: "#a00000",
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: "50%" },
          marginLeft: { lg: "6%", xs: "0%" },
          letterSpacing: "8px",
          marginTop:{xs:"80px",md:"0px"}
        }}>ROYAL SERVICE</Typography>

      </Box>

      <Box sx={{ padding: 2 }}>
        {/* First Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: isMobile ? 'nowrap' : 'nowrap',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'stretch',
            overflowX: isMobile ? 'visible' : 'auto',
            marginBottom: 4}}>

          {firstrow.map((a, i) => (
            <ServiceImage key={i} a={a} i={i} />
          ))}
        </Box>

        {/* Second Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: isMobile ? 'nowrap' : 'nowrap',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'stretch',
            overflowX: isMobile ? 'visible' : 'auto'}}>

          {secondrow.map((a, i) => (
            <ServiceImage key={i + 6} a={a} i={i + 6} />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Service
