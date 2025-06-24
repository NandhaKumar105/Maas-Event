import React, { useRef, useState } from 'react';
import { AppBar, Box, Button, Card, CardContent, Drawer, duration, IconButton, List, ListItem, ListItemText, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, px, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import g1 from '../assets/gallery/g1.png'
import g2 from '../assets/gallery/g2.png'
import g3 from '../assets/gallery/g3.png'
import g4 from '../assets/gallery/g4.png'
import g5 from '../assets/gallery/g5.png'
import g6 from '../assets/gallery/g6.png'
import g7 from '../assets/gallery/g7.png'
import g8 from '../assets/gallery/g8.png'


const Gallery = () => {

   // gallery
  
    const gallery = [{ gal: g1 }, { gal: g3 }, { gal: g5 }, { gal: g7 }, { gal: g2 }, { gal: g4 }, { gal: g6 }, { gal: g8 }]
    const galref = useRef(null);
    const isInView = useInView(galref, { once: false, margin: "-100px 0px" });
  

  return (
    <>

      {/* gallery */}
    
          <Box>
            <Typography variant='h6' sx={{
              fontFamily: "Malevolent",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "6rem" },
              color: "#a00000",
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "50%" },
              marginLeft: { lg: "6%", xs: "0%" },
              letterSpacing:"8px", 
              marginTop:{xs:"40px",md:"0px"}}}>GALLERY</Typography>

    
            <Typography variant='h6' sx={{
              fontFamily: "Josefin Slab",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "3rem" },
              color: "#a00000",
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "50%" },
              marginLeft: { lg: "40%", xs: "0%" }}}>Frames of Forever</Typography>

    
            <Box ref={galref}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '20px',
                gridTemplateColumns: {
                  xs: "1fr", // 1 column on extra small screens
                  sm: "repeat(2, 1fr)", // 2 columns on small screens, 1 fraction space
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },}}>


              {gallery.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.4 }}
                  style={{ borderRadius: '12px', overflow: 'hidden' }}>


                  <img src={g.gal} alt={`gallery-${i}`}
                    style={{
                      // width: "260px",
                      // height: "250px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginTop: "30px"
                    }}/>
                </motion.div>
              ))}
            </Box>
          </Box>
    </>
  )
}

export default Gallery
