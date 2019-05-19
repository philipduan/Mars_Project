import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Main from "./component/main";
import "./style/reset.css";
import "./index.css";
import "./fonts/fonts.css";

//testing comments of this
ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById("root")
);
