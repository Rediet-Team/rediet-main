import { Typography, Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
    },
  })
);

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Typography color="textPrimary" align="center" variant="h3">
        Page Not Found
      </Typography>
    </Grid>
  );
};
export default NotFound;
