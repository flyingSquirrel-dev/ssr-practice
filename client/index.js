import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.hydrate(
  <BrowserRouter>
    <App data={window.__FLYING_SQUIRREL__} />
  </BrowserRouter>,
  document.getElementById("root"),
);
