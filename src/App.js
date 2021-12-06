// Routing
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// UI
import { ThemeProvider } from "@mui/material/styles";
import Theme from "theme";

// Fonts
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

// Pages
import { Home, NotFound } from "pages";

const Pages = [
  { path: "/home", Component: Home },
  { path: "*", Component: NotFound },
];

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          {Pages.map(({ path, Component }) => (
            <React.Fragment key={path}>
              <Route exact path={path} element={<Component />} />
            </React.Fragment>
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
