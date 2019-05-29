import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ProviderWithTracking } from "@digitaloptgroup/cms-react";

const appConfig =
  (typeof window !== "undefined" && window.__APP_CONFIG__) || {};

const cmsConfig = {
  apiUrl: process.env.REACT_APP_DOG_API_URL,
  projectId: process.env.REACT_APP_DOG_PROJECT_ID,
  apiKey: process.env.REACT_APP_DOG_API_KEY,
  rid: appConfig.rid,
  vid: appConfig.vid,
  startTimestamp: appConfig.startTimestamp
};

ReactDOM.render(
  <ProviderWithTracking {...cmsConfig}>
    <App />
  </ProviderWithTracking>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
