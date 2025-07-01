// import React, { useRef, useState } from 'react';
// import { AppBar, Box, Button, Card, CardContent, Drawer, duration, IconButton, List, ListItem, ListItemText,Link, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
// import { motion, px, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
// import pic1 from '../assets/home/pic1.png'
// import pic2 from '../assets/home/pic2.png';
// import pic3 from '../assets/home/pic3.png';
// import pic4 from '../assets/home/pic4.png';
// import pic5 from '../assets/home/pic5.png';
// import logo from '../assets/home/logo.png';
// import light from '../assets/home/light.png'
// import MenuIcon from '@mui/icons-material/Menu';


 

// const Home = () => {

//    // animation

//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end end']
//   });

//   const imagetransforms = (start, end) => {
//     const opacity = useTransform(scrollYProgress, [start, end, end + 0.1], [0, 1, 0]); // In + Out fade
//     const y = useTransform(scrollYProgress, [start, end], ['50%', '0%']);
//     return { opacity, y };
//   };

//   // duration

//   const transforms = [
//     imagetransforms(0.0, 0.2),
//     imagetransforms(0.2, 0.4),
//     imagetransforms(0.4, 0.6),
//     imagetransforms(0.6, 0.8),
//     imagetransforms(0.8, 1.0),
//   ];

//   //Navbar appears after 80% scroll
//   const navopacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);

