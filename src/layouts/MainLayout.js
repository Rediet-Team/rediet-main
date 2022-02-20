import React from "react";
import { Grid, Paper } from "@mui/material";
import { Navbar } from "components";

const MainLayout = ({ children }) => {
  return (
    <Grid
      sx={{ minHeight: "100vh", maxHeight: "100vh", overflowY: "scroll" }}
      container
      alignContent="space-between"
    >
      <Grid xs={12} item sx={{ maxHeight: "89vh", overflowY: "scroll" }}>
        {children}
      </Grid>
      <Grid sx={{ maxHeight: "10vh", minHeight: "10vh" }} xs={12}>
        <Navbar />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
