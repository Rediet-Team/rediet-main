import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "1rem",
      cursor: "pointer",
    },
  })
);

const Category = (props) => {
  const classes = useStyle();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(props);
  }, []);

  const handleRedirect = () => {
    window.setTimeout(() => {
      navigate(props.path);
    }, 500);
  };

  return (
    <motion.div>
      <Paper onClick={handleRedirect} className={classes.root}>
        <Grid container>
          <Typography color="textPrimary">{props.name}</Typography>
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default Category;
