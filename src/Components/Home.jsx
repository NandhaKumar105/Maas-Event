import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Card, CardContent, Drawer, duration, IconButton, List, ListItem, ListItemText, Link, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence, px, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
// import pic1 from "../assets/home/pic1.png";
import pic2 from "../assets/home/pic2.png";
import pic3 from "../assets/home/pic3.png";
import pic4 from "../assets/home/pic4.png";
import logo from "../assets/home/logo.png";
import light from '../assets/home/light.png'
import image from "../assets/home/image.jpeg";
import MenuIcon from '@mui/icons-material/Menu';


const Home = () => {
  const logos = [pic2];
  const [index, setIndex] = useState(0);  //  index-->initial start from logos[0]
  const [showAnimation, setShowAnimation] = useState(true);
  const [startSlideUp, setStartSlideUp] = useState(false);
  const [revealStep, setRevealStep] = useState(false);
  const [showComposite, setShowComposite] = useState(false);

  useEffect(() => {
    let slideTimer;
    let revealTimer;
    let endTimer;

    if (index === 0) {
      slideTimer = setTimeout(() => {
        setStartSlideUp(true); // slide pic2 up
      }, 1000);

      // Start showing pic2 fades out
      revealTimer = setTimeout(() => {
        setShowComposite(true); // show logo
      }, 2500); // fade starts 

      // Trigger logo zoom + white fade
      endTimer = setTimeout(() => {
        setRevealStep(true);
      }, 4500); 

      // Finish animation and move forward
      const finish = setTimeout(() => {
        setShowAnimation(false);
      }, 7000);

      return () => {
        clearTimeout(slideTimer);
        clearTimeout(revealTimer);
        clearTimeout(endTimer);
        clearTimeout(finish);
      };
    }
  }, [index]);


  // scroll disable when animating
  useEffect(() => {
    if (showAnimation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAnimation]);



  // hamburger
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItems = [{ label: 'HOME', href: '#home' },
  { label: 'EVENTS', href: '#service' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'TEAM', href: '#team' },
  { label: 'TESTIMONIAL', href: '#testimonial' },
  { label: 'CONTACT US', href: '#contact' },];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const MotionTypography = motion(Typography);

  return (
    <>
      {showAnimation ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#fffbf2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <AnimatePresence mode="wait">
            <>
              {/* pic2 fade out + slide up */}
              {index === 0 && (
                <Box
                  component={motion.img}
                  key="pic2"
                  src={logos[0]}
                  initial={{ y: 400, opacity: 1 }}
                  animate={startSlideUp ? { y: 0, opacity: 1 } : { y: 400, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  sx={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                />
              )}

              {/* fadeout of pic2 */}
              {showComposite && (
                <Box
                  key="composite"
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff', 
                    zIndex: 2,
                  }}
                >
                  {/* Logo image */}
                  <Box
                    component={motion.img}
                    src={logo}
                    initial={{ scale: 1 }}
                    animate={revealStep ? { scale: 0.7 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      position: 'absolute',
                      width: {xs:'80vw',md:'30vw',sm:'30vw',xl:'30vw',lg:'30vw'},
                      height: 'auto',
                      zIndex: 2,
                    }}
                  />

                  {/* White shape overlay */}
                  <Box
                    component={motion.img}
                    src={image}
                    initial={{ opacity: 1 }}
                    animate={
                      revealStep
                        ? { opacity: 0, x: 100, y: 100 }  
                        : { opacity: 1, x: 0, y: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    sx={{
                      position: 'relative',
                      top: '8px',
                      width: {xs:'30vw',md:'11vw',sm:'11vw',lg:'11vw',xl:'11vw'},
                      height: 'auto',
                      zIndex: 3,
                    }}
                  />
                </Box>
              )}
            </>

          </AnimatePresence>

        </div>
      ) : (
        <div>
          {/* After animation ends, show homepage*/}
          <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, }}>

            {/* navbar */}

            <AppBar sx={{ backgroundColor: '#FEE9D8' }}>
              <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <img src={logo} alt="Logo" style={{ height: 90, marginRight: 16, width: 100 }} />

                  <Stack direction='row' spacing={4} sx={{ display: { xs: "none", sm: 'flex' } }}>
                    {menuItems.map((item) => (
                      <Link key={item.label} href={item.href} sx={{ cursor: 'pointer', fontSize: { sm: '14px',xl:"18px" }, color: "#A00705", fontWeight: "bold", textDecoration: "none" }}>
                        {item.label}
                      </Link>
                    ))}
                  </Stack>

                  {/* Mobile Hamburger */}
                  <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={toggleDrawer(true)} sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <MenuIcon />
                  </IconButton>

                </Box>
              </Toolbar>
            </AppBar>
          </motion.div>

          {/* Mobile Drawer */}
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ height: 250, color: "#A00705", fontWeight: "bold", backgroundColor: '#FEE9D8', width: '100vw',}} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            
                {menuItems.map((text) => (
                   <List>
                  <Link sx={{color:"#A00705",textDecoration:"none",textAlign:"center" }} button key={text.label} href={text.href}>
                    <ListItemText primary={text.label} />
                  </Link>
                   </List>
                ))}
            </Box>
          </Drawer>
        </div>
      )}

      {/* light */}
      <Box sx={{ position: 'relative', height: { xs: 'auto', md: '100vh' }, overflow: 'hidden' }}>
        {/* HANGING LIGHT IMAGE */}
        <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, width: { xs: '100%', md: 'auto', lg: "58%" }, maxHeight: { xs: '300px', md: '600px' }, marginTop: "-10px" }}>
          <Box component={motion.img} src={light} alt="light" initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 100 }}
            transition={{ duration: 2 }} sx={{ width: { xs: "100%", md: "90%", xl: "100%" }, height:"auto" , objectFit: "contain", marginLeft: { xs: "0", md: "10%" } }} />
        </Box>

        {/* TEXT & BUTTON */}
        <Box sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 10 }, pt: { xs: '320px', md: '150px' }, }}>
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            sx={{
              fontFamily: "Malevolent", fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem", lg: "6rem", xl: "8rem" }, color: "#a00000",
              textAlign: { xs: "center", md: "left" }, maxWidth: { xs: "100%", md: "50%" }
            }}>
            Where<br />Moments<br />Become Magic <br />

            <Button
              variant="outlined"
              sx={{
                borderColor: "#a00000", marginTop: { xs: "0px", sm: "0px", md: "15%", xl: "1%" }, marginLeft: { xs: "0px", sm: "0px", md: "65%" },
                color: "#a00000", width: { xs: "220px", sm: "250px", md: "300px", lg: "400px" },
                "&:hover": {
                  backgroundColor: "#a00000",
                  color: "#fff",
                }
              }}
            >
              TO REQUEST A BOOKING
            </Button>

          </MotionTypography>
        </Box>
      </Box>
    </>
  );
};

export default Home;





