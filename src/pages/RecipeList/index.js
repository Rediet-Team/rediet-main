import React from "react";
import { Typography, Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
  })
);

var options = {
  method: "GET",
  url: "https://edamam-recipe-search.p.rapidapi.com/search",
  params: { q: "chicken" },
  headers: {
    "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
    "x-rapidapi-key": "ae04700101msh41d5f070a82078ep195b34jsnf553f17f9014",
  },
};

const Recipe = () => {
  const [searchResults, setSearchResults] = React.useState(null);
  const { searchString } = useParams();
  const classes = useStyle();

  console.log(searchString);

  const search = async (e) => {
    e.preventDefault();
    if (searchString.length > 0) {
      let response = await axios.request({
        ...options,
        params: { q: searchString.toLowerCase() },
      });
      setSearchResults(response.data.hits);
    }
  };

  return (
    <Grid className={classes.root} container>
      <Typography color="textPrimary" variant="h2">
        {" "}
        Recipe List Page{" "}
      </Typography>
    </Grid>
  );
};

export default Recipe;
