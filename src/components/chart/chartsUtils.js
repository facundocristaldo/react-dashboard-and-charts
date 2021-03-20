import { Button } from "@material-ui/core";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PolarGrid,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  FunnelChart,
  Funnel,
  LabelList
} from "recharts";
import { AREA, LINE, BAR, RADAR, FUNNEL } from "./chartTypes";

export const getChart = ({
  type,
  data,
  showAxisNames,
  showGrid,
  showTooltip,
  showPerson1,
  showPerson2,
  showLegend
}) => {
  let chart = null;
  switch (type) {
    case LINE:
      chart = (
        <LineChart data={data}>
          {showAxisNames && <XAxis dataKey="name" />}
          {showAxisNames && <YAxis />}
          {showGrid && <CartesianGrid stroke="#ccc" />}
          {showTooltip && <Tooltip />}
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      );
      break;
    case AREA:
      chart = (
        <AreaChart data={data}>
          {showAxisNames && <XAxis dataKey="name" />}
          {showAxisNames && <YAxis />}
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />}
          {showTooltip && <Tooltip />}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#291F1E"
            fillOpacity={0.5}
            fill="#291F1E"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#477998"
            fillOpacity={0.5}
            fill="#477998"
          />
        </AreaChart>
      );
      break;
    case BAR:
      chart = (
        <BarChart data={data}>
          {showAxisNames && <XAxis dataKey="name" />}
          {showAxisNames && <YAxis />}
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          {showTooltip && <Tooltip />}
          <Bar
            type="monotone"
            dataKey="uv"
            stroke="#291F1E"
            fillOpacity={0.5}
            fill="#291F1E"
          />
          <Bar
            type="monotone"
            dataKey="pv"
            stroke="#477998"
            fillOpacity={0.5}
            fill="#477998"
          />
        </BarChart>
      );
      break;
    case RADAR:
      chart = (
        <RadarChart data={data}>
          {showGrid && <PolarGrid />}
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, data[0].maxValue]} />
          {showPerson1 && (
            <Radar
              name="Person 1"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          )}
          {showPerson2 && (
            <Radar
              name="Person 2"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
          )}
          {showLegend && <Legend />}
        </RadarChart>
      );
      break;
    case FUNNEL:
      chart = (
        <FunnelChart>
          {showTooltip && <Tooltip />}
          <Funnel dataKey="value" data={data} isAnimationActive>
            {showLegend && (
              <LabelList
                position="right"
                fill="#000"
                stroke="none"
                dataKey="name"
              />
            )}
          </Funnel>
        </FunnelChart>
      );
      break;
    default:
      break;
  }
  return chart;
};

export const getChartButtons = ({
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
}) => {
  let buttons = [];
  if (type !== RADAR && type !== FUNNEL)
    buttons.push(
      getActionButton({
        key: "axisbtn",
        onClick: () => setShowAxisNames(!showAxisNames),
        name: "Axis Names",
        active: showAxisNames
      })
    );
  if (type !== FUNNEL)
    buttons.push(
      getActionButton({
        key: "gridbtn",
        onClick: () => setShowGrid(!showGrid),
        name: "Cartesian Grid",
        active: showGrid
      })
    );
  if (type !== RADAR)
    buttons.push(
      getActionButton({
        key: "tooltipbtn",
        onClick: () => setShowTooltip(!showTooltip),
        name: "Tooltip",
        active: showTooltip
      })
    );
  if (type === RADAR) {
    buttons.push(
      getActionButton({
        key: "person1btn",
        onClick: () => setShowPerson1(!showPerson1),
        name: "Person 1",
        active: showPerson1
      })
    );
    buttons.push(
      getActionButton({
        key: "person2btn",
        onClick: () => setShowPerson2(!showPerson2),
        name: "Person 2",
        active: showPerson2
      })
    );
  }
  if (type === RADAR || type === FUNNEL)
    buttons.push(
      getActionButton({
        key: "legendbtn",
        onClick: () => setShowLegend(!showLegend),
        name: "Legend",
        active: showLegend
      })
    );
  return buttons;
};
const getActionButton = ({ key, onClick, name, active }) => (
  <Button key={key} size="small" variant="text" onClick={onClick}>
    {!active ? "Show" : "Hide"} {name}
  </Button>
);
