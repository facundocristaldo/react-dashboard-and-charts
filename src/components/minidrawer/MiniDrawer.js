import React from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { drawerItems } from "./drawerItems";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    whiteSpace: "nowrap",
    // add a margin so that content doens not fall behind navigation bar
    marginTop: 56,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      marginTop: 48
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 64
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  drawerToggler: {
    borderRadius: 0
  },
  listItemIcon: {
    marginLeft: ".3em"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const navHistory = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerBtn = !open ? (
    <IconButton onClick={handleDrawerOpen} className={classes.drawerToggler}>
      <ChevronRight />
    </IconButton>
  ) : (
    <IconButton onClick={handleDrawerClose} className={classes.drawerToggler}>
      <ChevronLeft />
    </IconButton>
  );
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={`${classes.drawer} ${
        open ? classes.drawerOpen : classes.drawerClose
      }`}
      classes={{
        paper: `${classes.drawer}  ${
          open ? classes.drawerOpen : classes.drawerClose
        }`
      }}
    >
      {drawerBtn}
      <Divider />
      <List>
        {drawerItems.map((menuItem) => (
          <ListItem
            button
            key={menuItem.title}
            onClick={() => navHistory.push(menuItem.link)}
          >
            <ListItemIcon className={classes.listItemIcon}>
              {menuItem.icon}
            </ListItemIcon>
            <ListItemText primary={menuItem.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
