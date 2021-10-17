import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/index.scss";
import Header from "./Components/Header";
import AddDevice from "./Components/AddDevice";
import ShowDevices from "./Components/ShowDevices";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/addDevice">
          <AddDevice />
        </Route>
        <Route path="/">
          <ShowDevices />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
