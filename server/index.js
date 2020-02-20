// Express
import express from "express";

// React
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import WDM from "./WDM";
import App from "../client/App";
import Html from "./Html";

const app = express();
const port = 5000;

// client 소스를 빌드하는 미들웨어
app.use(WDM);

// 모든 요청에 대해 ssr로 처리함
app.get("*", function(req, res, next) {
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
    <StaticRouter location={req.url}>
      <Html {...renderProps}>
        <App data={preloadState} />
      </Html>
    </StaticRouter>,
  ).pipe(res);
});

app.listen(port, () => {
  console.log(`listening :: http://localhost:${port}`);
});
