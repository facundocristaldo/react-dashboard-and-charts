import React from "react";
import { Person, TableChart, Home, Dashboard } from "@material-ui/icons";

export const drawerItems = [
  { title: "Home", icon: <Home />, link: "/home" },
  { title: "Dashboard", icon: <Dashboard />, link: "/dashboard" },
  { title: "Table", icon: <TableChart />, link: "/table" },
  { title: "User", icon: <Person />, link: "/user" }
];
