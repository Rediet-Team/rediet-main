import { Typography } from "@mui/material";
import React from "react";
// import { Grid } from '@mui/material'
import Carousel from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
  dot: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Test() {
  return (
    <Carousel {...settings}>
      <div>
        <Typography color="textPrimary">Item 1</Typography>
      </div>
      <div>
        <Typography>Item 2</Typography>
      </div>
      <div>
        <Typography>Item 2</Typography>
      </div>
    </Carousel>
  );
}
