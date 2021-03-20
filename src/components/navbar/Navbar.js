import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, AppBar, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../state/actions/authActions";
import ThemeToggler from "../themetoggler/ThemeToggler";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  darkTheme: {
    backgroundColor: theme.palette.primary.dark
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const storeTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={classes.root}>
      {/* // TODO : review this darktheme implementation*/}
      <AppBar
        position="fixed"
        className={storeTheme === "LIGHT" ? "" : classes.darkTheme}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard and Charts
          </Typography>
          <ThemeToggler />
          <Button color="inherit" onClick={handleLogout} data-cy="logout">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
