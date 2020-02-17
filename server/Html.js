import React from "react";

const Html = props => {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <title>React Server-Side Rendering</title>
        <script
          dangerouslySetInnerHTML={{ __html: props.preloadState }}
        ></script>
      </head>
      <body>
        <div id="root">{props.children}</div>
        <script src={props.script}></script>
      </body>
    </html>
  );
};

export default Html;
