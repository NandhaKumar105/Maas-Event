import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import team1 from "../assets/team/t1.jpg";
import team2 from "../assets/team/t2.jpg";
import team3 from "../assets/team/t3.jpg";
import { Box, Typography } from "@mui/material";

// 👇 Single card with isolated hover effect
const TeamCard = ({ img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          width: 300,
          height: 400,
          borderRadius: 20,
          // boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
          perspective: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          overflow: "hidden",
        }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}>
          
        <img
          src={img}
          alt="team"
          style={{
            width: "100%",
            height: "100%",
            // objectFit: "cover",
            borderRadius: 20,
          }}
        />
      </motion.div>
    </>
  );
};

const Team = () => {
  const team = [team1, team2, team3];

  return (

    <>
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
        textAlign: "center",}}>
          Magic Makers Behind the Curtain</Typography>

      <Box
        sx={{
          display: "flex",
          gap: "80px",
          justifyContent: "center",
          flexWrap: "wrap",
          py: 4,
        }}>

        {team.map((t, i) => (
          <TeamCard key={i} img={t} />
        ))}
      </Box>
    </>
  );
};

export default Team;

