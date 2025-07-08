import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import s1 from '../assets/service/s1.png';
import s2 from '../assets/service/s2.png';
import s3 from '../assets/service/s3.png';
import s4 from '../assets/service/s4.png';
import s5 from '../assets/service/s5.png';
import s6 from '../assets/service/s6.png';
import s7 from '../assets/service/s7.png';
import s8 from '../assets/service/s8.png';
import s9 from '../assets/service/s9.png';
import s10 from '../assets/service/s10.png';
import s11 from '../assets/service/s11.png';
import s12 from '../assets/service/s12.png';

const services = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];

const Service = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 1.0 });
  const [spread, setSpread] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (isInView) {
      setSpread(false); // Reset
      const timer = setTimeout(() => setSpread(true), 1500); // Delay for effect
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // useEffect(() => {
  //   const timer = setTimeout(() => setSpread(true), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Box ref={containerRef}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Malevolent',
            fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem', lg: '6rem' },
            color: '#a00000',
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: { xs: '100%', md: '50%' },
            marginLeft: { lg: '6%', xs: '0%' },
            letterSpacing: '8px',
            marginTop: { xs: '80px', md: '0px',sm:"120px",lg:"0px",xl:"0px" }
          }}
        >
          ROYAL SERVICE
        </Typography>
      </Box>

      <Box sx={{ px: 2, py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: spread ? 'wrap' : 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: spread ? 'visible' : 'visible',
            // transition: 'all 0.2s ease-in-out',
            gap: 0,
            maxWidth: '100%',
          }}
        >
          {services.map((img, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                rotateZ: 20,
                scale: 0.2,
              }}
              animate={{
                opacity: 1,
                rotateZ: spread ? 0 : -45,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
                // delay: i * 0.1,
              }}
              style={{
                margin: spread ? '10px' : `0 -60px`,
                flex: spread ? '1 0 calc(16.66% - 20px)' : '0 0 auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={img}
                alt={`service-${i}`}
                style={{
                  width: isMobile ? '140px' : '170px',
                  height: 'auto',

                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Service;

