// index.js file
import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json";
import Menu from "./menu";
import Home from "./home";
import Activities from "./activities";
import Membership from "./membership";

// Function component use -- looks like custom HTML
let contents =
      <><Menu /><Membership /></>;

ReactDOM.render(contents, document.getElementById("root"));