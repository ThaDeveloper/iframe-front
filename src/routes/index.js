import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "../views/index";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={IndexPage} />
    </Switch>
  </Router>
);
