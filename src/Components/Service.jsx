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
  const isInView = useInView(containerRef, { once: false });
  const [spread, setSpread] = useState(false);
  const [straighten, setStraighten] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (isInView) {
      setSpread(false);
      setStraighten(false);

      const spreadTimer = setTimeout(() => setSpread(true), 1000);
      const straightenTimer = setTimeout(() => setStraighten(true), 2300);

      return () => {
        clearTimeout(spreadTimer);
        clearTimeout(straightenTimer);
      };
    }
  }, [isInView]);

  return (
    <>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Malevolent',
            fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem', lg: '6rem' },
            color: '#a00000',
            textAlign: { xs: 'center', md: 'left' },
            marginLeft: { lg: '6%', xs: '0%' },
            letterSpacing: '8px',
            mt: { xs: '80px', sm: '120px', md: '0px' }
          }}
        >
          ROYAL SERVICE
        </Typography>
      </Box>

      <Box  ref={containerRef} sx={{ px: 2, py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: spread ? '20px' : '0px',
            transition: 'gap 0.3s ease-in-out',
            maxWidth: '100%',
          }}
        >
          {services.map((img, i) => {
            const isTopRow = i < 6;
            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.3,
                  rotateZ: -40,
                  y: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateZ: straighten ? 0 : -25,
                  y: spread ? (isTopRow ? -30 : -30) : 0, // step 2 → up/down
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05,
                  ease: 'easeInOut',
                }}
                style={{
                  flex: '0 0 calc(16.66% - 20px)',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={img}
                  alt={`service-${i}`}
                  style={{
                    width: isMobile ? '130px' : '160px',
                    height: 'auto',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',

                  }}
                />
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Service;


