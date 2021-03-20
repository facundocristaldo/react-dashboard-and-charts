import React, { useState } from "react";
import "react-grid-layout/css/styles.css";
import RGL, { WidthProvider } from "react-grid-layout";
import Chart from "../../components/chart/Chart";

import {
  Box,
  Button,
  Card,
  Container,
  makeStyles,
  Typography
} from "@material-ui/core";
import { Close, Save } from "@material-ui/icons";
import { initialCardState, initialGridLayout } from "./dashboardInitialState";
import { useDispatch, useSelector } from "react-redux";
import {
  restoreDefaultGridLayout,
  saveGridLayout
} from "../../state/actions/dashboardGridActions";

const useStyles = makeStyles((theme) => ({
  closeBtn: { position: "absolute", top: 0, right: 0, zIndex: 2 }
}));

const ReactGridLayout = WidthProvider(RGL);

export default function Dashboard() {
  const classes = useStyles();
  const storedDashboard = useSelector((state) => state.dashboardGrid);

  const [cards, setCards] = useState(
    [...storedDashboard.cardsState] || [...initialCardState]
  );
  const [layout, setLayout] = useState(
    [...storedDashboard.gridLayout] || [...initialGridLayout]
  );
  const [layoutChangedDateTime, setLayoutChangedDateTime] = useState(
    new Date()
  );

  const dispatch = useDispatch();

  const closeCard = (cardKey) => {
    const newCards = [...cards];
    const cardIndex = newCards.findIndex((card) => card.key === cardKey);
    newCards[cardIndex].visible = false;
    setCards(newCards);
  };

  const handleLayoutChange = (currentLayout) => {
    setLayout(currentLayout);
    setLayoutChangedDateTime(new Date());
  };

  const saveLayout = () => {
    dispatch(saveGridLayout(layout, cards));
  };
  const restoreLayout = () => {
    dispatch(restoreDefaultGridLayout());
    setCards(cards.map((card) => ({ ...card, visible: true })));
    setLayout(initialGridLayout);
    setLayoutChangedDateTime(new Date());
  };
  const getLayoutWithOnlyViisbleCards = () => {
    const visibleCardsLayout = layout
      .filter((item) => cards.find((c) => c.key === item.i)?.visible)
      .map((item) => item);
    return visibleCardsLayout;
  };
  return (
    <Container>
      <Box width="100%" textAlign="right">
        <Button variant="outlined" startIcon={<Save />} onClick={saveLayout}>
          <Typography variant="body1">Save Layout</Typography>
        </Button>
        <Button variant="outlined" startIcon={<Save />} onClick={restoreLayout}>
          <Typography variant="body1">Restore Layout</Typography>
        </Button>
      </Box>
      <ReactGridLayout
        className="layout"
        rowHeight={100}
        cols={12}
        width={"100%"}
        onLayoutChange={handleLayoutChange}
        layout={getLayoutWithOnlyViisbleCards()}
      >
        {cards
          .filter((card) => card.visible === true)
          .map((card) => (
            <Card key={card.key}>
              <Chart
                title={card.title}
                type={card.chartType}
                layoutChangedTime={layoutChangedDateTime}
              />
              <Button
                onClick={() => closeCard(card.key)}
                className={classes.closeBtn}
              >
                <Close />
              </Button>
            </Card>
          ))}
      </ReactGridLayout>
    </Container>
  );
}
