import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion, useInView } from "framer-motion";
import team1 from "../assets/team/t1.jpg";
import team2 from "../assets/team/t2.jpg";
import team3 from "../assets/team/t3.jpg";

const teamMembers = [
  {
    name: "Sarah",
    role: "Founder | Events & Managing Director",
    img: team1,
    color: "#58f28c"
  },
  {
    name: "Jane",
    role: "Events Director | Head of Operations",
    img: team2,
    color: "#90e0ef"
  },
  {
    name: "Joseph",
    role: "Creative Director | Experience & Design Strategist",
    img: team3,
    color: "#f3c4fb"
  }
];

const TeamSection = () => {
  // const [isUpright, setIsUpright] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsUpright(true);
  //   }, 1000); // 2-second delay
  //   return () => clearTimeout(timer);
  // }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // Re-triggers when re-entered

  return (
    <Box sx={{ p: 5,marginTop:{lg:"80px",xs:"-50px" }, textAlign: "center" }}>

      <Typography sx={{
        fontFamily: "Malevolent, cursive", color: "#990000",
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

      }}>MEET THE TEAM</Typography>


      <Typography sx={{
        fontFamily: "Josefin Slab", color: "#990000",
        fontSize: {
          xs: "1.7rem",
          sm: "2.5rem",
          md: "3rem",
          lg: "4rem",
          xl: "3rem",
        },
        textAlign: "center",
      }}>
        Magic Makers Behind the Curtain</Typography>



      <Grid ref={ref} container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box  sx={{ perspective: "2000px", display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ rotateX: 80, rotateY: 0, opacity: 0.8 }}
                animate={
                  isInView
                    ? {
                      rotateX: 0,
                      opacity: 1,
                      transition: { duration: 1, delay: index * 0.6 }
                    }
                    : {}
                }
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <Card
                  sx={{
                    width: 250,
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: 6,
                    background: "#000",
                    color: "#fff",
                    transformOrigin: "bottom center",
                    marginTop: "20px"
                  }}
                >
                  <Box
                    sx={{
                      height: 250,
                      backgroundImage: `url(${member.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderBottom: `4px solid ${member.color}`,

                    }}
                  />
                  <CardContent>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;


