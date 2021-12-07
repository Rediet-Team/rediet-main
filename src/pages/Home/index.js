import {
  Grid,
  Typography,
  Paper,
  Button,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles, createStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import axios from "axios";

var options = {
  method: "GET",
  url: "https://edamam-recipe-search.p.rapidapi.com/search",
  params: { q: "chicken" },
  headers: {
    "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
    "x-rapidapi-key": "ae04700101msh41d5f070a82078ep195b34jsnf553f17f9014",
  },
};

const useStyle = makeStyles((theme) =>
  createStyles({
    paperSearchContainer: {
      padding: "20rem",
    },
  })
);

const Home = () => {
  const [recipeList, setRecipeList] = React.useState({});
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    let testFunction = async () => {
      let response = await axios.request(options);
      setRecipeList(response.data.hits);
    };

    testFunction();
  }, []);

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();
    if (searchString.length > 0) {
      let response = await axios.request({
        ...options,
        params: { q: searchString.toLowerCase() },
      });
      console.log("Eto yung result", response.data);
    }
  };

  return (
    <Grid style={{ minHeight: "100vh" }} container direction="column">
      <Grid item container xs={12}>
        <Paper sx={{ padding: "10rem 0", width: "100%" }}>
          <Grid container item justifyContent={"space-around"}>
            <form onSubmit={search}>
              <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.5 }}
              >
                <FormControl>
                  {/* <InputLabel htmlFor="searchField">Search</InputLabel> */}
                  <OutlinedInput
                    // label="Search"
                    id="searchField"
                    placeholder="Search"
                    onChange={handleSearch}
                    value={searchString}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton type="submit" onClick={search}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </motion.div>
            </form>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={10}></Grid>
    </Grid>
  );
};

export default Home;
