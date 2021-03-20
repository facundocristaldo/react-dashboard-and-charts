import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { dashboardGridReducer } from "./dashboardGridReducer";
import notificationReducer from "./notificationReducer";
import { themeReducer } from "./themeReducer";

const reducers = combineReducers({
  authentication: authReducer,
  notifications: notificationReducer,
  theme: themeReducer,
  dashboardGrid: dashboardGridReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return reducers(state, action);
};
export default rootReducer;
