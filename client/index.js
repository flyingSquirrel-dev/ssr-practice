import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.hydrate(
  <App data={window.__FLYING_SQUIRREL__} />,
  document.getElementById("root"),
);
