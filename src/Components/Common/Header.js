import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/apartments-for-rent-logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import { Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HeaderDrawer from "../../Items/HeaderDrawer";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorLanEl, setAnchorLanEl] = React.useState(null);
  const Lanopen = Boolean(anchorLanEl);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [canchorEl, setCAnchorEl] = React.useState(null);
  const copen = Boolean(canchorEl);
  const handleCClose = () => {
    setCAnchorEl(null);
  };

  const menuItems = [
    {
      title: "Renter Tools",
      children: ["Favourites", "Saved Searches", "Rental Calculator"],
    },
    {
      title: "Manage Rents",
    },
    {
      title: "Apartments For Rent",
      children: [
        "Atlanta Apartments for Rent",
        "Austin Apartments for Rent",
        "Chicago Apartments for Rent",
        "Dallas Apartments for Rent",
        "Houston Apartments for Rent",
        "Los Angeles Apartments for Rent",
        "Miami Apartments for Rent",
        "New York Apartments for Rent",
        "Orlando Apartments for Rent",
        "Seattle Apartments for Rent",
      ],
    },
    {
      title: "Homes For Rent",
      children: [
        "Atlanta Homes for Rent",
        "Charlotte Homes for Rent",
        "Dallas Homes for Rent",
        "Houston Homes for Rent",
        "Las Vegas Homes for Rent",
        "Los Angeles Homes for Rent",
        "Nashville Homes for Rent",
        "New Jersey Homes for Rent",
        "Orlando Homes for Rent",
        "Phoenix Homes for Rent",
      ],
    },
    {
      title: "Condos For Rent",
      children: [
        "Atlanta Condos for Rent",
        "Chicago Condos for Rent",
        "Dallas Condos for Rent",
        "houston Condos for Rent",
        "Las Vegas Condos for Rent",
        "Los Angeles Condos for Rent",
        "Miami Condos for Rent",
        "Orlando Condos for Rent",
        "Phoenix Condos for Rent",
        "San Diego Condos for Rent",
      ],
    },
    {
      title: "Townhomes For Rent",
      children: [
        "Atlanta Townhomes for Rent",
        "Austis Townhomes for Rent",
        "Charlotte Townhomes for Rent",
        "Dallas Townhomes for Rent",
        "Houston Townhomes for Rent",
        "Las Vegas Townhomes for Rent",
        "Nashville Townhomes for Rent",
        "Phoenix Townhomes for Rent",
        "Releigh Townhomes for Rent",
        "San Antonio Townhomes for Rent",
      ],
    },
    {
      title: "Help Center",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: ["", "", "space-between"],
            alignItems: "cemter",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <HeaderDrawer menuItems={menuItems} />
            <div className="hidden lg:block">
              <Button
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "gray",
                    color: "white",
                  },
                }}
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <MenuIcon sx={{ mr: 2 }} />
                <span className="hidden lg:block">Menu</span>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {menuItems?.map((item, i) =>
                  item?.children ? (
                    <MenuItem
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        "&:hover": {
                          backgroundColor: "green",
                          color: "white",
                        },
                      }}
                    >
                      {item?.title} <ChevronRightIcon />{" "}
                    </MenuItem>
                  ) : (
                    <MenuItem
                      sx={{
                        "&:hover": {
                          backgroundColor: "green",
                          color: "white",
                        },
                      }}
                      key={i}
                    >
                      {item?.title}
                    </MenuItem>
                  )
                )}
              </Menu>
            </div>
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={Lanopen ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Lanopen ? "true" : undefined}
                onClick={(event) => setAnchorLanEl(event.currentTarget)}
                sx={{
                  color: "black",
                  display: ["none", "none", "block"],
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                <LanguageIcon sx={{ mr: 2 }} />
                English
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorLanEl}
                open={Lanopen}
                onClose={() => setAnchorLanEl(null)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={() => setAnchorLanEl(null)}>
                  <Button
                    fullWidth
                    sx={{ mr: 2, fontSize: "10px" }}
                    variant="contained"
                    color="success"
                  >
                    English
                  </Button>
                  <Button
                    sx={{ fontSize: "10px" }}
                    fullWidth
                    variant="outlined"
                  >
                    es·pa·ño·les
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </Box>
          <img className="w-[150px] lg:w-[200px] mx-auto" src={logo} alt="" />
          <Box sx={{ display: ["none", "none", "block"] }}>
            <Button sx={{ color: "black", textTransform: "none" }}>
              Manage rents
            </Button>
            <Button sx={{ color: "black", textTransform: "none" }}>
              Sign Up
            </Button>{" "}
            /
            <Button sx={{ color: "black", textTransform: "none" }}>
              Sign In
            </Button>
            <Button
              disableFocusRipple
              disableRipple
              disableElevation
              sx={{
                color: "white",
                backgroundColor: "gray",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "gray",
                  textDecoration: "underline",
                },
              }}
            >
              Add Property
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
