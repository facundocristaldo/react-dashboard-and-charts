import React from "react";
import { ResponsiveContainer } from "recharts";
import MaterialTable from "material-table";

import { dataValues, dataStructure, dataTitle } from "../../mockData/dataTable";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    height: "100%"
  }
}));

const pageSizeOptions = [5, 10, 15, 20];

export default function DataTable() {
  const classes = useStyles();
  return (
    <ResponsiveContainer>
      <MaterialTable
        className={classes.table}
        options={{ pageSizeOptions }}
        columns={dataStructure}
        data={dataValues}
        title={dataTitle}
      />
    </ResponsiveContainer>
  );
}
