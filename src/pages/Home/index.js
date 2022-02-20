import React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import {
  Grid,
  Typography,
  Paper,
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { makeStyles, createStyles, useTheme } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

// Framer Motion
import { AnimatePresence, motion } from "framer-motion";

// Assets
import SearchBG from "assets/images/SearchBG.svg";

// Services
import { getCategories } from "services";

// Custom Component(s)
import { Category } from "components";

const useStyle = makeStyles((theme) =>
  createStyles({
    paperSearchContainer: {
      padding: "10rem 0",
      width: "100%",
    },
  })
);

const Ingredients = [
  { name: "Pork", picture: "test" },
  { name: "Chicken", picture: "test" },
  { name: "Fish", picture: "test" },
  { name: "Vegetables", picture: "test" },
  { name: "Pork", picture: "test" },
];

const Home = () => {
  const theme = useTheme();
  const [recipeList, setRecipeList] = React.useState([]);
  const [searchString, setSearchString] = React.useState("");
  const [categories, setCategories] = React.useState();
  const [fade, setFade] = React.useState(false);
  const classes = useStyle();
  const navigate = useNavigate();

  React.useEffect(() => {
    let GetCategories = async () => {
      let res = await getCategories();
      setCategories(res);
    };
    GetCategories();
  }, []);

  React.useEffect(() => {
    if (!!categories && categories.length > 0) {
      console.log("Category Test", categories);
    }
  }, [categories]);

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();
    setFade(true);
    window.setTimeout(() => {
      navigate(`/search-results/${searchString}`);
    }, 250);
  };

  React.useEffect(() => {
    if (recipeList) {
      console.log("Recipe List Set", recipeList);
    }
  }, [recipeList]);

  return (
    <AnimatePresence>
      {!fade && (
        <motion.div exit={{ opacity: 0 }}>
          <Grid style={{ height: "auto" }} container direction="column">
            <Grid item container xs={12}>
              <Grid item container spacing={3}>
                {!!categories &&
                  categories.map((category, index) => (
                    <Grid key={index} item xs={6}>
                      <Category
                        {...category}
                        path={`/category/${category.display.displayName}`}
                        name={category.display.displayName}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
