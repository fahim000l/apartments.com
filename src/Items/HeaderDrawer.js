import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/apartments-for-rent-logo.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function HeaderDrawer({ menuItems }) {
  const [expended, setExpended] = React.useState("");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleExpended = (item) => {
    if (expended === item?.title) {
      setExpended("");
    } else {
      setExpended(item?.title);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src={logo} className="w-[200px] mx-auto my-2" alt="" />
      <Divider />
      <List>
        {["Sign In", "Sign Up", "Send email", "Add a Property"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {menuItems?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item?.children ? (
              <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                  onClick={() => handleExpended(item)}
                  expandIcon={
                    expended === item?.title ? <RemoveIcon /> : <AddIcon />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item?.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item?.children?.map((child) => (
                    <ListItemButton>{child}</ListItemButton>
                  ))}
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItemButton>{item?.title}</ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="lg:hidden block">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "black" }} />{" "}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
