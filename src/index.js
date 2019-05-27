import React from "react";
import ReactDOM from "react-dom";

import { LocaleProvider } from "antd";
import frFR from "antd/lib/locale-provider/fr_FR";

import "antd/dist/antd.css";
import "./index.scss";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <LocaleProvider locale={frFR}>
    <App />
  </LocaleProvider>,
  rootElement
);
