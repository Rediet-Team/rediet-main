import React from "react";
import {
  Paper,
  Grid,
  useMediaQuery,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { makeStyles, createStyles, useTheme } from "@mui/styles";
import { deepOrange } from "@mui/material/colors";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Carousel from "react-material-ui-carousel";
import ReDietLogo from "assets/images/ReDiet.png";
import BGImg1 from "assets/images/LoginBG-1.svg";
import BGImg2 from "assets/images/LoginBG-2.svg";
import BGImg3 from "assets/images/LoginBG-3.svg";
import BGImg4 from "assets/images/LoginBG-4.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      margin: "0",
    },
    logo: {
      maxHeight: "8rem",
      marginBottom: "5rem",
    },
    carouselImage: {
      maxHeight: "25rem",
    },
    paper: {
      borderBottomRightRadius: "20px",
      borderTopLeftRadius: "0px",
      minHeight: "100vh",
    },
    carouseItem: {
      minHeight: "30rem",
      padding: theme.spacing(3),
    },
  })
);

const CarouselItems = [
  { img: BGImg3, text: "Text " },
  { img: BGImg4, text: "Text " },
  {
    img: BGImg1,
    text: "Text ",
  },
  { img: BGImg2, text: "Text " },
];

const carouselSettings = {
  animation: "slide",
  duration: 500,
  stopPlayOnHover: true,
  interval: 4000,
  cycleNavigation: true,
  swipe: true,
  indicatorIconButtonProps: {
    size: "large",
  },
  IndicatorIcon: <FiberManualRecordIcon style={{ fontSize: "0.8rem" }} />,
};

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Grid className={classes.root} spacing={3} container>
      {/* may text na part */}
      <Grid
        item
        container
        alignItems={"center"}
        item
        lg={6}
        justifyContent={"center"}
        xs={12}
      >
        <Grid xs={12} item>
          <Paper
            sx={{ boxShadow: 0, borderRadius: 0 }}
            className={classes.paper}
          >
            {!md && (
              <img
                className={classes.logo}
                src={ReDietLogo}
                alt="rediet-logo"
              />
            )}

            <Grid item container justifyContent="center">
              <LoadingButton
                sx={{
                  marginTop: "3rem",
                  color: "white",
                }}
                color="google"
                onClick={handleClick}
                loading={loading}
                variant="contained"
              >
                Continue With Google
              </LoadingButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* may image na part */}
      {!md && (
        <Grid
          item
          container
          lg={6}
          justifyContent="space-around"
          alignItems="center"
        >
          {/* <img className={classes.logo} src={BGImg1} alt="rediet-logo" /> */}

          <Grid item xs={11}>
            <Carousel {...carouselSettings}>
              {CarouselItems.map(({ text, img }) => (
                <div className={classes.carouseItem}>
                  <Grid
                    sx={{ marginBottom: "1rem" }}
                    container
                    justifyContent="center"
                  >
                    <img
                      className={classes.carouselImage}
                      src={img}
                      alt="rediet-logo"
                    />
                  </Grid>
                  <Typography align="center" variant="h5" color="textPrimary">
                    {text}
                  </Typography>
                </div>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
