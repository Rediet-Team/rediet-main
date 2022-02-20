import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// MUI
import { Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import { makeStyles, createStyles, useTheme } from "@mui/styles";

// Assets
import BG from "assets/images/SearchBG.svg";

// Services
import { getRecipes, getCategories } from "services";

// Carousel Imports
import Carousel from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "auto",
      width: "100%",
    },
    overlay: {
      height: "100%",
      borderRadius: "20px",
      background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4), rgba(0,0,0,0.5))`,
    },
  })
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Ingredient = () => {
  const { ingredient } = useParams();
  const [results, setResults] = useState([]);
  const classes = useStyle();
  const theme = useTheme();

  const lg = useMediaQuery(theme.breakpoints.up("md"));
  const md = useMediaQuery(
    theme.breakpoints.down("lg") && theme.breakpoints.up("sm")
  );
  const sm = useMediaQuery(
    theme.breakpoints.down("md") && theme.breakpoints.up("xs")
  );
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!!ingredient) {
      let GetList = async (ingredient) => {
        let res = await getRecipes(ingredient);
        await getCategories();
        setResults(res);
      };
      GetList(ingredient);
    }
  }, [ingredient]);

  useEffect(() => {
    if (results) {
      console.log("Results Testing", results);
    }
  }, [results]);

  return (
    <Grid container className={classes.root} direction="column">
      <Grid item xs={12}>
        <Paper
          style={{
            padding: "3rem",
            background: `url('${BG}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
        >
          <Typography align="center" variant="h4">
            {ingredient.toUpperCase()}
          </Typography>
        </Paper>
      </Grid>

      <Grid
        sx={{
          paddingLeft: lg ? "6rem" : "1.5rem",
          paddingRight: lg ? "6rem" : "1.5rem",
          paddingTop: lg ? "3rem" : "2rem",
          paddingBottom: "2rem",
        }}
        item
        container
        xs={12}
        spacing={3}
      >
        <Grid item xs={12} sx={{ height: "25rem" }}>
          <Carousel style={{ margin: "0 2rem" }} {...settings}>
            {results &&
              results.length > 0 &&
              results.map((res, index) => (
                <React.Fragment key={index}>
                  <Paper
                    key={index}
                    elevation={0}
                    style={{
                      boxShadow: `rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                      rgb(0 0 0 / 73%) 0px 16px 10px -10px`,
                      position: "relative",
                      margin: "0 0.5rem",
                      borderRadius: "20px",
                      height: xs ? "20rem" : sm ? "20rem" : "15rem",
                      // background: `url('${image}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPositionY: "center",
                      backgroundPositionX: "center",
                    }}
                  ></Paper>
                </React.Fragment>
              ))}
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Ingredient;
{
  /* <Paper
                  key={index}
                  elevation={0}
                  style={{
                    margin: "0 0.5rem",
                    borderRadius: "20px",
                    height: xs ? "20rem" : sm ? "20rem" : "15rem",
                    background: `url('${image}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    backgroundPositionX: "center",
                  }}
                >
                  <div className={classes.overlay} />
                </Paper> */
}
