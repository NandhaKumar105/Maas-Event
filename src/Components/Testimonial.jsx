import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Frame from '../assets/testimonial/Frame.png'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


const Testimonial = () => {


// arrows
  const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "40%",
      right: 0,
      zIndex: 2,
      color: "#990000",
      backgroundColor: "white",
      '&:hover': { backgroundColor: "#f5f5f5" }
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "40%",
      left: 0,
      zIndex: 2,
      color: "#990000",
      backgroundColor: "white",
      '&:hover': { backgroundColor: "#f5f5f5" }
    }}
  >
    <ArrowBackIos />
  </IconButton>
);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards shown 
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600, // extra large 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // laptops & desktops
        settings: {
          slidesToShow: 2,
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

  const data = [
    {
      img: Frame,
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam fuga, pariatur nobis in, eius ut veritatishic unde iste nesciunt modi excepturi voluptatum",
      name: "Peter, Belgium"
    },

    {
      img: Frame,
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam fuga, pariatur nobis in, eius ut veritatishic unde iste nesciunt modi excepturi voluptatum",
      name: "Kerl, UK"
    },

    {
      img: Frame,
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam fuga, pariatur nobis in, eius ut veritatishic unde iste nesciunt modi excepturi voluptatum",
      name: "Brook, England"
    },

    {
      img: Frame,
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam fuga, pariatur nobis in, eius ut veritatishic unde iste nesciunt modi excepturi voluptatum",
      name: "Brook, England"
    },

    {
      img: Frame,
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam fuga, pariatur nobis in, eius ut veritatishic unde iste nesciunt modi excepturi voluptatum",
      name: "Brook, England"
    }
  ]

  




  return (
    <>
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

      <Box sx={{ width: { xs: "90%", md: "97%" }, mt: 4, marginLeft: { xs: "10px",md:"26px" } }}>
        <Slider {...settings}>
          {data.map((item, i) => (
            <Box key={i} px={1}>
              <Card sx={{ maxWidth: 340, mx: "auto" }}>
                <CardContent>
                  <img src={item.img} />
                  <Typography gutterBottom variant="h6" component="div">
                    {item.para}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>


    </>
  );
};

export default Testimonial;

