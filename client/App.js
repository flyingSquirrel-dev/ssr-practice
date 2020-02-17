import React, { useState, useEffect } from "react";

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
    </div>
  );
};

export default App;
