import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

export default function SearchDrawer() {
  const inputRf = React.useRef();

  console.log(inputRf);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    // inputRf.current.click();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <div className="mx-2 w-full">
            <div className="flex">
              <input
                autoFocus
                ref={inputRf}
                defaultValue={"Chicago , IL"}
                // onClick={toggleDrawer(anchor, true)}
                type="text"
                placeholder="something"
                className="input input-bordered w-full"
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  ml: 1,
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                Search
              </Button>
            </div>
            <Divider sx={{ my: 2 }} />
            <Button
              fullWidth
              sx={{
                textTransform: "none",
                color: "green",
                textAlign: "start",
              }}
            >
              Current Location
            </Button>
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <input
            ref={inputRf}
            readOnly
            onClick={toggleDrawer(anchor, true)}
            type="text"
            placeholder="Chicago , IL"
            className="input input-bordered w-full lg:hidden block"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
