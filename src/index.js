import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "./redux";
import { testReducer, testReducerInitialState } from "./reducer";
import { Provider } from "./redux/provider";

const rootElement = document.getElementById("root");

export const store = createStore(testReducer, testReducerInitialState);

store.subscribe(() => {
  // console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
