import { combineReducers } from "redux";
import counter from "./counter";

export default combineReducers({
  counter
});

export interface Store {
  counter: {
    num: number;
  };
}
