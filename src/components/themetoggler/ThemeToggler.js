import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../state/actions/themeActions";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toggleBtn: {
    color: "#eee"
  }
}));

export default function () {
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button onClick={toggle} className={classes.toggleBtn}>
      {theme === "LIGHT" ? (
        <WbSunnyOutlined color="inherit" />
      ) : (
        <NightsStayOutlinedIcon />
      )}
    </Button>
  );
}
