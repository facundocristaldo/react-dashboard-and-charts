import { RESTORE_DEFAULT_GRID_LAYOUT, SAVE_GRID_LAYOUT } from "./types";

export const saveGridLayout = (gridLayout, cardsState) => {
  return {
    type: SAVE_GRID_LAYOUT,
    payload: {
      gridLayout,
      cardsState
    }
  };
};
export const restoreDefaultGridLayout = () => {
  return {
    type: RESTORE_DEFAULT_GRID_LAYOUT
  };
};
