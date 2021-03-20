import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "../components/routing/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../components/navbar/Navbar";
import Home from "../containers/Home";
import User from "../containers/User";
import MiniDrawer from "../components/minidrawer/MiniDrawer";
import Table from "../containers/Table";
import Dashboard from "../containers/dashboard/Dashboard";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    // paddingLeft is sum of padding and MiniDrawer width when closed
    // So that page content does not get behind MiniDrawer
    paddingLeft: theme.spacing(2) + theme.spacing(7) + 1
  }
}));

function Layout() {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <MiniDrawer />
        <Container className={classes.container}>
          <Switch>
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/table" component={Table} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default Layout;
