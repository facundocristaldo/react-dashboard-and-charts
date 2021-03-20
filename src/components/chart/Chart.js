import React, { useEffect, useRef, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { ResponsiveContainer } from "recharts";
import Loader from "../notifications/Loader";
import { RADAR, FUNNEL } from "./chartTypes";
import data from "../../mockData/lineData.json";
import radarData from "../../mockData/radarData.json";
import funnelData from "../../mockData/funnelData.json";
import { getChart, getChartButtons } from "./chartsUtils";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(1),
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    position: "relative"
  },
  chartStrokes: {
    stroke: theme.palette.primary.main
  },
  loadIndicator: {
    color: "grey"
  }
}));

const Chart = ({ type, title, layoutChangedTime }) => {
  const classes = useStyles();

  const [showAxisNames, setShowAxisNames] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const [showPerson1, setShowPerson1] = useState(true);
  const [showPerson2, setShowPerson2] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [chartBoxHeight, setChartBoxHeight] = useState(
    "calc(100% - 30px - 1.714rem)"
  );

  const buttonBoxRef = useRef(null);
  const titleRef = useRef(null);

  const handleResize = () => {
    updateChartBoxHeight();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  useEffect(() => {
    updateChartBoxHeight();
  }, [layoutChangedTime]);
  const updateChartBoxHeight = () => {
    setChartBoxHeight(
      `calc(100% - ${buttonBoxRef?.current?.clientHeight}px - ${titleRef?.current?.clientHeight}px)`
    );
  };

  //chart
  let chart = null;
  let parms = {
    type,
    showAxisNames,
    showGrid,
    showTooltip,
    showPerson1,
    showPerson2,
    showLegend
  };
  parms.data = data;
  if (type === RADAR) parms.data = radarData;
  if (type === FUNNEL) parms.data = funnelData;
  chart = getChart(parms);

  //Buttons
  let buttons = getChartButtons({
    type,
    showAxisNames,
    showGrid,
    showLegend,
    showPerson1,
    showPerson2,
    showTooltip,
    setShowAxisNames,
    setShowGrid,
    setShowLegend,
    setShowPerson1,
    setShowPerson2,
    setShowTooltip
  });

  return (
    <Box className={classes.box}>
      <Typography variant="h6" ref={titleRef}>
        {title}
      </Typography>
      <Box ref={buttonBoxRef}>{buttons}</Box>
      <Box height={chartBoxHeight}>
        <ResponsiveContainer>
          {chart || (
            <Loader isLoading={true} customClass={classes.loadIndicator} />
          )}
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Chart;
