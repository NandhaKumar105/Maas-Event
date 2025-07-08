import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import img1 from '../assets/spotevent/sle1.png';
import img2 from '../assets/spotevent/sle2.png';
import img3 from '../assets/spotevent/sle3.png';
import img4 from '../assets/spotevent/sle4.png';
import img5 from '../assets/spotevent/sle5.png';
import img6 from '../assets/spotevent/sle6.png';
import img7 from '../assets/spotevent/sle7.png';
import img8 from '../assets/spotevent/sle8.png';
import img9 from '../assets/spotevent/sle9.png';
import img10 from '../assets/spotevent/sle10.png';
import img12 from '../assets/spotevent/sle12.png';
import img14 from '../assets/spotevent/sle14.png';
import img13 from '../assets/spotevent/sle13.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img12, img14, img13];

const getRandomStyle = () => {
  const top = 0 + Math.random() * 60;
  const left = 5 + Math.random() * 85;
  // const rotate = (Math.random() - 0.5) * 20;
  return { top, left };
};

const MotionTypography = motion(Typography);

const SpotlightCollage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      {/* Background scattered images */}
      {images.map((img, index) => {
        const { top, left, rotate } = getRandomStyle();
        return (
          <motion.img
            key={index}
            src={img}
            alt={`bg-${index}`}
            initial={{ opacity: 0, y: 10 }}
            whileHover={{
              opacity: 1,
              y: -20,

              transition: { duration: 0.1 },
            }}
            style={{
              position: 'absolute',
              top: `${top}%`,
              left: `${left}%`,
              width: '200px',
              height: 'auto',
              transform: `rotate(${rotate}deg)`,
              zIndex: 1,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transition: 'opacity 0.4s ease',
              rotate: "5deg",
            }}
          />
        );
      })}

      {/*  Text */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
        }}
      >
        {/* Spotlight left */}
        <MotionTypography
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          sx={{
            fontFamily: 'Malevolent, cursive',
            fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem', xl: '6.5rem' },
            color: 'black',
            marginRight: { md: "300px", xs: "0px", sm: "300px" }
          }}
        >
          Spotlight
        </MotionTypography>

        {/* Event - center*/}
        <MotionTypography
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          sx={{
            fontFamily: 'Georgia, serif',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
            color: '#990000',
          }}
        >
          Event
        </MotionTypography>

        {/* Pics - right */}
        <MotionTypography
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          sx={{
            fontFamily: 'Malevolent, cursive',
            fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem', xl: '6.5rem' },
            color: 'black',
            mt: 1,
            marginLeft: { md: "300px", xs: "0px", sm: "300px" }
          }}
        >
          Pics
        </MotionTypography>
      </Box>
    </Box>
  );
};

export default SpotlightCollage;

