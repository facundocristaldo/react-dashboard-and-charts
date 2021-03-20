import { TOGGLE_THEME } from "../actions/types";
import { getLocalState, setLocalState } from "../utils/localStorage";

const initialState = {
  theme: getLocalState("theme") || "LIGHT"
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (state.theme === "LIGHT") {
        setLocalState("theme", "DARK");
        return {
          ...state,
          theme: "DARK"
        };
      } else {
        setLocalState("theme", "LIGHT");
        return {
          ...state,
          theme: "LIGHT"
        };
      }
    default:
      return state;
  }
};
