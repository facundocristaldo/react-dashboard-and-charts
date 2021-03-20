import {
  AREA,
  BAR,
  FUNNEL,
  LINE,
  RADAR
} from "../../components/chart/chartTypes";

export const LINE_CHAR_MIN_WITH = 3;
export const RADAR_CHAR_MIN_WITH = 5;
export const FUNNEL_CHAR_MIN_WITH = 4;
export const BAR_CHAR_MIN_WITH = 3;
export const AREA_CHAR_MIN_WITH = 3;

const cardKeyOne = "1";
const cardKeyTwo = "2";
const cardKeyThree = "3";
const cardKeyFour = "4";
const cardKeyFive = "5";
const cardKeySix = "6";
const cardKeySeven = "7";
const cardKeyEight = "8";

export const initialCardState = [
  {
    key: cardKeyOne,
    chartType: LINE,
    title: "Line Chart",
    visible: true
  },
  {
    key: cardKeyTwo,
    chartType: BAR,
    title: "Bar Chart",
    visible: true
  },
  {
    key: cardKeyThree,
    chartType: AREA,
    title: "Area Chart",
    visible: true
  },
  {
    key: cardKeyFour,
    chartType: RADAR,
    title: "Radar Chart",
    visible: true
  },
  {
    key: cardKeyFive,
    chartType: FUNNEL,
    title: "Funnel Chart",
    visible: true
  },
  {
    key: cardKeySix,
    chartType: LINE,
    title: "Other Line Chart",
    visible: true
  },
  {
    key: cardKeySeven,
    chartType: RADAR,
    title: "Other Radar Chart",
    visible: true
  },
  {
    key: cardKeyEight,
    chartType: AREA,
    title: "Other Area Chart",
    visible: true
  }
];
export const initialGridLayout = [
  {
    w: 12,
    h: 2,
    x: 0,
    y: 0,
    i: cardKeyOne,
    minW: 3,
    minH: 2,
    moved: false,
    static: false
  },
  {
    w: 6,
    h: 2,
    x: 0,
    y: 2,
    i: cardKeyTwo,
    minW: 3,
    minH: 2,
    moved: false,
    static: false
  },
  {
    w: 6,
    h: 2,
    x: 6,
    y: 2,
    i: cardKeyThree,
    minW: 3,
    minH: 2,
    moved: false,
    static: false
  },
  {
    w: 5,
    h: 3,
    x: 0,
    y: 4,
    i: cardKeyFour,
    minW: 5,
    minH: 3,
    moved: false,
    static: false
  },
  {
    w: 7,
    h: 3,
    x: 5,
    y: 4,
    i: cardKeyFive,
    minW: 4,
    minH: 2,
    moved: false,
    static: false
  },
  {
    w: 7,
    h: 3,
    x: 0,
    y: 7,
    i: cardKeySix,
    minW: 3,
    minH: 2,
    moved: false,
    static: false
  },
  {
    w: 5,
    h: 3,
    x: 7,
    y: 7,
    i: cardKeySeven,
    minW: 5,
    minH: 3,
    moved: false,
    static: false
  },
  {
    w: 12,
    h: 3,
    x: 0,
    y: 10,
    i: cardKeyEight,
    minW: 3,
    minH: 2,
    moved: false,
    static: false
  }
];
