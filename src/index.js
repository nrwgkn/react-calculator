import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import CalculatorContainer from "./containers/CalculatorContainer";

const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CalculatorContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
