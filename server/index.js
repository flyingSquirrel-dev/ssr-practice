// Express
import express from "express";

// React
import React from "react";
import ReactDOMServer from "react-dom/server";
import WDM from "./WDM";
import App from "../client/App";
import Html from "./Html";

const app = express();
const port = 5000;

app.use(WDM);

app.get("/", function(req, res, next) {
  let preloadState = {
    text: "Server-Side Rendering",
  };

  let renderProps = {
    preloadState: `window.__FLYING_SQUIRREL__ = ${JSON.stringify(
      preloadState,
    ).replace(/</g, "\\u003c")}`,
    script: "http://localhost:5000/build/client.bundle.js",
  };

  ReactDOMServer.renderToNodeStream(
    <Html {...renderProps}>
      <App data={preloadState} />
    </Html>,
  ).pipe(res);
});

app.listen(port, () => {
  console.log(`listening :: http://localhost:${port}`);
});
