import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ProviderWithTracking } from "@digitaloptgroup/cms-react";

const appConfig =
  (typeof window !== "undefined" && window.__APP_CONFIG__) || {};

const projectId = "neat-cookie-220";

const cmsConfig = {
  apiUrl: `https://api-${projectId}.edgeyates.com`,
  projectId,
  rid: appConfig.rid || "development-test_rid",
  vid: appConfig.vid || "development-test_vid",
  startTimestamp: appConfig.startTimestamp || 0
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
