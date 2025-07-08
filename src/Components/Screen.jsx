import React, { useRef, useState } from 'react';
import { AppBar, Box, Button, Card, CardContent, Drawer, duration, IconButton, List, ListItem, ListItemText, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, px, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import screen6 from '../assets/screen/screen 6.png'
import screen1 from '../assets/screen/screen 01.png'
import screen2 from '../assets/screen/screen 02.png'
import screen3 from '../assets/screen/screen 03.png'
import screen4 from '../assets/screen/screen 4.png'
import screen5 from '../assets/screen/screen 5.png'

const Screen = () => {

  //screen
  const screen = [{ scr: screen6 }, { scr: screen1 }, { scr: screen2 }, { scr: screen3 }, { scr: screen4 }, { scr: screen5 }]

  return (
    <>
      {/* screen */}

      <Box>

        {screen.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }} style={{ position: "sticky", top: "90px", marginTop: "30px" }}>

            {/* <img src={s.scr} style={{width:"70%",height:"50%",marginTop:"80px"}}/> */}

            <Box
              component="img"
              src={s.scr}
              sx={{
                width: {
                  xs: "100%",
                  sm: "90%",
                  md: "80%",
                  lg: "72%",
                },
                height: "auto",
                maxHeight: "90vh",
                marginTop: "80px",
                // objectFit: "contain",
                display: "block",
                mx: "auto",
                boxShadow: "0px 10px 10px 5px grey",
                borderRadius: { lg: "15px", xs: "0px", sm: "15px" }

              }}
            />
          </motion.div>
        )
        )}
      </Box>

    </>
  )
}

export default Screen





