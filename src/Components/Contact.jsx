import { Box, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <>


      <Box sx={{
        width: { xs: "97%", md: "55%" }, border: "2px grey solid", borderRadius: "8px", marginLeft: { xs: "5px", md: "22%" },
        marginBottom: "-40px", zIndex: "2", position: "relative", backgroundColor: "white",marginTop:"20%"
      }}>

        <Typography
          sx={{
            fontFamily: "Malevolent, cursive", color: "#990000",
            fontSize: {
              xs: "2.5rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "4rem",
              xl: "2.5rem",
            },
            marginLeft: { md: "30px", xs: "0px" },
            letterSpacing: "0px",
            textAlign: { xs: "center", md: "left" },
          }}>
          Contact Us
        </Typography>

        <Typography sx={{ marginLeft: "30px" }}>We'll response your query within one business day.</Typography>



        {/* <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6"> */}

        <form >

          <div className="container my-3">
            <div className="row mb-3">
              {/* Name Field */}
              <div className="col-md-6">
                <label className="form-label contact-label">Name</label>
                <input type="text" className="form-control contact-input" placeholder="Redrixx" style={{ backgroundColor: "#FEE9D8" }} />
              </div>

              {/* Phone Field */}
              <div className="col-md-6">
                <label className="form-label contact-label">Phone</label>
                <input type="number" className="form-control contact-input" placeholder="+91 123456789" style={{ backgroundColor: "#FEE9D8" }} />
              </div>

              {/*help  */}
              <div className="mb-3">
                <label className="form-label">How can we help?</label>
                <textarea className="form-control" id="comments" rows="3" placeholder="Tell me your need" style={{ backgroundColor: "#FEE9D8" }} required></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className=" btn px-4" style={{ backgroundColor: "#FEE9D8", width: "280px" }}>Send to us!</button>
              </div>

            </div>

          </div>
        </form>
      </Box>

    </>
  )
}

export default Contact

