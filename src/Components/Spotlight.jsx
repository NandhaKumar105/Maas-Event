import React, { useRef, useState } from 'react';
import { AppBar, Box, Button, Card, CardContent, Drawer, duration, IconButton, List, ListItem, ListItemText, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, px, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import sle1 from '../assets/spotevent/sle1.png'
import sle12 from '../assets/spotevent/sle12.png'
import sle13 from '../assets/spotevent/sle13.png'
import sle6 from '../assets/spotevent/sle6.png'
import sle5 from '../assets/spotevent/sle5.png'

const Spotlight = () => {

  // spotlight

  const spot = [{ sle: sle1 }, { sle: sle6 }, { sle: sle13 }, { sle: sle12 }, { sle: sle5 }]
  const MotionTypography = motion(Typography);

  return (
    <>
      {/* spotlight */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", sm: "row" }, // stack on mobile, row on desktop
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "75vh",
          padding: { xs: "20px", sm: "30px", md: "40px" },
          gap: { xs: 2, md: 4 }, // space between items
          textAlign: { xs: "center", md: "left" }, // center text on small screens
          flexWrap: "wrap",
        }}>


        {/* Spotlight - From Left */}
        <MotionTypography
          variant="h2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          sx={{
            fontFamily: "Malevolent, cursive",
            color: "black",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "4rem",
              xl: "4.5rem",
            },
          }}>
          Spotlight
        </MotionTypography>

        {/* Event - From Right */}
        <MotionTypography
          variant="h2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          sx={{
            fontFamily: "Georgia, serif",
            color: "#990000",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3.5rem",
              lg: "4rem",
              xl: "4.5rem",
            },
            marginRight: { md: "50px", sm: "0px" }
          }}>
          Event
        </MotionTypography>

        {/* Picks - From Right */}
        <MotionTypography
          variant="h2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
          sx={{
            fontFamily: "Malevolent, cursive",
            color: "black",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
              xl: "4rem",
            },
          }}>
          Picks
        </MotionTypography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",          // center on all screens
            alignItems: "center",
            gap: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },       // responsive spacing between boxes
            p: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 },
            // maxWidth: "1200px",  //  Limit width on large screens
            // margin: "0 auto",
          }}>

          {spot.map((spot, i) => (
            <Box
              key={i}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",

                "&:hover img": {
                  opacity: 1,
                  transform: "scale(1.05)",
                },
                "& img": {
                  transition: "all 0.3s ease-in-out",
                  opacity: 0,
                },
              }}>

              <img
                src={spot.sle}
                alt={`spot ${i}`}
                width="100%"
                style={{
                  maxWidth: "200px",            // limits max width
                  height: "auto",               // keeps image ratio
                  display: "block",
                }} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Spotlight