//   // hamburger
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const menuItems = [ { label: 'HOME', href: '#home' },
//   { label: 'EVENTS', href: '#service' },
//   { label: 'GALLERY', href: '#gallery' },
//   { label: 'TEAM', href: '#team' },
//   { label: 'TESTIMONIAL', href: '#testimonial' },
//   { label: 'CONTACT US', href: '#contact' },];

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const MotionTypography = motion(Typography);

//   return (
//     <>


//      <Box ref={ref} sx={{ height: '500vh', position: 'relative', }}>
//             <Box sx={{ position: 'sticky', top: 0, height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
    
//               <motion.img src={pic1} alt="pic1" style={{
//                 position: 'absolute', width: '100%', height: '100%', maxWidth: '100vw', maxHeight: '100vh',
//                 objectFit: 'fill', opacity: transforms[0].opacity, y: transforms[0].y, zIndex: 5,
//               }} />
    
//               <motion.img src={pic2} alt="pic2" style={{
//                 position: 'absolute', width: '100%', height: "100%", maxWidth: '100vw', maxHeight: '100vh',
//                 objectFit: 'cover', opacity: transforms[1].opacity, y: transforms[1].y, zIndex: 4,
//               }} />
    
//               <motion.img src={pic3} alt="pic3" style={{
//                 position: 'absolute', width: '100%', height: "100%", maxWidth: '100vw', maxHeight: '100vh',
//                 objectFit: 'cover', opacity: transforms[2].opacity, y: transforms[2].y, zIndex: 3,
//               }} />
    
//               <motion.img src={pic4} alt="pic4" style={{
//                 position: 'absolute', width: '100%', height: "100%", maxWidth: '100vw', maxHeight: '100vh',
//                 objectFit: 'cover', opacity: transforms[3].opacity, y: transforms[3].y, zIndex: 2,
//               }} />
    
//               <motion.img src={pic5} alt="pic5" style={{
//                 position: 'absolute', width: '100%', height: "100%", maxWidth: '100vw', maxHeight: '100vh',
//                 objectFit: 'cover', opacity: transforms[4].opacity, y: transforms[4].y, zIndex: 1,
//               }} />
    
//             </Box>
//           </Box>
    
          // <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, opacity: navopacity, zIndex: 100, }}>
    
          //   {/* navbar */}
    
          //   <AppBar sx={{ backgroundColor: '#FEE9D8' }}>
          //     <Toolbar>
          //       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          //         <img src={logo} alt="Logo" style={{ height: 90, marginRight: 16, width: 100 }} />
    
          //         <Stack direction='row' spacing={4} sx={{ display: { xs: "none", sm: 'flex' } }}>
          //           {menuItems.map((item) => (
          //             <Link key={item.label} href={item.href} sx={{ cursor: 'pointer', fontSize: { sm: '14px' }, color: "#A00705", fontWeight: "bold",textDecoration:"none" }}>
          //               {item.label}
          //             </Link>
          //           ))}
          //         </Stack>
    
          //         {/* Mobile Hamburger */}
          //         <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={toggleDrawer(true)} sx={{ display: { xs: 'flex', sm: 'none' } }}>
          //           <MenuIcon />
          //         </IconButton>
    
          //       </Box>
          //     </Toolbar>
          //   </AppBar>
          // </motion.div>
    
          // {/* Mobile Drawer */}
          // <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          //   <Box sx={{ width: 250, color: "#A00705", fontWeight: "bold", backgroundColor: '#FEE9D8', height: '100vh' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          //     <List>
          //       {menuItems.map((text) => (
          //         <ListItem button key={text}>
          //           <ListItemText primary={text} />
          //         </ListItem>
          //       ))}
          //     </List>
          //   </Box>
          // </Drawer>
    
          // {/* light */}
    
    
          // <Box sx={{ position: 'relative', height: { xs: 'auto', md: '100vh' }, overflow: 'hidden' }}>
          //   {/* HANGING LIGHT IMAGE */}
          //   <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, width: { xs: '100%', md: 'auto' }, maxHeight: { xs: '300px', md: '600px' }, }}>
          //     <Box component={motion.img} src={light} alt="light" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }}
          //       transition={{ duration: 2 }} sx={{ width: { xs: "100%", md: "90%" }, height: "auto", objectFit: "contain", marginLeft: { xs: "0", md: "10%" }, }} />
          //   </Box>
    
          //   {/* TEXT & BUTTON */}
          //   <Box sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 10 }, pt: { xs: '320px', md: '150px' }, }}>
          //     <MotionTypography
          //       variant="h2"
          //       initial={{ opacity: 0, x: "-100%" }}
          //       whileInView={{ opacity: 1, x: 0 }}
          //       transition={{ duration: 1.5 }}
          //       sx={{fontFamily: "Malevolent",fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "6rem" },color: "#a00000",
          //       textAlign: { xs: "center", md: "left" },maxWidth: { xs: "100%", md: "50%" },}}>
          //       Where<br />Moments<br />Become Magic <br />
    
          //       <Button
          //         variant="outlined"
          //         sx={{borderColor: "#a00000",marginTop: { xs: "0px", sm: "0px", md: "15%" },marginLeft: { xs: "0px", sm: "0px", md: "65%" },
          //           color: "#a00000",width: { xs: "220px", sm: "250px", md: "300px", lg: "400px" },
          //           "&:hover": {
          //             backgroundColor: "#a00000",
          //             color: "#fff",
          //           }
          //         }}
          //       >
          //         TO REQUEST A BOOKING
          //       </Button>
    
          //     </MotionTypography>
          //   </Box>
          // </Box>
    
//     </>
//   )
// }

// export default Home




import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Card, CardContent, Drawer, duration, IconButton, List, ListItem, ListItemText,Link, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence,px, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
// import pic1 from "../assets/home/pic1.png";
import pic2 from "../assets/home/pic2.png";
import pic3 from "../assets/home/pic3.png";
import pic4 from "../assets/home/pic4.png";
import logo from "../assets/home/logo.png";
import light from '../assets/home/light.png'
import MenuIcon from '@mui/icons-material/Menu';


const Home = () => {
  const logos = [ pic2, pic3, pic4];
  const [index, setIndex] = useState(0);  //  index-->initial start from logos[0]
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    if (index < logos.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2500); // Each image shown for 2.5s
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 2500); // Finish after last logo
      return () => clearTimeout(timer);
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
   const menuItems = [ { label: 'HOME', href: '#home' },
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
            // backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <AnimatePresence mode="wait"> {/* wait for another imgae */}
            <Box component= {motion.img}
              key={index}
              src={logos[index]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              sx={{ width: "100vw", height: "100vh",objectFit:"cover" }}
            />
          </AnimatePresence>
        </div>
      ) : (
        <div
          // style={{
          //   height: "100vh",
          //   width: "100vw",
          //   // backgroundColor: "#111",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   color: "white",
          //   fontSize: "24px"
          // }}
        >
          {/* After animation ends, show homepage or main app */}
          {/* Welcome to Home Page */}

            <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0,  zIndex: 100, }}>
    
            {/* navbar */}
    
            <AppBar sx={{ backgroundColor: '#FEE9D8' }}>
              <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <img src={logo} alt="Logo" style={{ height: 90, marginRight: 16, width: 100 }} />
    
                  <Stack direction='row' spacing={4} sx={{ display: { xs: "none", sm: 'flex' } }}>
                    {menuItems.map((item) => (
                      <Link key={item.label} href={item.href} sx={{ cursor: 'pointer', fontSize: { sm: '14px' }, color: "#A00705", fontWeight: "bold",textDecoration:"none" }}>
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
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250, color: "#A00705", fontWeight: "bold", backgroundColor: '#FEE9D8', height: '100vh' }}  onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <List>
                {menuItems.map((text) => (
                  <ListItem button key={text.label}>
                    <ListItemText primary={text.label} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
    
         


        </div>
      )}


       {/* light */}
    
    
          <Box sx={{ position: 'relative', height: { xs: 'auto', md: '100vh' }, overflow: 'hidden' }}>
            {/* HANGING LIGHT IMAGE */}
            <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, width: { xs: '100%', md: 'auto' }, maxHeight: { xs: '300px', md: '600px' }, }}>
              <Box component={motion.img} src={light} alt="light" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }} sx={{ width: { xs: "100%", md: "90%",xl:"100%" }, height: "auto", objectFit: "contain", marginLeft: { xs: "0", md: "10%"} }} />
            </Box>
    
            {/* TEXT & BUTTON */}
            <Box sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 10 }, pt: { xs: '320px', md: '150px' }, }}>
              <MotionTypography
                variant="h2"
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                sx={{fontFamily: "Malevolent",fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem", lg: "6rem",xl:"8rem" },color: "#a00000",
                textAlign: { xs: "center", md: "left" },maxWidth: { xs: "100%", md: "50%" }}}>
                Where<br />Moments<br />Become Magic <br />
    
                <Button
                  variant="outlined"
                  sx={{borderColor: "#a00000",marginTop: { xs: "0px", sm: "0px", md: "15%",xl:"1%" },marginLeft: { xs: "0px", sm: "0px", md: "65%" },
                    color: "#a00000",width: { xs: "220px", sm: "250px", md: "300px", lg: "400px" },
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


