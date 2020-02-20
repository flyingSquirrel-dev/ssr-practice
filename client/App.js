import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import routers from "./router/config";
import NotFound from "./component/NotFound";

const App = props => {
  const {
    data: { text },
  } = props;
  const [clientSideText, setClientSideText] = useState(text);

  useEffect(() => {
    setClientSideText("Client Loaded");
  }, []);

  return (
    <div>
      <h1>{clientSideText}</h1>
      <nav>
        <ul>
          {routers.map(route => (
            <Link to={route.path} key={route.path}>
              <li>{route.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <Switch>
        {routers.map(route => (
          <Route
            key={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
