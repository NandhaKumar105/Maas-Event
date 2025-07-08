import React, { useRef, useState } from "react";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame from "../assets/testimonial/Frame.png";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [rotation, setRotation] = useState(0);

  const testimonials = [
    {
      img: Frame,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores dolore, ea delectus veniam blanditiis, excepturi sint perferendis rem eaque deserunt corporis maxime id. Debitis, voluptate dolorum. ",
      name: "Peter, Belgium"
    },
    {
      img: Frame,
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus facere porro nobis ratione earum neque adipisci, rerum, molestias, eligendi numquam quos. Debitis, voluptate dolorum.",
      name: "Kerl, UK"
    },
    {
      img: Frame,
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus facere porro nobis ratione earum neque adipisci, rerum, molestias, eligendi numquam quos. Debitis, voluptate dolorum.",
      name: "Brook, England"
    },
    {
      img: Frame,
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus facere porro nobis ratione earum neque adipisci, rerum, molestias, eligendi numquam quos. Debitis, voluptate dolorum.",
      name: "Alex, France"
    }
  ];

  const handleNext = () => {
    setRotation(-8); // rotate left
    setTimeout(() => {
      sliderRef.current.slickNext();
      setRotation(0);
    }, 300);
  };

  const handlePrev = () => {
    setRotation(8); // rotate right
    setTimeout(() => {
      sliderRef.current.slickPrev();
      setRotation(0);
    }, 300);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (_, newIndex) => {
      setActiveSlide(newIndex);
    },
    responsive: [

      {
        breakpoint: 1600, // extra large 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200, // laptops & desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 6, px: 3 }}>
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Malevolent, cursive",
          color: "#990000",
          fontSize: {
            xs: "2.5rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "4rem",
            xl: "5.5rem",
          },
          marginLeft: { md: "50px", xs: "0px" },
          letterSpacing: "8px",
          textAlign: { xs: "center", md: "left" },
        }}>
        TESTIMONIALS
      </Typography>

      <Typography
        sx={{
          fontFamily: "Josefin Slab",
          color: "#990000",
          fontSize: {
            xs: "1.7rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "4rem",
            xl: "3rem",
          },
          textAlign: "center",
        }}>
        Voices of Celebration
      </Typography>

      {/* Slider */}
      <Box maxWidth="95%" mx="auto">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => {
            const isActive = index === activeSlide;
            return (
              <Box key={index} px={2}>
                <motion.div
                  animate={{
                    rotate: rotation,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 340,
                      mx: "auto",
                      bgcolor: isActive ? "#F5F2ED" : "#fff",
                      transition: "0.3s ease",
                      boxShadow: isActive ? 6 : 2,
                      borderRadius: 3,
                      marginTop: "20px"
                    }}
                  >
                    <CardContent>
                      <img src={item.img} alt="Frame" width={50} />
                      <Typography variant="body1" mt={2}>
                        {item.para}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ mt: 1, opacity: 0.7 }}>
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            );
          })}
        </Slider>

        {/* Arrows Below */}
        <Box textAlign="center" mt={4}>
          <IconButton
            onClick={handlePrev}
            sx={{
              marginLeft: { md: "80%", lg: "80%", xs: "0%", sm: "80%" }
            }}>
            <ArrowBackIos />
          </IconButton>

          <IconButton
            onClick={handleNext}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;

