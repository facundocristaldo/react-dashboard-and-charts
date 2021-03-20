import {
  RESTORE_DEFAULT_GRID_LAYOUT,
  SAVE_GRID_LAYOUT
} from "../actions/types";
import {
  initialCardState,
  initialGridLayout
} from "../../containers/dashboard/dashboardInitialState";
import { getLocalState, setLocalState } from "../utils/localStorage";

const storagedGridLayout = getLocalState("gridlayout");
const initialState = {
  gridLayout: storagedGridLayout?.gridLayout || initialGridLayout,
  cardsState: storagedGridLayout?.cardsState || initialCardState
};
export const dashboardGridReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_GRID_LAYOUT:
      setLocalState("gridlayout", action.payload);
      return {
        ...state,
        gridLayout: [...action.payload.gridLayout],
        cardsState: [...action.payload.cardsState]
      };
    case RESTORE_DEFAULT_GRID_LAYOUT:
      setLocalState("gridlayout", initialGridLayout);
      return {
        ...state,
        gridLayout: JSON.parse(JSON.stringify(initialGridLayout)),
        cardsState: JSON.parse(JSON.stringify(initialCardState))
      };
    default:
      setLocalState("gridlayout", state);
      return state;
      break;
  }
};
