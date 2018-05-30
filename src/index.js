import React from "react";
import ReactDOM from "react-dom";
import { importAll } from "./js/helper/importAll.js";

// import all pug files but exlclude the one that has underscore (_)
importAll(
  require.context("./view/", true, /(^(?!.*(_)).*\.pug$)|^(?!.*(_)).*\$/)
);
// import components
import App from "./js/app.js";

// import styling
import "./app.scss";

let y = document.getElementById("app");
if (y) ReactDOM.render(<App />, y);

module.hot.accept();
