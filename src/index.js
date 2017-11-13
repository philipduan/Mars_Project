import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./component/main";
import "./style/reset.css";
import "./index.css";
import "./fonts/fonts.css";


ReactDOM.render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
  document.getElementById("root")
);
