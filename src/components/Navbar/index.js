import React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import {
  HomeRounded as Home,
  SearchRounded as Search,
  PersonRounded as Profile,
  FormatListNumberedRounded as ShoppingList,
} from "@mui/icons-material";

const NavItems = [
  { Icon: Home, link: "/home" },
  { Icon: Search, link: "/search-results/test" },
  { Icon: Profile, link: "/home" },
  { Icon: ShoppingList, link: "/home" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, height: "8vh" }}
    >
      <Toolbar sx={{ height: "100%" }}>
        {NavItems.map(({ Icon, link }, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <IconButton
                onClick={() => handleClick(link)}
                style={{ transform: "scale(1.2)", margin: "0 auto" }}
              >
                <Icon style={{ transform: "scale(1.2)" }} />
              </IconButton>
            </Box>
          </React.Fragment>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
