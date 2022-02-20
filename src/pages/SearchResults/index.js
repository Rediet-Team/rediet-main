import React from "react";

// MUI
import { Grid, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      height: "auto",
      width: "100%",
    },
  })
);

const SearchResults = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h3" color="textPrimary">
        Search Results
      </Typography>
    </Grid>
  );
};

export default SearchResults;
