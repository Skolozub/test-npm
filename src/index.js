import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store } from "./constants/store";
import { history } from "./constants/global";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { App } from "./app";

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Source Sans Pro', 'Lucida Grande', sans-serif;
    line-height: 1;
  }
`;

const Index = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Reset />
      <GlobalStyles />
      <App />
    </ConnectedRouter>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
