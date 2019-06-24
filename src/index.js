import { init } from "@sentry/browser";

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
