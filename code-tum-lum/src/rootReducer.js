import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import calculatorReducer from "./calculatorReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  calculator: calculatorReducer,
});

export default rootReducer;
