import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HOME } from "./constants/routes";
import Home from "./Containers/Home/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
