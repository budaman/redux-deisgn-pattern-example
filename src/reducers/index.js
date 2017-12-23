import { combineReducers } from "redux";
import todos from "./todos-reducer";
import visibilityFilter from "./visibility-filter-reducer";


//combined all reducers
const todoReducers = combineReducers({
  todos,
  visibilityFilter
});

export default todoReducers;
