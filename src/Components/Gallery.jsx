import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import g1 from '../assets/gallery/g1.png';
import g2 from '../assets/gallery/g2.png';
import g3 from '../assets/gallery/g3.png';
import g4 from '../assets/gallery/g4.png';
import g5 from '../assets/gallery/g5.png';
import g6 from '../assets/gallery/g6.png';
import g7 from '../assets/gallery/g7.png';
import g8 from '../assets/gallery/g8.png';

const Gallery = () => {
  const galRef = useRef(null);
  const isInView = useInView(galRef, { once: false, margin: "-100px 0px" });

  // Column-wise
  const columnWiseImages = [
    [g1, g2],
    [g3, g4],
    [g5, g6],
    [g7, g8],
  ];

  return (
    <Box>
      {/* Headings */}
      <Typography variant="h6" sx={{
        fontFamily: "Malevolent",
        fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3.5rem", lg: "6rem" },
        color: "#a00000",
        textAlign: { xs: "center", md: "left" },
        marginLeft: { lg: "6%", xs: "0%" },
        letterSpacing: "8px",
        marginTop: { xs: "40px", md: "0px" }
      }}>
        GALLERY
      </Typography>

      <Typography variant="h6" sx={{
        fontFamily: "Josefin Slab",
        fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "3rem" },
        color: "#a00000",
        textAlign: { xs: "center", md: "left" },
        marginLeft: { lg: "40%", xs: "0%" }
      }}>
        Frames of Forever
      </Typography>

      {/* 4 columns with 2 images each */}
      <Box
        ref={galRef}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          // px: { xs: 2, sm: 4 },
          py: 4,
          flexWrap: 'wrap',
        }}
      >
        {columnWiseImages.map((column, colIndex) => (
          <Box key={colIndex} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {column.map((img, rowIndex) => {
              const animationIndex = colIndex * 2 + rowIndex; // For delay
              return (
                <motion.div
                  key={`${colIndex}-${rowIndex}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: animationIndex * 0.3 }}
                  style={{ borderRadius: '12px', overflow: 'hidden' }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`gallery-${colIndex}-${rowIndex}`}
                    sx={{
                      width: { xs: "300px", sm: "auto", md: "auto", lg: "auto", xl: "auto" },
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </motion.div>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
