// Routing
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// UI
import { ThemeProvider } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import Theme from "theme";

// Fonts
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

// Layouts
import { MainLayout } from "layouts";

// Pages
import {
  Login,
  Home,
  NotFound,
  Recipe,
  RecipeList,
  Ingredient,
  SearchResults,
  Test,
} from "pages";

const Pages = [
  { path: "/", Component: Login },
  { path: "/home", Component: Home, layout: "main" },
  { path: "/search-results/:searchString", Component: SearchResults },
  { path: "/recipe", Component: Recipe },
  { path: "/recipe-list/:searchString", Component: RecipeList },
  { path: "/test", Component: Test },
  { path: "/category/:ingredient", Component: Ingredient },
  { path: "*", Component: NotFound },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: (props) => props.palette.background.default,
  },
}));

function App() {
  const [theme, setTheme] = useState(Theme.darkTheme);
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <Routes>
            {Pages.map(({ path, Component, layout }) => (
              <React.Fragment key={path}>
                {!layout ? (
                  <Route exact path={path} element={<Component />} />
                ) : !!layout && layout === "main" ? (
                  <Route
                    exact
                    path={path}
                    element={
                      <MainLayout>
                        <Component />
                      </MainLayout>
                    }
                  />
                ) : null}
              </React.Fragment>
            ))}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
